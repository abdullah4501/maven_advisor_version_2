import { useEffect, useRef } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/feature_main2.jpg"

const calendlyUrl = "https://calendly.com/adeelshaikh/quick-catch-up-with-your-virtual-cfo?hide_gdpr_banner=1&background_color=ffffff&text_color=161616&primary_color=0c7ffb"

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: { url: string; parentElement: HTMLElement; resize: boolean }) => void
  }
}

export default function AutomationAssessment() {
  const calendlyContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = calendlyContainerRef.current
    if (!container) return

    let cancelled = false
    let resizeFrame = 0
    const minimumWidgetHeight = () => window.matchMedia("(max-width: 767px)").matches ? 1050 : 700

    const keepWidgetFullyVisible = (reportedHeight?: number) => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        if (cancelled) return
        container.style.height = `${Math.max(reportedHeight || 0, minimumWidgetHeight())}px`
      })
    }

    const handleCalendlyResize = (event: MessageEvent<{ event?: string; payload?: { height?: number } }>) => {
      if (event.origin !== "https://calendly.com" || event.data?.event !== "calendly.page_height") return
      keepWidgetFullyVisible(Number(event.data.payload?.height))
    }

    const handleWindowResize = () => keepWidgetFullyVisible(parseFloat(container.style.height))

    window.addEventListener("message", handleCalendlyResize)
    window.addEventListener("resize", handleWindowResize)
    keepWidgetFullyVisible()

    const syncIframeSize = () => {
      const iframe = container.querySelector("iframe")
      if (!iframe) return

      iframe.setAttribute("scrolling", "no")
      iframe.style.width = "100%"
      iframe.style.height = "100%"
      iframe.style.border = "0"
      iframe.style.overflow = "hidden"
    }

    const iframeObserver = new MutationObserver(syncIframeSize)
    iframeObserver.observe(container, { childList: true, subtree: true })

    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const stylesheet = document.createElement("link")
      stylesheet.rel = "stylesheet"
      stylesheet.href = "https://assets.calendly.com/assets/external/widget.css"
      document.head.appendChild(stylesheet)
    }

    const initialiseCalendly = () => {
      const calendly = (window as CalendlyWindow).Calendly
      if (cancelled || !calendly || container.childElementCount > 0) return

      calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: container,
        resize: true,
      })
    }

    let script = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    if (script) {
      if ((window as CalendlyWindow).Calendly) initialiseCalendly()
      else script.addEventListener("load", initialiseCalendly)
    } else {
      script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.addEventListener("load", initialiseCalendly)
      document.body.appendChild(script)
    }

    return () => {
      cancelled = true
      window.cancelAnimationFrame(resizeFrame)
      window.removeEventListener("message", handleCalendlyResize)
      window.removeEventListener("resize", handleWindowResize)
      script?.removeEventListener("load", initialiseCalendly)
      iframeObserver.disconnect()
      container.replaceChildren()
    }
  }, [])

  usePageMeta("Agentic AI Automation Assessment | Mavens Advisor", "Tell us which accounting, tax or compliance workflow you want to improve and start a controlled automation assessment.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Assess My Workflow" title="Show Us the Workflow That Is Taking Too Much Time" description="Describe the process, systems, approvals, exceptions and time currently consumed. We will assess whether controlled automation could reduce administration, improve turnaround and strengthen process visibility." />
      <main className="bg-white py-[80px] md:py-[120px]">
        <div className="container">
          <div className="mb-8">
            <p className="wdt-heading mb-4">Agentic AI Workflow Discussion</p>
            <h2 className="max-w-[800px] text-[36px] font-semibold leading-[1.15] md:text-[48px]">Discuss Your Agentic AI Workflow with Our CFO</h2>
            <p className="mt-5 max-w-[760px] text-[17px] leading-[1.75] text-[#6b6b6b]">Choose a convenient time to discuss the workflow, systems, approvals and repetitive tasks you want to improve.</p>
          </div>
          <div
            ref={calendlyContainerRef}
            className="calendly-inline-widget w-full overflow-hidden [&_iframe]:!h-full [&_iframe]:!w-full [&_iframe]:border-0"
            data-url={calendlyUrl}
            data-resize="true"
            style={{ minWidth: "320px", height: "700px" }}
            aria-label="Schedule an Agentic AI workflow discussion"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
