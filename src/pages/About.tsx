import { ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/features_main.jpg"

const principles = [
  ["Ownership", "Responsibilities are defined and actively managed."],
  ["Clarity", "Clients should understand what is complete, what is pending and what requires a decision."],
  ["Timeliness", "Financial information loses value when it arrives too late."],
  ["Professional judgement", "Advice and review remain grounded in facts, records and business context."],
  ["Consistency", "Reliable outcomes come from repeatable processes, not last-minute effort."],
  ["Controlled innovation", "Automation should strengthen accountability rather than obscure it."],
]

export default function AboutUs() {
  usePageMeta("About Mavens Advisor | Virtual CFO & Automation Specialists", "Meet the team helping UK and US businesses protect profit, control cash and make better decisions.")
  return (
    <>
      <Header />
      <PageHero
        eyebrow="About Mavens Advisor"
        image={heroImage}
        title="A Finance Partner Focused on What the Numbers Should Do for Your Business"
        description="Mavens Advisor was built on a straightforward belief: business owners deserve more than completed books. They need a finance team that protects value, explains what the numbers mean and takes ownership of the work."
        primaryLabel="Meet the Team"
        primaryTo="/team"
      />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container space-y-8">
          <section className="grid grid-cols-1 gap-10 rounded-[30px] bg-white p-[35px] md:p-[60px] lg:grid-cols-2">
            <div>
              <p className="wdt-heading mb-4">Our Purpose</p>
              <h2 className="text-[36px] font-semibold leading-[1.15] md:text-[48px]">Protect Value, Explain the Numbers, Take Ownership</h2>
            </div>
            <p className="text-[18px] leading-[1.8] text-[#6b6b6b]">We help UK and US businesses keep more of what they earn, understand cash movement, meet tax and compliance responsibilities and make better decisions. Our role is to connect accurate execution with commercial interpretation, communicate clearly and give decision-makers information they can use.</p>
          </section>

          <section className="rounded-[30px] bg-black p-[35px] text-white md:p-[60px]">
            <p className="wdt-heading mb-4 text-white">How We Work</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {principles.map(([title, copy]) => (
                <div key={title} className="rounded-[22px] bg-white/10 p-[28px]">
                  <h3 className="text-[22px] font-semibold">{title}</h3>
                  <p className="mt-3 leading-[1.65] text-white/70">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] bg-white p-[35px] md:p-[50px]">
              <h2 className="text-[32px] font-semibold">Two Specialist Service Lines</h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-[#6b6b6b]">Our finance practice provides six specialist finance services that can be engaged individually or combined within a Virtual CFO engagement. Our separate Agentic AI Automation practice improves suitable accounting, tax and compliance workflows through controlled technology implementation.</p>
              <Link to="/services" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0C7FFE]">Explore All Services <ArrowRight size={18} /></Link>
            </div>
            <div className="rounded-[30px] bg-white p-[35px] md:p-[50px]">
              <h2 className="text-[32px] font-semibold">Our Market Focus</h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-[#6b6b6b]">Mavens Advisor focuses on clients based in the United Kingdom and United States. This allows our team to develop practical experience around the systems, reporting expectations and compliance environments relevant to those markets.</p>
              <Link to="/team" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0C7FFE]">Meet the Leadership Team <ArrowRight size={18} /></Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
