import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Index from "@/pages/Index"
import AboutUs from "@/pages/About"
import Services from './pages/Services';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

    return (
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
             <Route path="/about-us" element={<AboutUs breadcrumb="About Us" />} />
             <Route path="/services" element={<Services breadcrumb="Services" />} />
            
          </Routes>

        </BrowserRouter>
      </QueryClientProvider>
    )
  }

  export default App
