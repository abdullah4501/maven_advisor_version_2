import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

const revealSelector = [
  "main section",
  "main article",
  "main details",
  "main form",
  "[data-scroll-reveal]",
].join(",")

export default function ScrollRevealController() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    const targets = candidates.filter((element, index) => {
      if (candidates.indexOf(element) !== index) return false
      if (element.closest("main[data-scroll-reveal-managed]")) return false
      if (element.matches("form") && element.querySelector("section")) return false
      return true
    })

    if (reduceMotion) {
      targets.forEach((element) => element.classList.add("site-reveal-visible"))
      return
    }

    targets.forEach((element) => element.classList.add("site-scroll-reveal"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("site-reveal-visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    )

    targets.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      targets.forEach((element) => element.classList.remove("site-scroll-reveal", "site-reveal-visible"))
    }
  }, [pathname])

  return null
}
