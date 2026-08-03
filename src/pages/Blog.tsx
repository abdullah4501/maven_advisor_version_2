import { ArrowRight } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/Blog-img-07.jpg"

const topics = ["When does a growing business need a Virtual CFO?", "Bookkeeper, accountant or Virtual CFO: what is the difference?", "What should be included in a Finance System Setup?", "How to design a chart of accounts for decision-ready reporting", "How tax-ready bookkeeping can prevent missed deductions and credits", "How to reduce avoidable tax leakage without aggressive tax claims", "What should a monthly management-reporting pack contain?", "How to build a practical cash-flow forecast", "Preparing company records for UK VAT and HMRC filings", "Keeping books ready for IRS and state tax filings", "Financial reporting for lenders and investors", "Which accounting processes are suitable for agentic automation?", "Why human review still matters in tax automation", "How to design exception handling in compliance workflows"]

export default function Blog() {
  usePageMeta("Finance and Automation Insights | Mavens Advisor", "Practical insights for UK and US business owners on Virtual CFO services, reporting, tax-ready records and controlled automation.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Insights" title="Practical Guidance for Better Finance Decisions" description="Explore clear, business-focused perspectives on finance systems, reporting, cash flow, tax-ready records, Virtual CFO support and controlled automation." />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <article key={topic} className={`flex min-h-[230px] flex-col rounded-[24px] p-[30px] ${index === 0 ? "bg-black text-white" : "bg-white"}`}>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#0C7FFE]">Insight {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-5 flex-1 text-[23px] font-semibold leading-[1.3]">{topic}</h2>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0C7FFE]">Coming Soon <ArrowRight size={18} /></span>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
