import { useState, useEffect, useRef } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Index from "@/pages/Index"
import AboutUs from "@/pages/About"
import Services from './pages/Services';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';
import { SettingsProvider } from "./context/SettingsContext";
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';

const queryClient = new QueryClient();

const RouterWrapper = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about-us" element={<AboutUs breadcrumb="About Us" />} />
      <Route path="/services" element={<Services breadcrumb="Services" />} />
      <Route path="/contact" element={<Contact breadcrumb="Contact Us" />} />
      <Route path="/our-team" element={<Team breadcrumb="Our Team" />} />
      <Route path="/faq" element={<FAQ breadcrumb="FAQs" />} />
      <Route path="/blog" element={<Blog breadcrumb="Blog" />} />
      <Route path="/calculator" element={<Calculator breadcrumb="Calculator" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <BrowserRouter>
          <RouterWrapper />
        </BrowserRouter>
      </SettingsProvider>
    </QueryClientProvider>
  );
};

export default App;
