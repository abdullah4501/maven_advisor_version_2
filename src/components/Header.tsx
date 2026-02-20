import { useState } from "react"
import logo from "@/assets/light-logo.svg"
import { Search, X, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="absolute top-6 left-0 w-full z-50">
        <div className="container">
          <div className="flex items-center justify-between rounded-[10px] px-6 py-4 backdrop-blur-md bg-white/15">

            {/* LOGO */}
            <img src={logo} alt="Bullish" className="md:w-[180px] max-w-[100px] h-auto" />

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-14 text-white">
              <Link to="/" className="text-[18px]">Home</Link>
              <Link to="/about" className="text-[18px]">About</Link>
              <Link to="/services" className="text-[18px]">Services</Link>
              <Link to="/blog" className="text-[18px]">Blog</Link>
              <Link to="/contact" className="text-[18px]">Contact Us</Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* DESKTOP ICONS (unchanged) */}
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

              {/* MOBILE TAB BUTTON — ONLY THIS */}
              <button
                onClick={() => setOpen(true)}
                className="tab-icon lg:hidden "
                aria-label="Open menu"
              >
                <div className="icon w-[18px] h-[3px] transition-colors duration-[10ms] delay-300 ease-in-out bg-[#79eb93] rounded-[5px] relative"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[70%] max-w-[360px] bg-black z-[100] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={26} />
          </button>
        </div>

        {/* MENU */}
        <nav className="">
          {[
            { label: "Home", active: true },
            { label: "Pages" },
            { label: "Blog" },
            { label: "Careers" },
            { label: "Contact Us" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-4 mb-2 cursor-pointer
                ${item.active ? "bg-[#7DEC94] text-black" : "text-white"}
              `}
            >
              <span className="text-[16px] font-medium">{item.label}</span>
              <ChevronRight size={18} />
            </div>
          ))}
        </nav>
      </aside>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[99] transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />
    </>
  )
}

export default Header