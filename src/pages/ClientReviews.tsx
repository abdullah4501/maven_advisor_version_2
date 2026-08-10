import { Quote } from "lucide-react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"

import { usePageMeta } from "@/hooks/usePageMeta"
import { clientReviews } from "@/data/clientReviews"

import heroImage from "@/assets/service6.jpg"

export default function ClientReviews() {
    usePageMeta(
        "Client Reviews | Mavens Advisor",
        "Read how businesses describe Mavens Advisor’s bookkeeping, reporting, tax support, responsiveness and ownership."
    )

    return (
        <>
            <Header />

            <PageHero
                title="Client Reviews"
                image={heroImage}
            />

            <section className="bg-[#f6f7f4] py-[60px] md:py-[100px]">
                <div className="container">
                    <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-[55px]">
                        <h2 className="text-[34px] font-semibold leading-[1.15] md:text-[48px]">
                            Trusted by Businesses That Value Accuracy and
                            Reliability
                        </h2>

                        <p className="mt-4 text-[16px] leading-[1.7] text-[#6b6b6b] md:text-[18px]">
                            See what our clients say about working with Mavens
                            Advisor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                        {clientReviews.map((review, index) => {

                            return (
                                <article
                                    key={review.name}
                                    className={`rounded-[24px] p-[28px] md:rounded-[28px] md:p-[45px] bg-black text-white`}
                                >
                                    <div
                                        className={`flex items-start justify-between`}
                                    >
                                        <Quote
                                            size={40}
                                            className="text-white"
                                        />
                                    </div>

                                    <p
                                        className={`mt-5 text-[16px] leading-[1.8] md:mt-6 md:text-[17px] text-white/80`}
                                    >
                                        {review.text}
                                    </p>

                                    <div className="mt-7 flex items-center gap-4 md:mt-8">
                                        <div
                                            className={`h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full md:h-[64px] md:w-[64px] ring-2 ring-white/20
                                                `}
                                        >
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                loading="lazy"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3
                                                className={`text-[17px] font-semibold leading-tight md:text-[18px] text-white`}
                                            >
                                                {review.name}
                                            </h3>

                                            <p
                                                className={`mt-1 text-[14px] leading-[1.45] text-white/55`}
                                            >
                                                {review.company}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}