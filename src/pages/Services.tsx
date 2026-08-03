import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import FeaturesTabs from "@/components/FeaturesTabs"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ServicesSlider from "@/components/ServicesSlider"
import { canonicalServices, servicePages } from "@/data/services"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/service-flex-banner-img-01.jpg"

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -70px 0px" },
  transition: { duration: 0.65 },
}

function serviceHighlights(path: string) {
  const page = Object.values(servicePages).find((item) => item.path === path)
  if (!page) return []
  return page.sections.flatMap((section) => section.bullets ?? []).slice(0, 5)
}

export default function Services() {
  usePageMeta(
    "Finance Services & Virtual CFO Support | Mavens Advisor",
    "Explore eight specialist Mavens Advisor services for finance setup, operations, reporting, tax, advisory, Virtual CFO and controlled automation.",
  )

  return (
    <>
      <Header />
      <section className="relative min-h-[760px] overflow-hidden bg-[#050505] text-white lg:min-h-[820px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%]">
          <img src={heroImage} alt="" className="h-full w-full object-cover opacity-60 lg:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent lg:from-[#050505] lg:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-black/10" />
        </div>
        <div className="absolute -left-[8vw] top-[18%] h-[540px] w-[540px] rounded-full bg-[#0C7FFE]/15 blur-[130px]" />
        <div className="absolute bottom-[-12%] left-[38%] select-none text-[clamp(12rem,29vw,31rem)] font-bold leading-none text-white/[0.025]">08</div>

        <div className="container relative z-10 flex min-h-[760px] flex-col justify-end pb-[75px] pt-[180px] lg:min-h-[820px] lg:pb-[90px]">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-[1040px]">
            <p className="wdt-heading mb-6 text-[#78b5ff]">Eight Specialist Services</p>
            <h1 className="text-[48px] font-semibold leading-[0.99] tracking-[-0.05em] md:text-[72px] lg:text-[92px]">Finance support,<br /><span className="text-white">clearly defined.</span></h1>
          </motion.div>
          <div className="mt-14 grid grid-cols-1 items-end gap-9 border-t border-white/20 pt-8 lg:grid-cols-12">
            <p className="max-w-[720px] text-[17px] leading-[1.75] text-white/75 lg:col-span-7 lg:text-[18px]">Engage a specialist finance service, combine the capabilities you need through Virtual CFO, or separately assess a suitable accounting, tax or compliance workflow for controlled automation.</p>
            <div className="lg:col-span-5 lg:text-right">
              <Link to="/get-a-quote" className="inline-flex items-center gap-3 rounded-[12px] bg-primary-gradient px-7 py-[18px] text-[15px] font-semibold text-black transition-transform hover:-translate-y-1">Get My Tailored Quote<ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <main className="text-black">
        <FeaturesTabs />
        <ServicesSlider />

        <section className="bg-[#f6f7f4] py-[90px] md:py-[145px]">
          <div className="container">
            <div className="mb-[65px] grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <motion.div {...reveal} className="lg:col-span-8">
                <p className="wdt-heading mb-5">Complete Service Directory</p>
                <h2 className="text-[40px] font-semibold leading-[1.06] tracking-[-0.035em] md:text-[60px]">Explore every service<br /><span className="text-[#777]">in more detail.</span></h2>
              </motion.div>
              <motion.p {...reveal} transition={{ duration: 0.65, delay: 0.1 }} className="max-w-[520px] text-[17px] leading-[1.75] text-[#666] lg:col-span-4">Choose a defined specialist service or combine the required finance capabilities through one accountable Virtual CFO team.</motion.p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {canonicalServices.map((service, index) => {
                const highlights = serviceHighlights(service.path)
                return (
                  <motion.article key={service.path} {...reveal} className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(17,24,39,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(17,24,39,0.12)]">
                    <Link to={service.path} className="relative block h-[245px] overflow-hidden">
                      <img src={service.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                      <span className="absolute bottom-5 left-6 text-[13px] font-semibold tracking-[0.14em] text-white/80">SERVICE {String(index + 1).padStart(2, "0")}</span>
                      <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-rotate-45"><ArrowRight size={18} /></span>
                    </Link>
                    <div className="flex flex-1 flex-col p-[30px] md:p-[38px]">
                      <Link to={service.path}><h3 className="text-[27px] font-semibold leading-[1.15] tracking-[-0.02em] transition-colors group-hover:text-[#0C7FFE]">{service.title}</h3></Link>
                      <p className="mt-4 text-[16px] leading-[1.7] text-[#686868]">{service.value}</p>
                      {highlights.length > 0 && (
                        <ul className="mt-7 border-t border-black/10">
                          {highlights.map((item) => (
                            <li key={item} className="flex gap-3 border-b border-black/10 py-3.5 text-[14px] leading-[1.5] text-[#666]"><Check size={16} className="mt-0.5 shrink-0 text-[#0C7FFE]" />{item}</li>
                          ))}
                        </ul>
                      )}
                      <Link to={service.path} className="mt-8 inline-flex items-center gap-3 self-start text-[14px] font-semibold uppercase tracking-[0.1em]">View Service<span className="h-px w-10 bg-black transition-all group-hover:w-16 group-hover:bg-[#0C7FFE]" /></Link>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
