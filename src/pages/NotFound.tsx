import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/team-banner.jpg"

export default function NotFound() {
  usePageMeta(
    "Page Not Found | Mavens Advisor",
    "The page you requested could not be found. Return to the Mavens Advisor homepage or contact our team.",
    { canonicalPath: false, noIndex: true },
  )

  return (
    <>
      <Header />
      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-[#050505] pb-[65px] pt-[165px] text-white md:min-h-[480px] md:pb-[80px]">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
        <div className="container relative z-10">
          <p className="wdt-heading mb-4 text-[#78b5ff]">Page Not Found</p>
          <h1 className="text-[86px] font-semibold leading-none tracking-[-0.05em] sm:text-[110px] md:text-[140px]">404</h1>
        </div>
      </section>

      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container">
          <div data-scroll-reveal className="max-w-[850px]">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.035em] md:text-[58px]">This Page Is No Longer Here</h2>
            <p className="mt-6 max-w-[720px] text-[18px] leading-[1.75] text-[#6b6b6b]">The address may be incorrect, or the page may have moved. Return to the homepage and continue exploring Mavens Advisor.</p>
            <Link to="/" className="mt-9 inline-flex items-center gap-3 rounded-[12px] bg-primary-gradient px-7 py-[18px] text-[15px] font-semibold text-black transition-transform hover:-translate-y-1">Return to Home <ArrowRight size={18} /></Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
