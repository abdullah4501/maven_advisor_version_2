import Header from "@/components/Header";
import HeroSlider from "../components/HeroSlider";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import ServicesSlider from "@/components/ServicesSlider";
import FeaturesTabs from "@/components/FeaturesTabs";
import Testimonial from "@/components/Testimonial";
import Faqs from "@/components/Faqs";
import TeamSection from "@/components/TeamSection";
import WorkProcess from "@/components/WorkProcess";
import ContactSection from "@/components/ContactSection";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import NewsletterPopup from "@/components/NewsletterPopup";
import { useEffect, useState } from "react";


const Home = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setPopupOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <NewsletterPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      <Header />
      <HeroSlider />
      <InteractiveShowcase />
      <ServicesSlider />
      <FeaturesTabs />
      <Testimonial />
      <div className="bg-[#f6f7f4] py-[40px] !pt-0 md:py-[100px] md:-mt-[50px] relative">
        <Counter />
      </div>
      <Faqs />
      <TeamSection />
      <WorkProcess />
      <ContactSection />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
