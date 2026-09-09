import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Quote, X } from "lucide-react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"

import { usePageMeta } from "@/hooks/usePageMeta"
import { clientReviews } from "@/data/clientReviews"

import heroImage from "@/assets/service6.jpg"

type ClientReview = (typeof clientReviews)[number]

export default function ClientReviews() {
    const [selectedReview, setSelectedReview] = useState<ClientReview | null>(null)

    usePageMeta(
        "Client Reviews | Mavens Advisor",
        "Read how businesses describe Mavens Advisor’s bookkeeping, reporting, tax support, responsiveness and ownership."
    )

    return (
        <>
            <Header />

            <PageHero
                eyebrow="Social Proof"
                title="Why Clients Choose Mavens Advisor"
                image={heroImage}
                description="Hear directly from clients about the responsiveness, clarity and financial support that shape their experience with Mavens Advisor."
                primaryLabel="Get My Tailored Quote"
                primaryTo="/get-a-quote"
            />

            <section className="bg-[#f6f7f4] py-[60px] md:py-[100px]">
                <div className="container">
                    <div data-scroll-reveal className="mx-auto mb-10 max-w-[800px] text-center md:mb-[55px]">
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
                        {clientReviews.map((review) => (
                            <ReviewCard key={review.name} review={review} onReadMore={() => setSelectedReview(review)} />
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedReview && <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />}
            </AnimatePresence>

            <Footer />
        </>
    )
}

function ReviewCard({ review, onReadMore }: { review: ClientReview; onReadMore: () => void }) {
    const textRef = useRef<HTMLParagraphElement>(null)
    const [canExpand, setCanExpand] = useState(false)

    useLayoutEffect(() => {
        const text = textRef.current
        if (!text) return

        const checkOverflow = () => setCanExpand(text.scrollHeight > text.clientHeight + 1)
        checkOverflow()

        const resizeObserver = new ResizeObserver(checkOverflow)
        resizeObserver.observe(text)
        return () => resizeObserver.disconnect()
    }, [review.text])

    return (
        <article
            data-scroll-reveal
            className="group relative overflow-hidden rounded-[24px] bg-white p-[28px] hover:text-white md:rounded-[28px] md:p-[45px]"
        >
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-[#0C7FFB] to-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col gap-4">
                <Quote size={40} className="shrink-0 text-[#6b6b6b] transition-colors duration-300 group-hover:text-white" />

                <p
                    ref={textRef}
                    className="mt-5 h-[144px] overflow-hidden whitespace-pre-line text-[16px] leading-[1.8] text-[#6b6b6b] transition-colors duration-300 group-hover:text-white/80 md:mt-6 md:h-[153px] md:text-[17px]"
                >
                    {review.text}
                </p>

                {canExpand && (
                    <div className="min-h-[21px]">
                        <button
                            type="button"
                            onClick={onReadMore}
                            className="group/button inline-flex items-center gap-2 text-[14px] font-semibold text-[#0C7FFB] transition-colors duration-300 group-hover:text-white"
                        >
                            Read full review
                            <span aria-hidden="true" className="transition-transform duration-300 group-hover/button:translate-x-1">→</span>
                        </button>
                    </div>
                )}

                <div className="mt-auto flex items-center gap-4">
                    <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 md:h-[64px] md:w-[64px]">
                        <img src={review.image} alt={review.name} loading="lazy" className="h-full w-full object-cover" />
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-[17px] font-semibold leading-tight transition-colors duration-300 group-hover:text-white md:text-[18px]">{review.name}</h3>
                        <p className="mt-1 text-[14px] leading-[1.45] text-[#6b6b6b] transition-colors duration-300 group-hover:text-white/55">{review.company}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

function ReviewModal({ review, onClose }: { review: ClientReview; onClose: () => void }) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose()
        }

        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [onClose])

    return (
        <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 p-4 backdrop-blur-[6px] md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            <motion.article
                role="dialog"
                aria-modal="true"
                aria-labelledby="review-dialog-title"
                data-lenis-prevent
                className="flex max-h-[88vh] w-full max-w-[880px] flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:rounded-[32px]"
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="relative overflow-hidden bg-gradient-to-r from-[#071421] via-[#0b3967] to-[#0C7FFB] px-6 py-7 text-white md:px-10 md:py-9">
                    <Quote aria-hidden="true" size={54} className="absolute right-20 top-6 text-white/10 md:right-28 md:top-8" />
                    <button
                        type="button"
                        aria-label="Close full review"
                        onClick={onClose}
                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white hover:text-black md:right-7 md:top-7"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex items-center gap-4 pr-14">
                        <div className="h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full ring-2 ring-white/25 md:h-[72px] md:w-[72px]">
                            <img src={review.image} alt={review.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="min-w-0">
                            <h2 id="review-dialog-title" className="text-[20px] font-semibold leading-tight md:text-[24px]">{review.name}</h2>
                            <p className="mt-1 text-[14px] leading-[1.45] text-white/65 md:text-[15px]">{review.company}</p>
                        </div>
                    </div>
                </div>

                <div className="overflow-y-auto overscroll-contain px-6 py-7 [scrollbar-color:#A3A3A3_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[7px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#A3A3A3] md:px-10 md:py-9">
                    <p className="whitespace-pre-line text-[16px] leading-[1.85] text-[#595959] md:text-[18px]">
                        {review.text}
                    </p>
                </div>
            </motion.article>
        </motion.div>
    )
}
