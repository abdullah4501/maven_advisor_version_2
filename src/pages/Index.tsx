import Header from "@/components/Header";
import HeroSlider from "../components/HeroSlider";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import ServicesSlider from "@/components/ServicesSlider";
import FeaturesTabs from "@/components/FeaturesTabs";
import Testimonial from "@/components/Testimonial";
import WorkProcess from "@/components/WorkProcess";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import HomepageClosing from "@/components/HomepageClosing";
import { usePageMeta } from "@/hooks/usePageMeta";


const Home = () => {
  usePageMeta("Virtual CFO Services for UK & US Businesses | Mavens Advisor", "Keep more of what you earn, protect cash flow and make better decisions with a complete Virtual CFO finance function for one fixed monthly fee.")
  return (
    <>
      <Header />
      <HeroSlider />
      <InteractiveShowcase />
      <WorkProcess />
      <ServicesSlider />
      <FeaturesTabs />
      <Testimonial />
      <HomepageClosing />
      
      <Footer />
    </>
  );
};

export default Home;
