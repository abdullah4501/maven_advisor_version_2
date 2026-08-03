import { Check } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/h1.jpg"

const audiences = [
  ["E-commerce Businesses", "Keep transaction-heavy books tax-ready, understand product and channel margins, protect cash and reduce the founder’s dependence on manual bookkeeping follow-up."],
  ["Construction and Home-Service Businesses", "Create consistent reporting across active jobs, maintain visibility over cash and obligations, and identify where cost movement is affecting profit."],
  ["Professional-Services Businesses", "Coordinate billing, contractor or payroll activity, recurring reporting and tax obligations while giving owners a clearer view of utilisation, margin and cash."],
  ["Multi-Entity and Internationally Connected Businesses", "Bring greater structure to bookkeeping, reporting, tax and compliance where several entities, jurisdictions or advisers must work from consistent information."],
]

const reasons = ["The books are behind or unreliable", "The accounting system or chart of accounts was never designed for the business", "Legitimate deductions, credits or planning opportunities may be overlooked", "Cash is moving but the business lacks visibility", "Reporting is too late to support decisions", "The founder is still coordinating routine finance work", "Payables or receivables lack ownership", "UK or US filing responsibilities are difficult to coordinate", "The company needs information for lenders or investors", "The team spends too much time on repetitive finance tasks", "Existing systems are not connected through a controlled workflow"]

export default function WhoWeHelp() {
  usePageMeta("Virtual CFO Support for Growing UK & US Businesses | Mavens Advisor", "Keep more profit, protect cash and gain CFO-level financial control through one accountable team serving UK and US businesses.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="UK and US Businesses" title="Built for Owners Who Need Better Financial Control Without Building a Finance Department" description="Mavens Advisor supports founders and leadership teams that want to retain more profit, understand cash, reduce financial administration and make important decisions with CFO-level guidance." primaryLabel="Tell Us What You Need" primaryTo="/contact" />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {audiences.map(([title, copy], index) => (
              <section key={title} className={`rounded-[28px] p-[35px] md:p-[45px] ${index === 0 ? "bg-black text-white" : "bg-white"}`}>
                <h2 className="text-[30px] font-semibold">{title}</h2>
                <p className={`mt-5 text-[17px] leading-[1.75] ${index === 0 ? "text-white/75" : "text-[#6b6b6b]"}`}>{copy}</p>
              </section>
            ))}
          </div>
          <section className="mt-[80px] rounded-[30px] bg-white p-[35px] md:p-[60px]">
            <p className="wdt-heading mb-4">Common Reasons Clients Contact Us</p>
            <h2 className="text-[36px] font-semibold md:text-[48px]">Recognise Your Situation?</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {reasons.map((reason) => <div key={reason} className="flex gap-3 rounded-[16px] bg-[#f6f7f4] p-4 text-[#5f5f5f]"><Check className="mt-0.5 shrink-0 text-[#0C7FFE]" size={20} />{reason}</div>)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
