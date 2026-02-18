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


const Home = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <InteractiveShowcase />
      <ServicesSlider />
      <FeaturesTabs />
      <Testimonial/>
      <Faqs/>
      <TeamSection />
      <WorkProcess/>
      <ContactSection/>
    </>
  );
};

export default Home;
 