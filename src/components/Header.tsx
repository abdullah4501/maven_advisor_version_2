import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown, ChevronRight, X } from "lucide-react"
import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "@/assets/logo.png"
import logoW from "@/assets/logo-white.png"
import { canonicalServices } from "@/data/services"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "Client Reviews", to: "/client-reviews" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

function DesktopNav({ light = false }: { light?: boolean }) {
  const { pathname } = useLocation()
  const base = light ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary"
  const servicesActive = pathname === "/services" || pathname.startsWith("/virtual-cfo-services") || pathname.startsWith("/agentic-ai-automation")
  return (
    <nav className="hidden items-center lg:flex 2xl:gap-1">
      <NavLink to="/" end className={({ isActive }) => `navItem relative px-[6px] py-4 text-[13px] font-medium duration-300 xl:px-[9px] xl:text-[14px] 2xl:px-[12px] 2xl:text-[15px] ${isActive ? "active text-primary" : base}`}>Home</NavLink>
      <div className="group relative">
        <NavLink to="/services" aria-current={servicesActive ? "page" : undefined} className={`navItem relative flex items-center px-[6px] py-4 text-[13px] font-medium duration-300 xl:px-[9px] xl:text-[14px] 2xl:px-[12px] 2xl:text-[15px] ${servicesActive ? "active text-primary" : base}`}>
          Services <ChevronDown size={15} />
        </NavLink>
        <div className="invisible absolute left-1/2 top-full z-[90] w-[760px] -translate-x-1/2 translate-y-3 rounded-[20px] bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mb-3 flex items-center justify-between border-b border-black/10 px-3 pb-4">
            <div><p className="text-sm font-semibold uppercase tracking-widest text-[#0C7FFE]">Eight Services</p><p className="mt-1 text-sm text-gray-500">Choose the exact support your business needs.</p></div>
            <Link to="/services" className="font-semibold text-black hover:text-[#0C7FFE]">View All Services</Link>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {canonicalServices.map((service) => (
              <Link key={service.path} to={service.path} className="rounded-[12px] px-3 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#f3f5f4] hover:text-[#0C7FFE]">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {navLinks.slice(1).map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `navItem relative px-[6px] py-4 text-[13px] font-medium duration-300 xl:px-[9px] xl:text-[14px] 2xl:px-[12px] 2xl:text-[15px] ${isActive ? "active text-primary" : base}`}>{item.label}</NavLink>
      ))}
    </nav>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">

        <div className="container pt-[18px]">
          <div className="flex items-center justify-between rounded-[10px] bg-black/25 px-5 py-[16px] backdrop-blur-md">
            <Link to="/"><img src={logoW} alt="Mavens Advisor" className="h-auto max-w-[200px]" /></Link>
            <DesktopNav />
            <div className="flex items-center gap-3">
              <Link to="/get-a-quote" className="hidden items-center gap-2 whitespace-nowrap rounded-[12px] bg-primary-gradient px-3 py-3 text-[12px] font-semibold lg:inline-flex xl:px-4 xl:py-4 xl:text-[13px] 2xl:px-5 2xl:text-[14px]">Get My Tailored Quote <ArrowRight size={17} /></Link>
              <button onClick={() => setOpen(true)} className="tab-icon lg:hidden" aria-label="Open menu"><div className="icon relative h-[3px] w-[18px] rounded-[5px] bg-[#0C7FFE]" /></button>
            </div>
          </div>
        </div>
      </header>

      <header className="fixed left-0 top-0 z-[60] w-full bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)]" style={{ transform: scrolled ? "translateY(0)" : "translateY(-100%)", opacity: scrolled ? 1 : 0, transition: "transform .45s cubic-bezier(.16,1,.3,1), opacity .35s ease", pointerEvents: scrolled ? "auto" : "none" }}>
        <div className="container flex items-center justify-between px-5 py-[14px]">
          <Link to="/"><img src={logo} alt="Mavens Advisor" className="h-auto max-w-[200px] " /></Link>
          <DesktopNav light />
          <div className="flex items-center gap-3">
            <Link to="/get-a-quote" className="hidden items-center gap-2 whitespace-nowrap rounded-[12px] bg-primary-gradient px-3 py-3 text-[12px] font-semibold lg:inline-flex xl:px-4 xl:py-4 xl:text-[13px] 2xl:px-5 2xl:text-[14px]">Get My Tailored Quote <ArrowRight size={17} /></Link>
            <button onClick={() => setOpen(true)} className="tab-icon lg:hidden" aria-label="Open menu"><div className="icon-sticky relative h-[3px] w-[18px] rounded-[5px] bg-[#0C7FFE]" /></button>
          </div>
        </div>
      </header>

      <aside className={`fixed right-0 top-0 z-[100] h-screen w-[86%] max-w-[390px] overflow-y-auto bg-black transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end px-6 py-4"><button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu"><X size={26} /></button></div>
        <nav className="pb-8">
          <NavLink to="/" end onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/20 px-5 py-3 text-white">Home <ChevronRight size={18} /></NavLink>
          <button onClick={() => setServicesOpen((value) => !value)} className="flex w-full items-center justify-between border-b border-white/20 px-5 py-3 text-white">Services <ChevronDown size={18} className={servicesOpen ? "rotate-180" : ""} /></button>
          {servicesOpen && <div className="bg-white/5 py-2"><Link to="/services" onClick={() => setOpen(false)} className="block px-7 py-2 text-[14px] font-semibold text-[#0C7FFE]">View All Services</Link>{canonicalServices.map((service) => <Link key={service.path} to={service.path} onClick={() => setOpen(false)} className="block px-7 py-2 text-[14px] leading-snug text-white/75">{service.title}</Link>)}</div>}
          {navLinks.slice(1).map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/20 px-5 py-3 text-white">{item.label}<ChevronRight size={18} /></NavLink>)}
          <Link to="/get-a-quote" onClick={() => setOpen(false)} className="mx-5 mt-6 flex items-center justify-center gap-2 rounded-[14px] bg-primary-gradient px-5 py-4 font-semibold">Get My Tailored Quote <ArrowRight size={17} /></Link>
        </nav>
      </aside>
      <div onClick={() => setOpen(false)} className={`fixed inset-0 z-[99] bg-black/60 transition-opacity ${open ? "visible opacity-100" : "invisible opacity-0"}`} />
    </>
  )
}
