import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, Calculator } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { canonicalServices } from "@/data/services"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/features_main.jpg"

const outcomes = ["Identify legitimate tax-saving opportunities", "Improve cash-flow visibility and control", "Understand profit, costs and margins", "Receive better information for decisions", "Reduce the owner’s finance administration", "Prepare for financing or investor requirements", "Gain CFO-level support without building an in-house team", "Replace unpredictable fees with a fixed monthly cost"]
const responsibilities = ["Chart of accounts or accounting-system setup", "Bookkeeping", "Payroll", "Contractor payments", "Invoicing and billing", "Accounts payable", "Accounts receivable", "Management reporting", "Budgeting", "Cash-flow forecasting", "UK VAT, HMRC or Companies House filings", "US IRS or state tax filings", "Strategic financial advice", "Other requirements"]
const calendlyUrl = "https://calendly.com/adeelshaikh/quick-catch-up-with-your-virtual-cfo?hide_gdpr_banner=1&background_color=ffffff&text_color=161616&primary_color=0c7ffb"
type QuoteTab = "calculate" | "cfo"

const Field = ({ label, type = "text" }: { label: string; type?: string }) => <input type={type} aria-label={label} placeholder={label} className="rounded-[14px] bg-[#f3f5f4] px-5 py-4 outline-none" />

export default function GetQuote() {
  const [submitted, setSubmitted] = useState(false)
  const [automationSelected, setAutomationSelected] = useState(false)
  const [activeTab, setActiveTab] = useState<QuoteTab>("calculate")
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return

    event.preventDefault()
    const nextTab: QuoteTab = event.key === "Home"
      ? "calculate"
      : event.key === "End"
        ? "cfo"
        : activeTab === "calculate" ? "cfo" : "calculate"

    setActiveTab(nextTab)
    requestAnimationFrame(() => document.getElementById(`${nextTab}-quotation-tab`)?.focus())
  }
  usePageMeta("Get a Virtual CFO Quote | Mavens Advisor", "Tell us about your UK or US business and receive a fixed monthly Virtual CFO quotation built around your activity and priorities.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Get My Tailored Quote" title="See What Your Finance Function Could Cost" description="Tell us what your business is managing today and what you want the finance function to improve. We will assess the activity, review the requirements and prepare a tailored fixed monthly quotation." />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container max-w-[1100px]">
          <section className="rounded-[28px] bg-black p-[30px] text-white md:p-[45px]"><h2 className="text-[30px] font-semibold">Before You Begin</h2><p className="mt-4 leading-[1.7] text-white/70">The assessment usually takes a few minutes. Please provide operational information only. Do not upload bank statements, tax returns, Social Security numbers or confidential client records through this form.</p></section>

          <section className="mt-7 rounded-[26px] bg-white p-2 shadow-[0_16px_50px_rgba(17,24,39,0.06)] md:p-3">
            <div role="tablist" aria-label="Choose how to get your quotation" className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <QuoteTabButton active={activeTab === "calculate"} controls="calculate-quotation-panel" id="calculate-quotation-tab" onClick={() => setActiveTab("calculate")} onKeyDown={handleTabKeyDown} icon={<Calculator size={20} />}>
                Get My Quote
              </QuoteTabButton>
              <QuoteTabButton active={activeTab === "cfo"} controls="cfo-quotation-panel" id="cfo-quotation-tab" onClick={() => setActiveTab("cfo")} onKeyDown={handleTabKeyDown} icon={<CalendarDays size={20} />}>
                Book a Call with a CFO
              </QuoteTabButton>
            </div>
          </section>

          <div
            id="calculate-quotation-panel"
            role="tabpanel"
            aria-labelledby="calculate-quotation-tab"
            hidden={activeTab !== "calculate"}
            className="mt-7"
          >
            <motion.div initial={{ opacity: 0, y: -28 }} animate={{ opacity: activeTab === "calculate" ? 1 : 0, y: activeTab === "calculate" ? 0 : -28 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {submitted ? (
                <section className="rounded-[30px] bg-white p-[50px] text-center md:p-[75px]"><h2 className="text-[38px] font-semibold">Thank You</h2><p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-[1.7] text-[#6b6b6b]">Our team will review your activity, priorities and requirements, then contact you to discuss the appropriate scope and fixed monthly quotation.</p></section>
              ) : (
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="space-y-7">
                  <FormSection number="01" title="Your Business"><div className="grid grid-cols-1 gap-4 md:grid-cols-2"><Field label="Business name" /><Field label="Website" /><select aria-label="Primary market" className="rounded-[14px] bg-[#f3f5f4] px-5 py-4"><option>Primary market</option><option>United Kingdom</option><option>United States</option></select><Field label="Entity type" /><Field label="Industry" /><Field label="Number of entities" type="number" /></div></FormSection>
                  <FormSection number="02" title="Business Activity"><div className="grid grid-cols-1 gap-4 md:grid-cols-2"><Field label="Approximate monthly transaction volume" /><Field label="Number of employees" type="number" /><Field label="Number of contractors" type="number" /><Field label="Monthly customer invoices" /><Field label="Monthly supplier bills" /><Field label="Current accounting system" /></div></FormSection>
                  <FormSection number="03" title="Outcomes You Value Most"><Options items={outcomes} /></FormSection>
                  <FormSection number="04" title="Canonical Service Interest"><div className="grid grid-cols-1 gap-3 md:grid-cols-2">{canonicalServices.map((service) => <label key={service.title} className="flex gap-3 rounded-[14px] bg-[#f3f5f4] p-4"><input type="checkbox" onChange={(event) => service.title === "Agentic AI Automation" && setAutomationSelected(event.target.checked)} />{service.title}</label>)}</div>{automationSelected && <p className="mt-5 rounded-[14px] bg-blue-50 p-4 text-blue-800">Agentic AI Automation uses a separate assessment. <Link to="/automation-assessment" className="font-semibold underline">Continue to the workflow assessment</Link>.</p>}</FormSection>
                  <FormSection number="05" title="Relevant Finance Responsibilities"><Options items={responsibilities} /></FormSection>
                  <FormSection number="06" title="Current Position"><div className="grid grid-cols-1 gap-4 md:grid-cols-2"><Field label="Are the books currently up to date?" /><Field label="Who manages the work today?" /><Field label="Main problem you want to solve" /><Field label="Upcoming reporting, tax or financing deadlines" /><Field label="When would you like support to begin?" /></div></FormSection>
                  <FormSection number="07" title="Contact"><div className="grid grid-cols-1 gap-4 md:grid-cols-2"><Field label="Full name" /><Field label="Role" /><Field label="Business email" type="email" /><Field label="Telephone or WhatsApp" /><Field label="Preferred contact method" /></div><label className="mt-5 flex gap-3 text-[#6b6b6b]"><input required type="checkbox" /><span>I consent to the <Link to="/privacy-policy" className="font-semibold text-black underline underline-offset-2">privacy policy</Link> and to being contacted about this quotation.</span></label></FormSection>
                  <button type="submit" className="rounded-[14px] bg-primary-gradient px-9 py-5 text-[16px] font-semibold">Get My Tailored Quote</button>
                </form>
              )}
            </motion.div>
          </div>

          <div
            id="cfo-quotation-panel"
            role="tabpanel"
            aria-labelledby="cfo-quotation-tab"
            hidden={activeTab !== "cfo"}
            className="mt-7"
          >
            <motion.section initial={{ opacity: 0, y: -28 }} animate={{ opacity: activeTab === "cfo" ? 1 : 0, y: activeTab === "cfo" ? 0 : -28 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden rounded-[30px] bg-white shadow-[0_16px_50px_rgba(17,24,39,0.06)]">
              <div className="border-b border-black/10 px-[28px] py-[26px] md:px-[45px] md:py-[32px]">
                <p className="wdt-heading mb-3">Speak Directly with Our CFO</p>
                <h2 className="text-[30px] font-semibold leading-[1.2] md:text-[38px]">Choose a Convenient Time for Your Quotation Call</h2>
                <p className="mt-4 max-w-[780px] text-[16px] leading-[1.7] text-[#6b6b6b]">Schedule a quick discussion with our Virtual CFO to explain your current finance requirements and identify the most appropriate next step.</p>
              </div>
              <div className="relative min-h-[760px] bg-white md:min-h-[800px]">
                {!calendlyLoaded && <div className="absolute inset-0 z-20 flex items-start justify-center bg-white pt-16 text-[15px] text-[#777]">Loading available times…</div>}
                <iframe
                  src={calendlyUrl}
                  title="Schedule a quotation call with Mavens Advisor's CFO"
                  loading="lazy"
                  onLoad={() => setCalendlyLoaded(true)}
                  className="relative z-10 h-[760px] w-full border-0 bg-white md:h-[800px]"
                />
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function QuoteTabButton({ active, children, controls, icon, id, onClick, onKeyDown }: { active: boolean; children: React.ReactNode; controls: string; icon: React.ReactNode; id: string; onClick: () => void; onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void }) {
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`flex min-h-[72px] items-center gap-3 rounded-[20px] px-5 py-4 text-left text-[15px] font-semibold transition-all duration-300 md:px-7 md:text-[16px] ${active ? "bg-gradient-to-r from-[#0C7FFB] to-black text-white shadow-[0_12px_30px_rgba(12,127,251,0.18)]" : "bg-[#f3f5f4] text-[#555] hover:bg-[#e9edef] hover:text-black"}`}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${active ? "bg-white/15 text-white" : "bg-white text-[#0C7FFB]"}`}>{icon}</span>
      <span>{children}</span>
    </button>
  )
}

function FormSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="rounded-[28px] bg-white p-[30px] md:p-[45px]"><div className="mb-7 flex items-center gap-4"><span className="rounded-[10px] bg-primary-gradient px-3 py-2 font-semibold">{number}</span><h2 className="text-[28px] font-semibold">{title}</h2></div>{children}</section>
}

function Options({ items }: { items: string[] }) {
  return <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{items.map((item) => <label key={item} className="flex gap-3 rounded-[14px] bg-[#f3f5f4] p-4"><input type="checkbox" />{item}</label>)}</div>
}
