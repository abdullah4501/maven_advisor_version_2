import { useEffect, useRef } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Index from "@/pages/Index"
import AboutUs from "@/pages/About"
import Services from './pages/Services';
import Contact from './pages/Contact';
import { SettingsProvider } from "./context/SettingsContext";
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import WhoWeHelp from './pages/WhoWeHelp';
import ClientReviews from './pages/ClientReviews';
import AutomationAssessment from './pages/AutomationAssessment';
import GetQuote from './pages/GetQuote';
import ServicePageTemplate from './components/ServicePageTemplate';
import CampaignLanding from './pages/CampaignLanding';

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
      <Route path="/about" element={<AboutUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/virtual-cfo-services" element={<ServicePageTemplate pageKey="virtual-cfo" />} />
      <Route path="/virtual-cfo-services/finance-system-setup" element={<ServicePageTemplate pageKey="finance-system-setup" />} />
      <Route path="/virtual-cfo-services/finance-operations" element={<ServicePageTemplate pageKey="finance-operations" />} />
      <Route path="/virtual-cfo-services/reporting-and-forecasting" element={<ServicePageTemplate pageKey="reporting-and-forecasting" />} />
      <Route path="/virtual-cfo-services/uk-tax-and-compliance" element={<ServicePageTemplate pageKey="uk-tax-and-compliance" />} />
      <Route path="/virtual-cfo-services/us-tax-and-compliance" element={<ServicePageTemplate pageKey="us-tax-and-compliance" />} />
      <Route path="/virtual-cfo-services/strategic-financial-advisory" element={<ServicePageTemplate pageKey="strategic-financial-advisory" />} />
      <Route path="/agentic-ai-automation" element={<ServicePageTemplate pageKey="agentic-ai-automation" />} />
      <Route path="/agentic-ai-automation/accounting" element={<ServicePageTemplate pageKey="automation-accounting" />} />
      <Route path="/agentic-ai-automation/tax" element={<ServicePageTemplate pageKey="automation-tax" />} />
      <Route path="/agentic-ai-automation/compliance" element={<ServicePageTemplate pageKey="automation-compliance" />} />
      <Route path="/who-we-help" element={<WhoWeHelp />} />
      <Route path="/client-reviews" element={<ClientReviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/our-team" element={<Team />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/get-a-quote" element={<GetQuote />} />
      <Route path="/calculator" element={<GetQuote />} />
      <Route path="/automation-assessment" element={<AutomationAssessment />} />
      <Route path="/lp/uk-virtual-cfo" element={<CampaignLanding variant="uk-virtual-cfo" />} />
      <Route path="/lp/us-bookkeeping-tax" element={<CampaignLanding variant="us-bookkeeping-tax" />} />
      <Route path="/lp/accounting-automation" element={<CampaignLanding variant="accounting-automation" />} />
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
