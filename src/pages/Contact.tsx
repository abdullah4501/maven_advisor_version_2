import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/contactbg.jpg"

export default function Contact() {
  usePageMeta("Contact Mavens Advisor | UK & US Business Support", "Contact Mavens Advisor about Virtual CFO services or agentic AI automation for accounting, tax and compliance.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Choose Your Next Step" title="Tell Us What Your Business Needs" description="Choose the service line that best matches your requirement, or contact us directly if you are not yet sure." />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <section className="rounded-[30px] bg-white p-[35px] md:p-[50px] flex flex-col ">
              <p className="wdt-heading mb-4">Finance Services and Virtual CFO</p>
              <h2 className="text-[32px] font-semibold">Build the Finance Support Your Business Needs</h2>
              <p className="my-5 text-[17px] leading-[1.75] text-[#6b6b6b]">For business owners who need Finance System Setup, Finance Operations, Financial Reporting and Forecasting, UK or US Tax and Compliance, Strategic Financial Advisory, or a broader Virtual CFO engagement.</p>
              <Link to="/get-a-quote" className="lg:mt-auto mt-8 self-start inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-7 py-4 font-semibold">Get My Tailored Quote <ArrowRight size={18} /></Link>
            </section>
            <section className="rounded-[30px] bg-black p-[35px] text-white md:p-[50px] flex flex-col">
              <p className="wdt-heading mb-4 text-white">Agentic AI Automation</p>
              <h2 className="text-[32px] font-semibold">Assess a Repetitive Workflow</h2>
              <p className="my-5 text-[17px] leading-[1.75] text-white/70">For teams that want to reduce repetitive accounting, tax or compliance administration while retaining human review and control.</p>
              <Link to="/automation-assessment" className="lg:mt-auto mt-8 self-start inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-7 py-4 font-semibold text-black">Assess My Workflow <ArrowRight size={18} /></Link>
            </section>
          </div>

          <section className="mt-8 rounded-[30px] bg-white p-[35px] md:p-[50px]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <a href="https://wa.me/447441441789" className="flex items-center gap-4"><span className="rounded-[14px] bg-primary-gradient p-4"><MessageCircle /></span><span><strong className="block">WhatsApp</strong>+44 7441 441789</span></a>
              <a href="tel:+447441441789" className="flex items-center gap-4"><span className="rounded-[14px] bg-primary-gradient p-4"><Phone /></span><span><strong className="block">Telephone</strong>+44 7441 441789</span></a>
              <a href="mailto:adeelshaikh@mavensadvisor.com" className="flex items-center gap-4"><span className="rounded-[14px] bg-primary-gradient p-4"><Mail /></span><span className="break-all"><strong className="block">Email</strong>adeelshaikh@mavensadvisor.com</span></a>
            </div>
            <p className="mt-9 border-t border-black/10 pt-7 text-[17px] leading-[1.7] text-[#6b6b6b]">You do not need to prepare a detailed brief before contacting us. Start with the business problem, current process and outcome you need. Our team will help identify the information required for the next step.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
