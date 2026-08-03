import { useState } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/feature_main2.jpg"

const fields = ["Business and department", "Accounting, tax or compliance category", "Name of the process", "Current systems", "People involved", "Frequency", "Approximate volume", "Estimated staff time currently consumed", "Current delays, rework or avoidable errors", "Inputs and data sources", "Expected outputs", "Current approval steps", "Common exceptions", "Security or compliance considerations", "Desired business outcome", "Full name", "Business email", "Telephone or WhatsApp"]

export default function AutomationAssessment() {
  const [submitted, setSubmitted] = useState(false)
  usePageMeta("Agentic AI Automation Assessment | Mavens Advisor", "Tell us which accounting, tax or compliance workflow you want to improve and start a controlled automation assessment.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Assess My Workflow" title="Show Us the Workflow That Is Taking Too Much Time" description="Describe the process, systems, approvals, exceptions and time currently consumed. We will assess whether controlled automation could reduce administration, improve turnaround and strengthen process visibility." />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container max-w-[1050px]">
          {submitted ? (
            <section className="rounded-[30px] bg-white p-[45px] text-center md:p-[70px]"><h2 className="text-[36px] font-semibold">Thank You</h2><p className="mx-auto mt-5 max-w-[700px] text-[18px] leading-[1.7] text-[#6b6b6b]">We will review the workflow and contact you to discuss its suitability for controlled automation.</p></section>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="rounded-[30px] bg-white p-[30px] md:p-[55px]">
              <p className="wdt-heading mb-4">Workflow Assessment</p>
              <h2 className="text-[34px] font-semibold md:text-[46px]">Tell Us How the Process Works Today</h2>
              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                {fields.map((field) => field === "Current delays, rework or avoidable errors" || field === "Desired business outcome" ? (
                  <textarea key={field} aria-label={field} placeholder={field} className="min-h-[130px] rounded-[14px] bg-[#f3f5f4] px-5 py-4 outline-none md:col-span-2" />
                ) : (
                  <input key={field} aria-label={field} placeholder={field} className="rounded-[14px] bg-[#f3f5f4] px-5 py-4 outline-none" />
                ))}
              </div>
              <label className="mt-6 flex items-start gap-3 text-[15px] text-[#6b6b6b]"><input required type="checkbox" className="mt-1" />I consent to the privacy notice and to being contacted about this assessment.</label>
              <button type="submit" className="mt-8 rounded-[14px] bg-primary-gradient px-8 py-4 font-semibold">Submit My Workflow</button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
