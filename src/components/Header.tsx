import { useState, useRef, useEffect } from "react"
import logo from "@/assets/logo.png"
import officeTeam from "@/assets/blog-img-11.jpg"
import { Search, X, ChevronRight, Info, CircleHelp, DollarSign, Settings, FileSearch, Briefcase, FileText, Users, AlertTriangle, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Youtube,
  Instagram,
  Globe
} from "lucide-react";

const socialIcons = [X, Youtube, Instagram, Globe];
const Header = () => {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setAboutOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setAboutOpen(false), 200)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const menuItems = [
    { label: "About Us", link: "/about", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    ) },
    { label: "FAQ", link: "/faq", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    ) },
    { label: "Pricing Plan", link: "/pricing", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    ) },

    { label: "Service", link: "/services", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    ) },
    { label: "Service Detail", link: "/service-detail", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    )  },
    { label: "Portfolio", link: "/portfolio", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    ) },
    { label: "Portfolio Detail", link: "/portfolio-detail", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    ) },
    { label: "Our Team", link: "/team", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    )  },
    { label: "404 Error Page", link: "/404", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="text-white w-[30px] h-[30px]" fill="#fff"><path d="M12,3.3c-5.3,0-9.6,4.4-9.6,9.6v57.8c0,5.3,4.4,9.6,9.6,9.6h24.4l11,16.2l0,0c0.6,0.8,1.5,1.3,2.5,1.3c1,0,1.9-0.5,2.5-1.3 l11-16.2h24.4c5.3,0,9.6-4.4,9.6-9.6V12.9c0-5.3-4.4-9.6-9.6-9.6L12,3.3z M12,9.2h75.7c2.1,0,3.7,1.6,3.7,3.7v57.8 c0,2.1-1.6,3.7-3.7,3.7h-26v0c-1,0-1.9,0.5-2.4,1.3l-9.5,13.9l-9.4-13.9h0c-0.6-0.8-1.5-1.3-2.5-1.3H12c-2.1,0-3.7-1.6-3.7-3.7V12.9 C8.3,10.8,9.9,9.2,12,9.2L12,9.2z M49.7,19.7c-2.1,0.1-3.9,1.8-3.9,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4s-1.8-4-4-4H49.7L49.7,19.7z  M49.8,30.7L49.8,30.7c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1v27.4c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9 c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.9-1.3,0.9-2.1V33.7c0-0.8-0.3-1.5-0.9-2.1C51.4,31,50.6,30.7,49.8,30.7L49.8,30.7z"></path></svg>
    )  }
  ];

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="absolute top-[30px] left-0 w-full z-50 ">
        <div className="container">
          <div className="relative flex items-center justify-between rounded-[10px] px-6 py-[20px] backdrop-blur-md bg-white/15">

            {/* LOGO */}
            <img src={logo} alt="Bullish" className="md:max-w-[300px] max-w-[250px] h-auto" />

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-0 text-white ">
              <Link to="/" className="text-[18px] hover:text-primary duration-300 navItem relative px-[25px] active">Home</Link>

              {/* ABOUT WITH DROPDOWN */}
              <div
                className=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={dropdownRef}
              >
                <Link to="/about-us" className="text-[18px] hover:text-primary duration-300 navItem relative px-[25px] flex items-center gap-1">
                  About
                </Link>

                {/* MEGA DROPDOWN */}
                <div
                  className={`w-full absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-opacity transition-transform duration-150 ease-out ${aboutOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                    }`}
                >
                  <div
                    className="w-full m-auto rounded-[18px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] mega-nav-gradient "
                    
                  >
                    <div className="flex">
                      {/* LEFT */}
                      <div className="flex-1 px-10 py-8">

                        {/* IMAGE + MENU */}
                        <div className="flex gap-10">
                          <div className="flex w-[40%] flex-col gap-5">
                            <Link
                              to='/'
                              className="flex items-center gap-4 !text-[#fff] transition"
                            >
                              <span className=" flex items-center justify-center">
                                <Info className="w-[30px] h-[30px]" />
                              </span>
                              <span className="text-[16px] font-semibold">
                                About Us
                              </span>
                            </Link>
                            <img
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                              alt="Team"
                              className="w-full h-[200px] rounded-[14px] object-cover"
                            />
                          </div>

                          <div className="w-[60%] grid grid-cols-2 gap-x-14 gap-y-6">
                            {menuItems.slice(1).map((item, i) => (
                              <Link
                                key={i}
                                to={item.link}
                                className="flex items-center gap-4 !text-[#fff] transition"
                              >
                                <span className="flex items-center justify-center">
                                  {item.icon}
                                </span>
                                <span className="text-[16px] font-semibold">
                                  {item.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="w-[300px] bg-white px-8 py-8 border-l border-black/10">
                        <h4 className="text-[22px] font-bold mb-6 text-black">
                          Locate Us
                        </h4>

                        {/* PHONE */}
                        <div className="flex gap-4 mb-6">
                          <div className="p-[10px] rounded-[14px] bg-[#6565651a]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-primary-gradient flex items-center justify-center">
                              <Phone className="w-[20px] h-[20px]" />
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-[15px] text-black">Talk To Us</p>
                            <p className="text-[14px] text-black/60">
                              +00-123-456789
                            </p>
                            <p className="text-[14px] text-black/60">
                              +000-1234-56789
                            </p>
                          </div>
                        </div>

                        {/* EMAIL */}
                        <div className="flex gap-4 mb-8">
                          <div className="p-[10px] rounded-[14px] bg-[#6565651a]">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-primary-gradient flex items-center justify-center">
                              <Mail className="w-[20px] h-[20px]" />
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-[15px] text-black">Email Us</p>
                            <p className="text-[14px] text-black/60">
                              Info@Example.Com
                            </p>
                            <p className="text-[14px] text-black/60">
                              Support@Example.Com
                            </p>
                          </div>
                        </div>

                        {/* SOCIAL */}
                        <p className="font-bold text-[18px] mb-4 text-black">Follow Us</p>
                        <div className="flex items-center justify-between gap-4">
                          {[
                            {
                              label: "Twitter",
                              icon: (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              ),
                            },
                            {
                              label: "YouTube",
                              icon: (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                              ),
                            },
                            {
                              label: "Instagram",
                              icon: (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                              ),
                            },
                            {
                              label: "Website",
                              icon: (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M2 12h20" />
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                              ),
                            },
                          ].map((social) => (
                            <Link
                              key={social.label}
                              to="/"
                              className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full border border-black/100 flex items-center justify-center text-[#000] hover:bg-primary hover:text-[#fff] transition-all"
                              aria-label={social.label}
                            >
                              {social.icon}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/services" className="text-[18px] hover:text-primary duration-300 navItem relative px-[25px]">Services</Link>
              <Link to="/blog" className="text-[18px] hover:text-primary duration-300 navItem relative px-[25px]">Blog</Link>
              <Link to="/contact" className="text-[18px] hover:text-primary duration-300 navItem relative px-[25px]">Contact Us</Link>
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
        <div className="flex justify-end px-6 py-3">
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
              className={`flex items-center justify-between px-4 py-2 mb-2 cursor-pointer border-b border-white/20 last:border-0
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
