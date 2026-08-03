import { ChevronDown } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/Faq-side-image-1.jpg"

const faqs = [
  ["What services does Mavens Advisor provide?", "Mavens Advisor provides eight canonical services: Finance System Setup; Finance Operations; Financial Reporting and Forecasting; UK Tax, HMRC and Companies House Compliance; US Tax, IRS and State Compliance; Strategic Financial Advisory; Virtual CFO; and Agentic AI Automation. The first six may be engaged individually or combined within a Virtual CFO scope. Agentic AI Automation is separately assessed and priced."],
  ["What does Finance System Setup include?", "The scope may include chart-of-accounts design, accounting-software configuration, opening-balance review, reporting dimensions, bank or payment feeds, master-data structure, finance workflows, approval controls and a month-end responsibility map."],
  ["What is a Virtual CFO service?", "A Virtual CFO service combines the specialist finance capabilities a business needs through one accountable team without building a complete in-house finance department."],
  ["How is Mavens Advisor different from a traditional bookkeeper?", "Bookkeeping records what has already happened. Mavens Advisor also connects those records with management reporting, cash-flow forecasting, tax coordination and CFO-level interpretation so the information supports decisions about profit, cash and growth."],
  ["Can Mavens Advisor help us save tax?", "Mavens Advisor keeps records tax-ready and helps identify legitimate deductions, credits, reliefs or planning opportunities. Tax savings cannot be guaranteed and remain subject to eligibility, jurisdiction and professional review."],
  ["Is a Virtual CFO more expensive than a bookkeeper?", "The monthly quotation depends on the activity and responsibilities required. Mavens Advisor is designed to give SMEs and startups access to bookkeeping, reporting, tax support and CFO-level guidance through one predictable fee."],
  ["Which countries does Mavens Advisor support?", "Mavens Advisor focuses on businesses based in the United Kingdom and United States."],
  ["What is included in Virtual CFO Services?", "The scope may combine Finance System Setup, Finance Operations, Financial Reporting and Forecasting, UK or US Tax and Compliance, and Strategic Financial Advisory. Not every service is automatically included; the final responsibilities are reviewed and quoted before onboarding."],
  ["Does Mavens Advisor support UK tax and compliance filings?", "Yes. The agreed scope may include VAT, HMRC and Companies House filing support, together with the accounting records and schedules required for those filings."],
  ["Does Mavens Advisor prepare US federal tax filings?", "Mavens Advisor provides IRS filing support for US-based companies within the agreed engagement scope."],
  ["Does Mavens Advisor support state tax filings?", "Yes. The jurisdictions and filing responsibilities are confirmed during scoping."],
  ["Can you work with our existing bookkeeper or accountant?", "Yes. Responsibilities can be divided between Mavens Advisor and an existing internal or external provider, with ownership, information flow and review responsibilities defined clearly."],
  ["Will we need to change our accounting software?", "Not necessarily. We first review the current system and process. A change is recommended only when the existing setup cannot support the agreed requirements effectively."],
  ["Can you bring our books up to date?", "Catch-up or cleanup work can be assessed separately after reviewing the condition of the books, missing information and time period involved."],
  ["How often will we receive reports?", "The reporting timetable is agreed during onboarding. Monthly reporting is a core part of the service, while some clients may also require more frequent operational updates."],
  ["How is the monthly fee calculated?", "The quotation is based on transaction volume, entities, payroll, contractor activity, invoicing, reporting and tax filing requirements. The final fixed monthly amount is confirmed after review."],
  ["Are there hidden or hourly charges?", "Established monthly service packages use an agreed fixed subscription. Work outside the agreed recurring scope is discussed and quoted separately before it is undertaken."],
  ["Can Mavens Advisor support financing or investor requests?", "The team can support financial reporting, forecasts, schedules and information required by lenders or investors where included in the engagement."],
  ["What is Agentic AI Automation?", "It is a separate service line that assesses and automates suitable accounting, tax and compliance workflows while retaining human approvals, exception handling and professional oversight."],
  ["Is Agentic AI Automation included in the Virtual CFO subscription?", "No. It is a separate line of business with its own assessment, scope and pricing."],
  ["What types of workflows can be automated?", "Potential areas include document collection, data extraction, task routing, deadline tracking, reconciliation preparation, review queues, approval workflows and exception escalation."],
  ["Will AI make tax or compliance decisions without review?", "No. Qualified people remain responsible for professional judgement, final review and decisions carrying legal or regulatory responsibility."],
  ["Can an automation integrate with our existing systems?", "Integration options are assessed during discovery and depend on the systems, available access, APIs, data structure and security requirements."],
  ["How do you handle exceptions?", "A controlled workflow should identify exceptions, assign them to the correct person and preserve evidence of the resolution. Exceptions should never be silently ignored."],
  ["How do we get started?", "Complete the Virtual CFO quotation assessment or the automation assessment. The team will review your information and contact you to discuss the next step."],
]

export default function FAQ() {
  usePageMeta("Frequently Asked Questions | Mavens Advisor", "Answers about Mavens Advisor finance services, Virtual CFO support, pricing, tax compliance and Agentic AI Automation.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Frequently Asked Questions" title="Clear Answers About Our Services and How We Work" description="Learn how our finance services, Virtual CFO engagements and controlled automation assessments are scoped, delivered and priced." />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container max-w-[1050px] space-y-4">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0} className="group rounded-[20px] bg-white p-[24px] md:p-[30px]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[20px] font-semibold md:text-[22px]">{question}<ChevronDown className="shrink-0 transition group-open:rotate-180" /></summary>
              <p className="mt-5 border-t border-black/10 pt-5 text-[16px] leading-[1.75] text-[#6b6b6b]">{answer}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
