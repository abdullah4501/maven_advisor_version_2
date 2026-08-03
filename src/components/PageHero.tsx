import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import defaultHeroImage from "@/assets/team-banner.jpg"

type PageHeroProps = {
  eyebrow?: string
  title: string
  description: string
  image?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image = defaultHeroImage,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#050505] text-white lg:min-h-[760px]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
        <img src={image} alt="" className="h-full w-full object-cover opacity-60 lg:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent lg:from-[#050505] lg:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-black/10" />
      </div>
      <div className="absolute -left-[8vw] top-[18%] h-[520px] w-[520px] rounded-full bg-[#0C7FFE]/15 blur-[120px]" />
      <div className="absolute -right-[8%] top-[18%] h-[480px] w-[480px] rounded-full border border-white/[0.08]" />

      <div className="container relative z-10 flex min-h-[700px] flex-col justify-end pb-[75px] pt-[175px] lg:min-h-[760px] lg:pb-[90px]">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-[920px]">
          {eyebrow && <p className="wdt-heading mb-6 text-[#78b5ff]">{eyebrow}</p>}
          <h1 className="max-w-[1020px] text-[44px] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[56px] lg:text-[76px] xl:text-[82px]">{title}</h1>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-end gap-9 border-t border-white/20 pt-8 lg:grid-cols-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.18 }} className="max-w-[710px] text-[17px] leading-[1.75] text-white/75 lg:col-span-7 lg:text-[18px]">{description}</motion.p>
          {(primaryLabel || secondaryLabel) && (
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              {primaryLabel && primaryTo && (
                <Link to={primaryTo} className="inline-flex items-center gap-3 rounded-[12px] bg-primary-gradient px-7 py-[18px] text-[15px] font-semibold text-black transition-transform hover:-translate-y-1">{primaryLabel}<ArrowRight size={18} /></Link>
              )}
              {secondaryLabel && secondaryTo && (
                <Link to={secondaryTo} className="inline-flex items-center gap-3 rounded-[12px] border border-white/35 px-7 py-[18px] text-[15px] font-semibold text-white transition hover:bg-white hover:text-black">{secondaryLabel}<ArrowRight size={18} /></Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
