import { useRef } from "react"
import { ArrowRight, Quote } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"

import {
    clientReviews,
    type ClientReview,
} from "@/data/clientReviews"

const midpoint = Math.ceil(clientReviews.length / 2)

const leftTestimonials = clientReviews.slice(0, midpoint)
const rightTestimonials = clientReviews.slice(midpoint)
const marqueeCopies = [0, 1]

function Card({
    text,
    name,
    company,
    image,
}: ClientReview) {
    return (
        <article className="rounded-[20px] bg-[#f8f9f7] p-5 md:p-6">
            <Quote
                size={30}
                className="text-[#0C7FFE]"
            />

            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-[#606060]">
                {text}
            </p>

            <div className="mt-6 flex items-center gap-3">
                <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-[#ececec]">
                    <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="min-w-0">
                    <h5 className="text-[16px] font-semibold leading-tight text-black">
                        {name}
                    </h5>

                    <p className="mt-1 text-[13px] leading-[1.4] text-[#929292]">
                        {company}
                    </p>
                </div>
            </div>
        </article>
    )
}

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
}

export default function Testimonial() {
    const gridRef = useRef(null)
    const headerRef = useRef(null)

    const gridInView = useInView(gridRef, {
        once: true,
        margin: "0px 0px -80px 0px",
    })

    return (
        <section className="relative bg-[#f6f7f4] py-[40px] pt-0 !pb-[85px] md:-mt-[80px] md:py-[100px]">
            <div className="container">
                <motion.div
                    ref={headerRef}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={gridInView ? "visible" : "hidden"}
                    className="mb-10 flex items-center md:mb-[50px]"
                >
                    <div className="m-auto flex flex-col items-center">
                        <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                            <h3 className="wdt-heading text-center">
                                Client Proof
                            </h3>
                        </div>

                        <h2 className="text-center text-[36px] font-semibold leading-[1.15] md:text-[50px]">
                            Hear What Our Clients Say.
                        </h2>

                        <p className="mt-1 max-w-[800px] text-center text-[16px] leading-[1.7] text-[#6b6b6b] md:text-[18px]">
                            Read how businesses describe Mavens Advisor’s
                            bookkeeping, reporting, tax support,
                            responsiveness, and ownership.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    ref={gridRef}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={gridInView ? "visible" : "hidden"}
                    className="grid grid-cols-4 gap-8"
                >
                    <div className="col-span-4">
                        <div className="testimonial-left flex h-full flex-col rounded-[20px] bg-white px-5 md:flex-row">
                            {/* Left content */}
                            <div className="inner-left relative flex w-full flex-col justify-center py-[30px] md:w-[30%] md:p-[40px]">
                                <div>
                                    <h4 className="text-[26px] font-semibold leading-[1.15] md:text-[30px]">
                                        Reliable Support, in Our Clients’ Own
                                        Words
                                    </h4>

                                    <p className="mt-2 text-[16px] leading-[24px] text-[#6b6b6b] md:text-[17px]">
                                        Our clients value accurate work,
                                        dependable follow-through, timely
                                        reporting, and a team that takes
                                        ownership.
                                    </p>
                                </div>

                                <Link
                                    to="/client-reviews"
                                    className="mt-10 z-[10] flex w-fit items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold"
                                >
                                    Read Client Reviews
                                    <ArrowRight size={19} />
                                </Link>
                            </div>

                            {/* Reviews */}
                            <div className="w-full md:w-[70%]">
                                <section className="grid h-full grid-cols-1 gap-5 lg:grid-cols-2">
                                    <div className="marquee-container min-h-full">
                                        <div className="marquee-down">
                                            {marqueeCopies.map((copy) => (
                                                <div key={`left-set-${copy}`} className="marquee-review-set" aria-hidden={copy === 1 ? true : undefined}>
                                                    {leftTestimonials.map((item) => (
                                                        <Card key={`left-${copy}-${item.name}`} {...item} />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="marquee-container hidden min-h-full lg:block">
                                        <div className="marquee-up">
                                            {marqueeCopies.map((copy) => (
                                                <div key={`right-set-${copy}`} className="marquee-review-set" aria-hidden={copy === 1 ? true : undefined}>
                                                    {rightTestimonials.map((item) => (
                                                        <Card key={`right-${copy}-${item.name}`} {...item} />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
