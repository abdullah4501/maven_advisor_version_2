import { Check } from "lucide-react"
import { motion } from "framer-motion"
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

const revealViewport = { once: true, amount: 0.15, margin: "0px 0px -70px 0px" }

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" as const } },
}

const reasonReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease: "easeOut" as const } },
}

export default function WhoWeHelp() {
  usePageMeta("Virtual CFO Support for Growing UK & US Businesses | Mavens Advisor", "Keep more profit, protect cash and gain CFO-level financial control through one accountable team serving UK and US businesses.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="UK and US Businesses" title="Better Financial Control, Without the Finance Department" description="Mavens Advisor supports founders and leadership teams that want to retain more profit, understand cash, reduce financial administration and make important decisions with CFO-level guidance." primaryLabel="Tell Us What You Need" primaryTo="/contact" />
      <main data-scroll-reveal-managed className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {audiences.map(([title, copy]) => (
              <motion.section
                key={title}
                variants={cardReveal}
                className="group relative overflow-hidden rounded-[28px] bg-white p-[35px] md:p-[45px]"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-[#0C7FFB] to-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

                <div className="relative z-10">
                  <h2 className="text-[30px] font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">
                    {title}
                  </h2>

                  <p className="mt-5 text-[17px] leading-[1.75] text-[#6b6b6b] transition-colors duration-300 ease-in-out group-hover:text-white/75">
                    {copy}
                  </p>
                </div>
              </motion.section>
            ))}
          </motion.div>
          <motion.section initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ duration: 0.68, ease: "easeOut" }} className="mt-[80px] overflow-hidden rounded-[30px] bg-white p-[35px] md:p-[60px]">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ duration: 0.55, delay: 0.08 }}>
              <p className="wdt-heading mb-4">Common Reasons Clients Contact Us</p>
              <h2 className="text-[36px] font-semibold md:text-[48px]">Recognise Your Situation?</h2>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={revealViewport} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {reasons.map((reason) => (
                <motion.div
                  key={reason}
                  variants={reasonReveal}
                  whileHover={{ y: -3, backgroundColor: "#ffffff", boxShadow: "0 14px 34px rgba(17, 24, 39, 0.09)" }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex items-start gap-4 rounded-[16px] bg-[#f6f7f4] p-4 text-[#5f5f5f]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0C7FFE]/10 text-[#0C7FFE]">
                    <Check size={17} strokeWidth={2.5} />
                  </span>
                  <span className="pt-1 leading-[1.55]">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
