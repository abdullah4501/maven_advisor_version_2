import { useState, useRef, useEffect } from "react"
import logo from "@/assets/logo.png"
import officeTeam from "@/assets/blog-img-11.jpg"
import { Search, X, ChevronRight, Info, CircleHelp, DollarSign, Settings, FileSearch, Briefcase, FileText, Users, AlertTriangle, Phone, Mail } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
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
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="h-[30px] w-[30px]" fill="#fff"><g>	<path d="M85.6,29.8h-7.5V15.6c0-7.1-5.8-12.9-12.9-12.9H14.4C7.3,2.7,1.5,8.5,1.5,15.6v37.3c0,6.8,5.2,12.3,11.9,12.8v10.9  c0,1,0.6,2,1.5,2.4c0.9,0.4,2.1,0.3,2.8-0.3l16.2-13h1.5v5.8c0,7.1,5.8,12.9,12.9,12.9h21l12.8,11.2c0.5,0.4,1.1,0.7,1.8,0.7  c0.4,0,0.8-0.1,1.1-0.2c1-0.4,1.6-1.4,1.6-2.5v-9.2c6.6-0.5,11.9-6.1,11.9-12.8V42.7C98.5,35.6,92.7,29.8,85.6,29.8z M33,60.4  c-0.6,0-1.2,0.2-1.7,0.6L18.8,71v-8c0-1.5-1.2-2.7-2.7-2.7h-1.7c-4.1,0-7.5-3.4-7.5-7.5V15.6c0-4.1,3.4-7.5,7.5-7.5h50.9  c4.1,0,7.5,3.4,7.5,7.5v37.3c0,4.1-3.3,7.5-7.5,7.5H33z M93.1,71.5c0,4.1-3.3,7.5-7.5,7.5h-1.7c-1.5,0-2.7,1.2-2.7,2.7v5.9l-9.1-8  C71.7,79.3,71,79,70.4,79h-22c-4.1,0-7.5-3.4-7.5-7.5v-5.8h24.5c7.1,0,12.9-5.8,12.9-12.9V35.2h7.5c4.1,0,7.5,3.4,7.5,7.5  L93.1,71.5z"></path>	<path d="M51,27.5c0,3.8-1.9,7.4-5.2,9.4c-2,1.3-3.3,3.4-3.3,5.5v0.4c0,1.5-1.2,2.7-2.7,2.7s-2.7-1.2-2.7-2.7v-0.4  c0-4,2.2-7.7,5.8-10c1.7-1.1,2.7-2.9,2.7-4.9c0-1.5-0.6-3-1.7-4.1c-1.1-1.1-2.5-1.7-4.1-1.7c-3.2,0-5.8,2.6-5.8,5.8  c0,1.5-1.2,2.7-2.7,2.7c-1.5,0-2.7-1.2-2.7-2.7c0-6.2,5-11.2,11.2-11.2c2.9,0,5.7,1.2,7.9,3.3C49.8,21.7,51,24.5,51,27.5z"></path>	<path d="M42.8,52.8c0,1.9-1.5,2.9-3,2.9s-2.9-1-2.9-2.9c0-1.9,1.5-3,2.9-3S42.8,50.8,42.8,52.8z"></path></g></svg>
    ) },
    { label: "FAQ", link: "/faq", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="h-[30px] w-[30px]" fill="#fff"><g><path d="M96.7,35.4v48.2c0,7.4-6,13.3-13.3,13.3H34.4C27,96.9,21,91,21,83.6V16.9c0-7.4,6-13.3,13.4-13.3h31.3   c1.5,0,2.8,1.3,2.8,2.8s-1.3,2.8-2.8,2.8H34.4c-4.3,0-7.9,3.5-7.9,7.9v66.7c0,4.3,3.5,7.9,7.9,7.9h48.8c4.3,0,7.9-3.5,7.9-7.9   V35.4c0-1.5,1.3-2.8,2.8-2.8C95.4,32.6,96.7,33.9,96.7,35.4z"></path>			<path d="M17.3,84.3c0,1.5-1.3,2.8-2.8,2.8H9.7c-4.5,0-8.1-3.6-8.1-8.1V36.6c0-4.5,3.6-8.1,8.1-8.1h0.7v-0.2h4.2   c1.5,0,2.8,1.3,2.8,2.8c0,1.5-1.3,2.8-2.8,2.8H9.7c-1.4,0-2.6,1.2-2.6,2.6V79c0,1.4,1.2,2.6,2.6,2.6h4.8   C16.1,81.5,17.3,82.8,17.3,84.3z"></path>			<path d="M93.4,16.7c-0.6,0.6-0.8,1.5-0.7,2.2l1.5,5.8c0.1,0.5-0.1,0.8-0.4,1c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4,0-0.6-0.2   l-5.1-3.2C87,22,86,22,85.3,22.5l-5.1,3.2c-0.4,0.2-0.8,0.1-1,0c-0.3-0.2-0.5-0.6-0.4-0.9l1.5-5.9c0.1-0.8-0.2-1.6-0.8-2.2   l-4.6-3.9c-0.4-0.3-0.4-0.8-0.3-1.1c0.1-0.3,0.4-0.6,0.8-0.6l5.9-0.4c0.9,0,1.7-0.6,2-1.4l2.2-5.6c0.2-0.4,0.6-0.6,0.8-0.6   s0.7,0.2,0.8,0.6l2.2,5.6c0.3,0.8,1.1,1.4,1.9,1.4l6,0.4c0.4,0,0.7,0.3,0.8,0.6c0.2,0.6-0.1,0.9-0.2,1L93.4,16.7z"></path>		<path d="M70.7,65.3c-0.9,2.4-2.4,3.9-4,5c-1.6,1-3.3,1.5-4.5,1.8l-0.5,0.1V76c0,1.5-1.3,2.8-2.8,2.8c-1.5,0-2.8-1.3-2.8-2.8v-3.8   l-0.5-0.1c-3.4-0.7-6.6-2.2-9-4.5c-0.5-0.5-0.8-1.1-0.8-1.9c0-0.7,0.3-1.5,0.8-2c0.5-0.5,1.2-0.8,1.9-0.8c0.8,0,1.5,0.3,2,0.7   c2.1,2.1,5.6,3.4,9,3.3c4.3-0.1,5.7-2.3,6.2-3.5c0.7-1.9,0.5-3.6-0.5-5.2c-1.1-1.9-3.8-3.8-7.5-5.4c-4.6-1.9-7.9-4.3-9.7-7.1   c-2-3.2-2.2-6.8-0.5-10.3c1.4-3.1,4.4-5.4,8.3-6.3l0.5-0.1v-4.2c0-1.5,1.3-2.8,2.8-2.8c1.5,0,2.8,1.3,2.8,2.8v4.4l0.6,0.1   c2.5,0.5,4.9,1.7,7,3.3c1.2,0.9,1.3,2.8,0.3,4.1c-1,1.2-2.7,1.4-3.9,0.5c-2.4-2-5.3-2.9-8.1-2.5c-2.5,0.3-4.5,1.6-5.3,3.3   c-0.9,1.8-0.8,3.4,0.1,4.9c1.2,1.8,3.6,3.5,7.3,5c4.7,1.9,8.1,4.4,10,7.3C71.7,58.2,72,61.6,70.7,65.3z"></path>	</g></svg>
    ) },
    { label: "Pricing Plan", link: "/pricing", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="h-[30px] w-[30px]" fill="#fff"><g>	<path d="M88.8,2.7h-1v0.1H11.3c-5.5,0-10,4.5-10,10v58.1c0,5.5,4.5,10,10,10H27v15c0,1,0.5,1.8,1.4,2.3c0.3,0.1,0.6,0.2,1.1,0.2   c0.5,0,1.1-0.2,1.5-0.5l20.7-17h37.1c5.5,0,9.9-4.5,9.9-10V12.7C98.8,7.2,94.2,2.7,88.8,2.7z M93.8,71.1c-0.1,2.6-2.3,4.8-5,4.8   H50.7c-0.6,0-1.2,0.2-1.5,0.5L31.9,90.5V78.3c0-1.4-1.1-2.5-2.5-2.5H11.2c-2.7,0-4.9-2.2-4.9-4.9V12.7c0-2.7,2.2-4.9,4.9-4.9h77.6   c2.7,0,5,2.2,5,4.9V71.1z"></path>	<path d="M49,20.8H31.8V19c0-1.3-1.1-2.4-2.5-2.4h-9.9c-3.7,0-6.7,3-6.7,6.6c0,2.4,1.3,4.6,3.4,5.8l-0.9,0.9h14.2   c1.4,0,2.5-1.2,2.5-2.5v-1.7H49c1.4,0,2.5-1.1,2.5-2.5C51.5,21.9,50.4,20.8,49,20.8z M19.4,25c-0.9,0-1.7-0.8-1.7-1.7   c0-0.8,0.6-1.5,1.3-1.6h7.8V25H19.4z"></path>		<path d="M77.8,13.7h-16c-5.2,0-9.5,4.3-9.5,9.5c0,5.2,4.2,9.5,9.5,9.5h16c5.2,0,9.5-4.2,9.5-9.5C87.3,18,83,13.7,77.8,13.7z    M61,27.7c-2.1-0.4-3.6-2.2-3.6-4.4c0-2.2,1.5-4,3.6-4.4V27.7z M66,18.8h11.8c1.2-0.1,2.4,0.3,3.3,1.2c0.9,0.9,1.4,2.1,1.4,3.3   c0,1.3-0.5,2.5-1.4,3.3c-1,0.9-2.2,1.3-3.3,1.2H66V18.8z"></path>		<path d="M86.5,45.6c-3.1-3.1-7.4-4.9-11.8-4.9H47.3L40.4,33l-0.6-0.6h-0.2c-0.3-0.2-0.7-0.3-1.2-0.3H23.5c-0.6,0-1.3,0.3-1.7,0.8   L13.5,41c-0.5,0.4-0.8,1-0.8,1.9V45c0,1.4,1.1,2.5,2.5,2.5h13.1c2,0,3.5,1.6,3.5,3.6c0,1.9-1.6,3.5-3.5,3.5H15.2   c-1.4,0-2.5,1.1-2.5,2.5v2.1c0,0.7,0.3,1.4,0.8,1.9l8.3,8.1c0.5,0.5,1.1,0.8,1.8,0.8h15c0.8,0,1.4-0.3,1.9-0.9l6.9-7.8h27.4   c4.4,0,8.8-1.8,11.8-4.9c0.5-0.5,0.8-1.1,0.8-1.8v-7.1C87.3,46.8,87,46.1,86.5,45.6z M82.4,53.2L82.4,53.2   c-2.2,1.9-4.9,2.9-7.7,2.9H46.2c-0.7,0-1.4,0.3-2,0.9l-6.9,7.8H24.6l-5.5-5.4h9.2c4.7,0,8.5-3.8,8.5-8.5c0-4.7-3.8-8.5-8.5-8.5   h-9.2l5.5-5.4h12.8l6.9,7.8l0.5,0.6H45c0.3,0.2,0.7,0.3,1.1,0.3h28.6c2.8,0,5.4,1,7.6,2.8V53.2z"></path>		<path d="M82.1,50.9c0,1.4-1.1,2.5-2.5,2.5h-9.3c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5h9.3C81,48.4,82.1,49.5,82.1,50.9z"></path></g></svg>
    ) },

    { label: "Service", link: "/services", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" className="h-[30px] w-[30px]" fill="#fff"><g>	<path d="M74,29.5c0.5,0.4,1.1,0.6,1.7,0.6c1.2,0,2.5-0.8,2.5-2.4V6.7c0-3.2-2.6-5.9-5.9-5.9H15.7c-3.3,0-5.9,2.6-5.9,5.9v2.7H7.2  c-3.3,0-5.9,2.6-5.9,5.9v77.1c0,3.2,2.5,5.8,5.7,5.9l56.7,0c3.3,0,5.9-2.6,5.9-5.9v-2.7h2.7c3.3,0,5.9-2.6,5.9-5.9v-2.2  c0-1.6-1.3-2.4-2.5-2.4c0,0,0,0,0,0c-1.2,0-2.4,0.8-2.5,2.5v2.2c0,0.5-0.4,1-1,1H31.9V73.5c0-3.3-2.7-5.9-5.9-5.9H14.8V20.4  c0-1.3-1.1-2.5-2.5-2.5c-1.3,0-2.5,1.1-2.5,2.5v49.7c0,0.6,0.3,1.3,0.7,1.8l17.1,17.1c0.5,0.5,1.1,0.7,1.8,0.7h35.2v2.7  c0,0.5-0.4,1-1,1H7.2c-0.5,0-1-0.4-1-1V15.2c0-0.5,0.4-1,1-1h5.1c1.4,0,2.5-1.1,2.5-2.5V6.7c0-0.5,0.4-1,1-1h56.6c0.5,0,1,0.4,1,1  v21.1C73.3,28.5,73.6,29.1,74,29.5z M26,72.5c0.5,0,1,0.4,1,1v7.8l-8.7-8.7H26z"></path>	<path d="M73,47.8c0,1.2-0.8,2.4-2.4,2.5h0c-1.6,0-2.4-1.3-2.4-2.5c0-1.2,0.8-2.4,2.4-2.5C72.2,45.3,73,46.6,73,47.8z"></path>	<path d="M73,54.6v6.9c0,1.4-1.1,2.5-2.5,2.5c-1.3,0-2.5-1.1-2.5-2.5v-6.9c0-1.4,1.1-2.5,2.5-2.5C71.9,52.2,73,53.3,73,54.6z"></path>	<path d="M97,72.8L89.2,65c1.8-3.1,2.7-6.7,2.7-10.4c-0.6-14.5-11.5-21.2-21.3-21.2c0,0,0,0,0,0c-9.8,0-20.7,6.6-21.3,21.2  c0,11.5,9.2,20.9,20.6,21.3l0.8,0c3.6,0,7.2-0.9,10.3-2.7l7.8,7.8c1.3,1.2,2.7,1.8,4.1,1.8c1.6,0,3.1-0.7,4.2-1.8  C98.9,79.1,99.8,75.7,97,72.8z M93.5,77.6c-0.1,0.1-0.7,0.6-1.3,0L83,68.4l-0.2-0.1c-0.2-0.2-0.5-0.4-0.9-0.5  c-0.2-0.1-0.4-0.1-0.6-0.1c-0.5,0-0.9,0.1-1.4,0.4C77.1,70,73.9,71,70.6,71c-11.2-0.5-16.3-8.8-16.3-16.4c0-7.6,5.1-15.9,16.3-16.4  c9,0,16.4,7.4,16.4,16.4c0,3.3-1,6.6-2.9,9.3L84,64.1c-0.1,0.3-0.3,0.6-0.3,0.9c-0.1,0.7,0.1,1.3,0.7,2l9.2,9.2  C94.2,76.9,93.6,77.5,93.5,77.6z"></path>	<path d="M67.9,16.9c0,1.4-1.1,2.5-2.5,2.5H22.6c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h42.8C66.8,14.5,67.9,15.6,67.9,16.9z"></path>	<path d="M63.6,27.2c0,1.2-0.8,2.4-2.4,2.5H26.9c-1.6,0-2.4-1.3-2.4-2.5c0-1.2,0.8-2.4,2.4-2.5h34.3C62.8,24.8,63.6,26,63.6,27.2z"></path>	<path d="M53.2,35.8c0,1.4-1.1,2.5-2.5,2.5H26.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5h23.8C52,33.3,53.2,34.4,53.2,35.8z"></path>	<path d="M47.6,44.4c0,1.2-0.8,2.4-2.4,2.5H26.9c-1.6,0-2.4-1.3-2.4-2.5c0-1.2,0.8-2.4,2.4-2.5h18.3C46.8,41.9,47.6,43.2,47.6,44.4z  "></path></g></svg>
    ) },
    { label: "Service Detail", link: "/service-detail", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="h-[30px] w-[30px]" fill="#fff"><g>	<path d="M95.8,21.3H72v-6.1c0-2.9-1.1-5.6-3.2-7.7c-2.1-2.1-4.8-3.2-7.7-3.2H38.9c-2.9,0-5.6,1.1-7.7,3.2S28,12.3,28,15.2v6.1H4.3   c-1.5,0-2.8,1.2-2.8,2.8v68.9c0,1.5,1.2,2.8,2.8,2.8h91.5c1.5,0,2.8-1.2,2.8-2.8V24C98.5,22.5,97.3,21.3,95.8,21.3z M71.5,57.4   v15.5H67V57.4H71.5z M74.3,51.9h-10c-1.5,0-2.8,1.2-2.8,2.8v7h-8.8V26.8H93v21.3c0,3.6-1.4,7-4,9.6c-2.6,2.6-6,4-9.6,4H77v-7   C77,53.2,75.8,51.9,74.3,51.9z M33.5,15.2c0-1.4,0.6-2.8,1.6-3.8c1-1,2.4-1.6,3.8-1.6h22.3c1.4,0,2.8,0.6,3.8,1.6   c1,1,1.6,2.4,1.6,3.8v6.1h-33V15.2z M7,26.8h40.3v34.9h-8.8v-7c0-1.5-1.2-2.8-2.8-2.8h-10c-1.5,0-2.8,1.2-2.8,2.8v7h-2.4   c-3.6,0-7-1.4-9.6-4c-2.6-2.6-4-6-4-9.6V26.8z M33,57.4v15.5h-4.5V57.4H33z M93,90.2H7V61.5c0,0,0.1,0.1,0.1,0.1   c3.6,3.6,8.4,5.6,13.5,5.6H23v8.5c0,1.5,1.2,2.8,2.8,2.8h10c1.5,0,2.8-1.2,2.8-2.8v-8.5h23v8.5c0,1.5,1.2,2.8,2.8,2.8h10   c1.5,0,2.8-1.2,2.8-2.8v-8.5h2.4c5.1,0,9.9-2,13.5-5.6l0.1-0.1V90.2z"></path>	</g></svg>
    )  },
    { label: "Portfolio", link: "/portfolio", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="h-[30px] w-[30px]" fill="#fff"><g>		<path d="M51,29.3c1.6-1.9,2.5-4.3,2.5-6.8C53.5,16.8,48.8,12,43,12s-10.5,4.7-10.5,10.5c0,2.5,0.9,4.9,2.5,6.8   c-5.2,2.4-8.5,7.5-8.5,13.2v2c0,0.7,0.3,1.3,0.7,1.8c0.5,0.5,1.1,0.7,1.8,0.7h28c1.4,0,2.5-1.1,2.5-2.5v-2   C59.5,36.8,56.2,31.7,51,29.3z M43,17c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5s-5.5-2.5-5.5-5.5C37.5,19.5,40,17,43,17z M31.5,42   c0.3-5,4.4-9,9.5-9H45c5.1,0,9.3,4,9.5,9H31.5z"></path>				<path d="M96,32H82.5V6.5C82.5,4,80.5,2,78,2H6C3.5,2,1.5,4,1.5,6.5v79.9c0,7,5.7,12.6,12.6,12.6H88c5.8,0,10.5-4.7,10.5-10.5v-54   C98.5,33.1,97.4,32,96,32z M14.1,94c-4.2,0-7.6-3.4-7.6-7.6V7h71v81.5c0,2,0.5,3.8,1.6,5.5H14.1z M88,94c-3,0-5.5-2.5-5.5-5.5V37   h11v51.5C93.5,91.5,91,94,88,94z"></path>				<path d="M72.5,54.5c0,1.4-1.1,2.5-2.5,2.5H16c-1.4,0-2.5-1.1-2.5-2.5S14.6,52,16,52h54C71.4,52,72.5,53.1,72.5,54.5z"></path>			<path d="M72.5,64.5c0,1.4-1.1,2.5-2.5,2.5H16c-1.4,0-2.5-1.1-2.5-2.5S14.6,62,16,62h54C71.4,62,72.5,63.1,72.5,64.5z"></path>		<path d="M72.5,74.4c0,1.4-1.1,2.5-2.5,2.5H16c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h54C71.4,71.9,72.5,73,72.5,74.4z"></path>			<path d="M72.5,84.4c0,1.4-1.1,2.5-2.5,2.5H16c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h54C71.4,81.9,72.5,83,72.5,84.4z"></path></g></svg>
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

      <header className="absolute top-[30px] left-0 w-full z-50 ">
        <div className="container">
          <div className="relative flex items-center justify-between rounded-[10px] px-6 py-[20px] backdrop-blur-md bg-black/25">

            {/* LOGO */}
            <img src={logo} alt="Bullish" className="md:max-w-[300px] max-w-[250px] h-auto" />

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-0 text-white ">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-[18px] hover:text-primary duration-300 navItem relative px-[25px]${isActive ? ' active' : ''}`
                }
              >
                Home
              </NavLink>

              {/* ABOUT WITH DROPDOWN */}
              <div
                className=""
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                // ref={dropdownRef}
              >
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `text-[18px] hover:text-primary duration-300 navItem relative px-[25px] flex items-center gap-1${
                      isActive ? ' active' : ''
                    }`
                  }
                >
                  About
                </NavLink>

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
                            <NavLink
                              to='/about-us'
                              className={({ isActive }) =>
                                `flex items-center gap-4 !text-[#fff] transition${
                                  isActive ? ' active' : ''
                                }`
                              }
                            >
                              <span className=" flex items-center justify-center">
                                <Info className="w-[30px] h-[30px]" />
                              </span>
                              <span className="text-[16px] font-semibold">
                                About Us
                              </span>
                            </NavLink>
                            <img
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                              alt="Team"
                              className="w-full h-[200px] rounded-[14px] object-cover"
                            />
                          </div>

                          <div className="w-[60%] grid grid-cols-2 gap-x-14 gap-y-6">
                            {menuItems.slice(1).map((item, i) => (
                              <NavLink
                                key={i}
                                to={item.link}
                                className={({ isActive }) =>
                                  `flex items-center gap-4 !text-[#fff] transition${
                                    isActive ? ' active' : ''
                                  }`
                                }
                              >
                                <span className="flex items-center justify-center">
                                  {item.icon}
                                </span>
                                <span className="text-[16px] font-semibold">
                                  {item.label}
                                </span>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="w-[30%] bg-white px-8 py-8 border-l border-black/10">
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

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-[18px] hover:text-primary duration-300 navItem relative px-[25px]${
                    isActive ? ' active' : ''
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-[18px] hover:text-primary duration-300 navItem relative px-[25px]${
                    isActive ? ' active' : ''
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[18px] hover:text-primary duration-300 navItem relative px-[25px]${
                    isActive ? ' active' : ''
                  }`
                }
              >
                Contact Us
              </NavLink>
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
                <div className="icon w-[18px] h-[3px] transition-colors duration-[10ms] delay-300 ease-in-out bg-[#0C7FFE] rounded-[5px] relative"></div>
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
        <nav>
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about-us" },
            { label: "Services", to: "/services" },
            { label: "Blog", to: "/blog" },
            { label: "Contact Us", to: "/contact" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.to!}
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
        className={`fixed inset-0 bg-black/60 z-[99] transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />
    </>
  )
}

export default Header
