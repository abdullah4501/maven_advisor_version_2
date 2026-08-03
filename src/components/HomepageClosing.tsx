import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import footerImg from "@/assets/footer.png"

export default function HomepageClosing() {
    return (
        <section className="bg-[#f6f7f4] pb-[100px]">
            <div className="container">
                
                <div
                    className="relative overflow-hidden rounded-[30px] bg-black bg-cover bg-center px-[30px] py-[65px] md:px-[70px]"
                    style={{ backgroundImage: `url(${footerImg})` }}
                >
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="relative z-10 max-w-[900px]">
                        <h3 className="wdt-heading mb-4 text-white">Let’s Talk</h3>
                        <h2 className="text-[38px] font-semibold leading-[1.15] text-white md:text-[56px]">
                            Ready to Keep More, Know More and Make Better Decisions?
                        </h2>
                        <p className="mt-5 text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
                            Tell us how your business operates today. We will assess the activity, identify the finance support you need and provide a tailored fixed monthly quotation.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/get-a-quote"
                                className="inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold text-black"
                            >
                                Get My Tailored Quote
                                <ArrowRight />
                            </Link>
                            <Link
                                to="/automation-assessment"
                                className="inline-flex items-center gap-3 rounded-[14px] border border-white/50 px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black"
                            >
                                Assess My Workflow
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
