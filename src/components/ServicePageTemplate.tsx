import { ArrowDown, ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { canonicalServices, servicePages } from "@/data/services"
import { usePageMeta } from "@/hooks/usePageMeta"

type Props = { pageKey: keyof typeof servicePages }

const automationFocusAreas = [
  { title: "Accounting Automation", path: "/agentic-ai-automation/accounting", copy: "Reduce repetitive accounting work, improve consistency and surface exceptions without losing control." },
  { title: "Tax Workflow Automation", path: "/agentic-ai-automation/tax", copy: "Improve collection, routing, deadline tracking and review while professionals retain responsibility." },
  { title: "Compliance Automation", path: "/agentic-ai-automation/compliance", copy: "Strengthen obligation tracking, evidence collection, approvals and escalation with human oversight." },
]

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px 0px" },
  transition: { duration: 0.65 },
}

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export default function ServicePageTemplate({ pageKey }: Props) {
  const page = servicePages[pageKey]
  usePageMeta(page.metaTitle, page.metaDescription)
  const [activeSection, setActiveSection] = useState(0)
  const [indicatorTop, setIndicatorTop] = useState(0)
  const sectionNavRef = useRef<HTMLElement>(null)

  const canonicalIndex = canonicalServices.findIndex((service) => service.path === page.path)
  const serviceNumber = canonicalIndex >= 0 ? canonicalIndex + 1 : 8
  const related = pageKey === "virtual-cfo"
    ? canonicalServices.slice(0, 6)
    : pageKey === "agentic-ai-automation"
      ? automationFocusAreas
      : []

  useEffect(() => {
    let frame = 0

    const updateNavigation = () => {
      const sections = page.sections
        .map((section) => document.getElementById(sectionId(section.heading)))
        .filter((section): section is HTMLElement => Boolean(section))
      const navItems = Array.from(sectionNavRef.current?.querySelectorAll<HTMLElement>("[data-section-nav-item]") ?? [])

      if (!sections.length || navItems.length !== sections.length) return

      const readingLine = window.scrollY + Math.min(window.innerHeight * 0.38, 360)
      const sectionStarts = sections.map((section) => section.getBoundingClientRect().top + window.scrollY)
      const markerCenters = navItems.map((item) => item.offsetTop + item.offsetHeight / 2)
      let current = 0

      sectionStarts.forEach((start, index) => {
        if (start <= readingLine) current = index
      })

      let nextIndicatorTop = markerCenters[0]

      if (readingLine >= sectionStarts[sectionStarts.length - 1]) {
        nextIndicatorTop = markerCenters[markerCenters.length - 1]
      } else if (readingLine > sectionStarts[0]) {
        const next = Math.min(current + 1, sectionStarts.length - 1)
        const interval = Math.max(sectionStarts[next] - sectionStarts[current], 1)
        const intervalProgress = Math.min(1, Math.max(0, (readingLine - sectionStarts[current]) / interval))
        nextIndicatorTop = markerCenters[current] + (markerCenters[next] - markerCenters[current]) * intervalProgress
      }

      setActiveSection(current)
      setIndicatorTop(nextIndicatorTop)
    }

    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateNavigation)
    }

    updateNavigation()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    window.addEventListener("load", handleScroll)

    const resizeObserver = new ResizeObserver(handleScroll)
    if (sectionNavRef.current) resizeObserver.observe(sectionNavRef.current)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      window.removeEventListener("load", handleScroll)
    }
  }, [page.sections])

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, heading: string) => {
    event.preventDefault()
    const id = sectionId(heading)
    const target = document.getElementById(id)
    if (!target) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <>
      <Header />

      <section className="relative min-h-[760px] overflow-hidden bg-[#050505] text-white lg:min-h-[860px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[47%]">
          <img src={page.image} alt="" className="h-full w-full object-cover opacity-55 lg:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/35 to-transparent lg:from-[#050505] lg:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/10" />
        </div>
        <div className="absolute -left-[7vw] top-[16%] h-[520px] w-[520px] rounded-full bg-[#0C7FFE]/15 blur-[120px]" />
        <div className="absolute right-[4vw] top-[14%] select-none text-[clamp(10rem,25vw,28rem)] font-bold leading-none text-white/[0.045]">
          {String(serviceNumber).padStart(2, "0")}
        </div>

        <div className="container relative z-10 flex min-h-[760px] flex-col justify-between pb-[62px] pt-[175px] lg:min-h-[860px] lg:pb-[78px] lg:pt-[210px]">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-[860px]">
            <p className="wdt-heading mb-6 text-[#63aaff]">{page.eyebrow}</p>
            <h1 className="max-w-[940px] text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[56px] lg:text-[78px] xl:text-[88px]">
              {page.title}
            </h1>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 items-end gap-10 border-t border-white/20 pt-8 lg:grid-cols-12">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-[660px] text-[17px] leading-[1.75] text-white/75 lg:col-span-7 lg:text-[19px]">
              {page.summary}
            </motion.p>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Link to={page.primaryTo} className="inline-flex items-center gap-3 rounded-[12px] bg-primary-gradient px-7 py-[18px] text-[15px] font-semibold text-black transition-transform hover:-translate-y-1">
                {page.primaryLabel}<ArrowRight size={18} />
              </Link>
              {page.secondaryLabel && page.secondaryTo && (
                <Link to={page.secondaryTo} className="inline-flex items-center gap-3 rounded-[12px] border border-white/35 px-7 py-[18px] text-[15px] font-semibold text-white transition hover:bg-white hover:text-black">
                  {page.secondaryLabel}<ArrowRight size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>

        <a href="#service-content" aria-label="Explore service details" className="absolute bottom-5 right-5 z-20 hidden h-14 w-14 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black md:flex lg:bottom-8 lg:right-8">
          <ArrowDown size={20} />
        </a>
      </section>

      <main id="service-content" data-scroll-reveal-managed className="overflow-x-clip bg-[#f6f7f4] text-black">
        <section className="relative py-[90px] md:py-[145px]">
          <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div {...reveal} className="lg:col-span-4">
              <p className="wdt-heading mb-5">The Business Value</p>
              <div className="h-px w-full bg-black/15" />
              <p className="mt-6 max-w-[320px] text-[15px] leading-[1.7] text-[#777]">A focused service designed around the outcome your business needs—not a list of disconnected finance tasks.</p>
            </motion.div>
            <motion.div {...reveal} transition={{ duration: 0.65, delay: 0.1 }} className="lg:col-span-8">
              <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[56px] lg:text-[66px]">{page.value}</h2>
              {page.heroPoints && (
                <ul className="mt-10 grid grid-cols-1 border-t border-black/15 md:grid-cols-2">
                  {page.heroPoints.map((point, index) => (
                    <li key={point} className={`flex gap-4 border-b border-black/15 py-5 text-[16px] leading-[1.55] text-[#505050] md:pr-7 ${index % 2 === 1 ? "md:border-l md:pl-7" : ""}`}>
                      <Check size={18} className="mt-1 shrink-0 text-[#0C7FFE]" strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {page.heroNote && <p className="mt-6 max-w-[850px] text-[13px] leading-[1.7] text-[#777]">{page.heroNote}</p>}
            </motion.div>
          </div>
        </section>

        <section className="container border-t border-black/15 pb-[100px] pt-[70px] md:pb-[150px] md:pt-[100px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-[140px] max-h-[calc(100vh-175px)] pr-3">
                <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8a8a8a]">On this page</p>
                <nav ref={sectionNavRef} className="relative border-l border-black/15">
                  <span
                    aria-hidden="true"
                    className="absolute -left-px top-0 w-[2px] bg-[#0C7FFE]"
                    style={{ height: `${indicatorTop}px` }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] z-10 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-[#0C7FFE] shadow-[0_0_0_5px_rgba(12,127,254,0.12)] will-change-[top]"
                    style={{ top: `${indicatorTop}px` }}
                  />
                  {page.sections.map((section, index) => (
                    <a
                      key={section.heading}
                      href={`#${sectionId(section.heading)}`}
                      onClick={(event) => scrollToSection(event, section.heading)}
                      data-section-nav-item
                      aria-current={activeSection === index ? "location" : undefined}
                      className={`group flex items-center gap-4 py-3 pl-5 text-[14px] transition-all duration-300 ${activeSection === index ? "translate-x-1 font-medium text-black" : "text-[#777] hover:translate-x-1 hover:text-black"}`}
                    >
                      <span className={`font-medium transition-colors ${activeSection === index ? "text-[#0C7FFE]" : "text-[#8a8a8a] group-hover:text-[#0C7FFE]"}`}>{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.heading}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-[90px] md:space-y-[130px] lg:col-span-9">
              {page.sections.map((section, index) => (
                <motion.section key={section.heading} id={sectionId(section.heading)} {...reveal} className="scroll-mt-[140px] border-t border-black/15 pt-8 first:border-t-0 first:pt-0">
                  <div className="grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-2">
                      <span className="text-[14px] font-semibold text-[#0C7FFE]">/ {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="md:col-span-10">
                      <h2 className="max-w-[800px] text-[32px] font-semibold leading-[1.12] tracking-[-0.025em] md:text-[47px]">{section.heading}</h2>
                      {section.body?.map((paragraph) => (
                        <p key={paragraph} className="mt-7 max-w-[850px] text-[17px] leading-[1.82] text-[#646464] md:text-[18px]">{paragraph}</p>
                      ))}
                      {section.bullets && (
                        <ul className="mt-10 grid grid-cols-1 border-t border-black/15 md:grid-cols-2">
                          {section.bullets.map((item, itemIndex) => (
                            <li key={item} className={`flex gap-4 border-b border-black/15 py-5 text-[16px] leading-[1.55] text-[#4f4f4f] md:pr-8 ${itemIndex % 2 === 1 ? "md:border-l md:pl-8" : ""}`}>
                              <Check size={18} className="mt-1 shrink-0 text-[#0C7FFE]" strokeWidth={2.5} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </section>

        {page.faqs && page.faqs.length > 0 && (
          <section className="bg-white py-[90px] md:py-[140px]">
            <div className="container grid grid-cols-1 gap-14 lg:grid-cols-12">
              <motion.div {...reveal} className="lg:col-span-4">
                <p className="wdt-heading mb-5">Frequently Asked Questions</p>
                <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[54px]">Clear answers before you automate.</h2>
              </motion.div>
              <motion.div {...reveal} transition={{ duration: 0.65, delay: 0.1 }} className="border-t border-black/15 lg:col-span-8">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="group border-b border-black/15">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-[19px] font-semibold marker:content-none md:text-[22px]">
                      <span>{faq.question}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-[22px] font-normal transition group-open:rotate-45 group-open:border-[#0C7FFE] group-open:bg-[#0C7FFE] group-open:text-white">+</span>
                    </summary>
                    <p className="max-w-[760px] pb-7 pr-12 text-[16px] leading-[1.8] text-[#666]">{faq.answer}</p>
                  </details>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="bg-[#080808] py-[90px] text-white md:py-[140px]">
            <div className="container">
              <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
                <div>
                  <p className="wdt-heading mb-5 text-[#63aaff]">Explore the Detail</p>
                  <h2 className="text-[39px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[58px]">{pageKey === "virtual-cfo" ? "Specialist Finance Services" : "Automation Focus Areas"}</h2>
                </div>
                <p className="max-w-[520px] text-[17px] leading-[1.7] text-white/55 md:justify-self-end">Explore the focused capabilities behind this service and choose the route that best matches your current priority.</p>
              </div>
              <div className="border-t border-white/20">
                {related.map((item, index) => (
                  <Link key={item.path} to={item.path} className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-white/20 py-7 transition-colors hover:border-[#0C7FFE] md:grid-cols-[90px_1fr_1fr_auto] md:py-9">
                    <span className="text-[13px] font-medium text-white/40">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-[21px] font-semibold transition-transform group-hover:translate-x-2 md:text-[28px]">{item.title}</h3>
                    <p className="hidden max-w-[520px] text-[15px] leading-[1.6] text-white/50 md:block">{pageKey === "virtual-cfo" ? "value" in item && item.value : "copy" in item && item.copy}</p>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#0C7FFE] group-hover:bg-[#0C7FFE]"><ArrowRight size={18} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="relative min-h-[620px] overflow-hidden text-white -mb-[60px]">
          <img src={page.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(12,127,254,0.38),transparent_42%)]" />
          <div className="container relative z-10 flex min-h-[620px] items-center pt-[90px] pb-[110px]">
            <motion.div {...reveal} className="max-w-[930px]">
              <p className="wdt-heading mb-6 text-[#8fc4ff]">Your Next Step</p>
              <h2 className="text-[43px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[66px] lg:text-[76px]">{page.finalHeading}</h2>
              {page.finalCopy && <p className="mt-6 max-w-[700px] text-[18px] leading-[1.75] text-white/70">{page.finalCopy}</p>}
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to={page.primaryTo} className="inline-flex items-center gap-3 rounded-[12px] bg-primary-gradient px-8 py-[18px] text-[15px] font-semibold text-black transition-transform hover:-translate-y-1">
                  {page.primaryLabel}<ArrowRight size={18} />
                </Link>
                {page.finalSecondaryLabel && page.finalSecondaryTo && (
                  <Link to={page.finalSecondaryTo} className="inline-flex items-center gap-3 rounded-[12px] border border-white/35 px-8 py-[18px] text-[15px] font-semibold text-white transition hover:bg-white hover:text-black">
                    {page.finalSecondaryLabel}<ArrowRight size={18} />
                  </Link>
                )}
              </div>
              {page.finalMicrocopy && <p className="mt-5 text-[13px] leading-[1.6] text-white/55">{page.finalMicrocopy}</p>}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
