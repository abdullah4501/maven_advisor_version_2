import { useEffect, useState } from "react"
import { ArrowUp, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "@/assets/logo-white.png"
import footerBg from "@/assets/footer.png"
import { canonicalServices } from "@/data/services"

const companyLinks = [
  { label: "Who We Help", to: "/who-we-help" },
  { label: "About", to: "/about" },
  { label: "Leadership Team", to: "/team" },
  { label: "Client Reviews", to: "/client-reviews" },
  { label: "Insights", to: "/insights" },
  { label: "Frequently Asked Questions", to: "/faq" },
]

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer className="w-full bg-[#f6f7f4]">
      <div className="relative w-full bg-cover bg-center md:rounded-t-[60px]" style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="absolute inset-0 bg-[#161616d9] md:rounded-t-[60px]" />
        <div className="container relative py-[70px] pb-[35px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr_1fr]">
            <div>
              <Link to="/"><img src={logo} alt="Mavens Advisor" className="w-[240px]" /></Link>
              <p className="mt-7 max-w-[430px] text-[17px] leading-[1.7] text-white/75">Helping UK and US business owners keep more of what they earn, protect cash flow and make better decisions through an accountable finance team.</p>
              <div className="mt-7 space-y-3 text-white/80">
                <a href="tel:+447441441789" className="flex items-center gap-3"><Phone size={18} className="text-[#0C7FFE]" />+44 7441 441789</a>
                <a href="mailto:adeelshaikh@mavensadvisor.com" className="flex items-center gap-3 break-all"><Mail size={18} className="text-[#0C7FFE]" />adeelshaikh@mavensadvisor.com</a>
              </div>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-white">Services</h2>
              <ul className="mt-6 grid gap-3">
                {canonicalServices.map((service) => <li key={service.path}><Link to={service.path} className="text-[15px] text-white/70 hover:text-[#0C7FFE]">{service.title}</Link></li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-white">Company</h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {companyLinks.map((item) => <li key={item.to}><Link to={item.to} className="text-[15px] text-white/70 hover:text-[#0C7FFE]">{item.label}</Link></li>)}
              </ul>
              <h2 className="mt-9 text-[22px] font-semibold text-white">Take the Next Step</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/get-a-quote" className="rounded-[12px] bg-primary-gradient px-5 py-3 text-sm font-semibold text-black">Get My Tailored Quote</Link>
                <Link to="/automation-assessment" className="rounded-[12px] border border-white/35 px-5 py-3 text-sm font-semibold text-white">Assess My Workflow</Link>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-[14px] text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Mavens Advisor. All rights reserved.</p>
          </div>
        </div>
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" className={`fixed bottom-8 right-5 z-[99] flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-primary-gradient transition-all ${showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}><ArrowUp className="text-white" size={20} /></button>
    </footer>
  )
}
