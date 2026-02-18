
import logo from "@/assets/light-logo.svg";
import {Search} from "lucide-react"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-6 left-0 w-full z-50">
      <div className=" container">
        <div
          className="
            flex items-center justify-between
            rounded-[20px] px-8 py-4
            backdrop-blur-md
            bg-white/15
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-2 text-white font-semibold text-xl">
            <img src={logo} alt="" className="w-[200px] h-[70px]" />
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-14 text-white text-sm">
            <Link to={'/'} className="flex items-center gap-1 text-[18px]">
              Home
            </Link>

            {["About", "Services", "Blog"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="flex items-center text-[18px] gap-1 transition"
              >
                {item}
              </Link>
            ))}

            <Link to={'/contact'} className="text-[18px] transition">
              Contact Us
            </Link>
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-4">
            {/* SEARCH */}
            <button
              className="
                w-12 h-12 rounded-full
                border border-white/40
                flex items-center justify-center
                text-white
                hover:bg-white/10 transition
              "
            >
             <Search className="w-5 h-5 opacity-80"/>
            </button>

            {/* GRID */}
            <button
              className="
                w-12 h-12 rounded-full
                border border-white/40
                flex items-center justify-center
                text-white
                hover:bg-white/10 transition
              "
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" fill="none" />
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" fill="none" />
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" fill="none" />
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;