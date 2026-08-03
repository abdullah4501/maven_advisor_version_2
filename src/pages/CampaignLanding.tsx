import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import ukImage from "@/assets/service4.jpg"
import usImage from "@/assets/service5.jpg"
import automationImage from "@/assets/feature_main2.jpg"

const pages = {
  "uk-virtual-cfo": {
    title: "Keep More of What You Earn and Gain Control of Your Business Finances",
    copy: "Get bookkeeping, reporting, tax support and CFO-level guidance through one accountable team for a fixed monthly fee, without building an expensive in-house finance department.",
    cta: "Get My Tailored Quote", to: "/get-a-quote",
    image: ukImage,
    bullets: ["Keep records tax-ready and identify legitimate tax-saving opportunities", "Understand profit, margins, costs and cash movement", "See cash-flow pressure and upcoming obligations earlier", "Give bookkeeping, payroll, billing, payables and receivables clear ownership", "Coordinate VAT, HMRC and Companies House requirements", "Know your recurring finance cost through a fixed monthly quotation"],
    closing: "Get more than completed books. Get a finance team focused on your business.",
  },
  "us-bookkeeping-tax": {
    title: "Keep Your Books Tax-Ready and Avoid Paying More Than Legally Required",
    copy: "Coordinate bookkeeping, reporting, payroll, IRS filings and state tax filings while identifying eligible deductions, credits and planning opportunities through one service team.",
    cta: "Review My US Tax and Finance Setup", to: "/get-a-quote",
    image: usImage,
    bullets: ["Current records that support timely tax preparation", "Review for legitimate deductions, credits and planning opportunities", "Clear profit, cash and financial-performance reporting", "IRS and state tax filing support", "Support for financing and information requests where scoped", "Availability aligned with US business communication needs"],
    closing: "Coordinate your books, reporting and filing responsibilities through one accountable team.",
  },
  "accounting-automation": {
    title: "Scale Accounting Workflows Without Scaling Repetitive Administration",
    copy: "Reduce manual handoffs, improve turnaround and surface exceptions through controlled agentic automation designed around approvals, evidence and existing systems.",
    cta: "Assess My Workflow", to: "/automation-assessment",
    image: automationImage,
    bullets: ["Process discovery before technology selection", "Human approval where judgement matters", "Exception identification and escalation", "Integration assessment", "Testing, implementation and monitoring"],
    closing: "Start with the process that consumes the most time.",
  },
}

export default function CampaignLanding({ variant }: { variant: keyof typeof pages }) {
  const page = pages[variant]
  usePageMeta(`${page.title} | Mavens Advisor`, page.copy)
  return (
    <>
      <Header />
      <PageHero image={page.image} eyebrow="Focused Business Support" title={page.title} description={page.copy} primaryLabel={page.cta} primaryTo={page.to} />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container max-w-[1050px]">
          <section className="rounded-[30px] bg-white p-[35px] md:p-[60px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {page.bullets.map((item) => <div key={item} className="flex gap-3 rounded-[16px] bg-[#f3f5f4] p-5 text-[17px]"><Check size={20} className="mt-0.5 shrink-0 text-[#0C7FFE]" />{item}</div>)}
            </div>
          </section>
          <section className="mt-8 rounded-[30px] bg-black p-[40px] text-white md:p-[65px]"><h2 className="text-[36px] font-semibold leading-[1.2] md:text-[50px]">{page.closing}</h2><Link to={page.to} className="mt-8 inline-block rounded-[14px] bg-primary-gradient px-8 py-4 font-semibold text-black">{page.cta}</Link></section>
        </div>
      </main>
      <Footer />
    </>
  )
}
