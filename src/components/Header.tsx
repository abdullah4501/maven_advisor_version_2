import { useState, useRef, useEffect } from "react"
import logo from "@/assets/logo.png"
import { Search, X, ChevronRight } from "lucide-react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about-us" },
    { label: "Services", to: "/services" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
  ]

  return (
    <>
      {/* ===== ORIGINAL HEADER (absolute, transparent) ===== */}
      <header className="absolute top-[30px] left-0 w-full z-50">
        <div className="container">
          <div className="relative flex items-center justify-between rounded-[10px] px-6 py-[20px] backdrop-blur-md bg-black/25">

            <img src={logo} alt="Bullish" className="md:max-w-[300px] max-w-[250px] h-auto" />

            <nav className="hidden lg:flex items-center gap-0 text-white">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-[18px] hover:text-primary duration-300 navItem relative px-[25px]${isActive ? ' active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white">
                  <Search className="w-5 h-5 opacity-80" />
                </button>
                <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" fill="none" />
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" fill="none" />
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" fill="none" />
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" fill="none" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="tab-icon lg:hidden"
                aria-label="Open menu"
              >
                <div className="icon w-[18px] h-[3px] bg-[#0C7FFE] rounded-[5px] relative"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== STICKY WHITE HEADER (slides + fades in from top on scroll) ===== */}
      <header
        className="fixed top-0 left-0 w-full z-[60] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
        style={{
          transform: scrolled ? "translateY(0)" : "translateY(-100%)",
          opacity: scrolled ? 1 : 0,
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between px-6 py-[16px]">

            <img src={logo} alt="Bullish" className="md:max-w-[220px] max-w-[180px] h-auto" />

            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-[17px] font-medium duration-300 navItem relative px-[22px] ${
                      isActive ? "text-primary active" : "text-gray-700 hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3">
                <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
                <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" fill="none" />
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" fill="none" />
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" fill="none" />
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" fill="none" />
                  </svg>
                </button>
              </div>
              {/* MOBILE TAB BUTTON — ONLY THIS */}
              <button
                onClick={() => setOpen(true)}
                className="tab-icon lg:hidden "
                aria-label="Open menu"
              >
                <div className="icon-sticky w-[18px] h-[3px] transition-colors duration-[10ms] delay-300 ease-in-out bg-[#0C7FFE] rounded-[5px] relative"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE SIDEBAR ===== */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[70%] max-w-[360px] bg-black z-[100] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end px-6 py-3">
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={26} />
          </button>
        </div>
        <nav>
          {navLinks.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2 mb-2 cursor-pointer border-b border-white/20 last:border-0 ${
                  isActive ? "bg-[#7DEC94] text-black" : "text-white"
                }`
              }
            >
              <span className="text-[16px] font-medium">{item.label}</span>
              <ChevronRight size={18} />
            </NavLink>
          ))}
        </nav>
      </aside>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[99] transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </>
  )
}

export default Header