import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"

const testimonials = [
    {
        text: "We have been working with the Mavens Advisor team for almost two years, and they have been a huge asset to our e-commerce brands. They are reliable, detail-oriented and consistently deliver everything on time without needing to be micromanaged. One of the things we appreciate most is how autonomously they work. They take full ownership of the bookkeeping process and make sure everything is accurate and up to date. It has been a massive weight off our shoulders knowing the financial side of the business is in good hands. We highly recommend them to anyone looking for a dependable and professional accounting team.",
        name: "Fabian Petrina",
        role: "Rapid Physique, LLC",
    },
    {
        text: "We have been working with the Mavens Advisor team since February, and their services have made a noticeable difference in how we track and understand our company’s financial health. Their consistent daily and weekly updates have been invaluable, especially for our profit and loss statements and balance sheet reports. Having such clear and timely insights has been a great benefit to our business, and we truly appreciate their professionalism and attention to detail.",
        name: "Jason Lopes",
        role: "Exact Exteriors LLC",
    },
    {
        text: "The Mavens Advisor team has been instrumental in structuring our company’s bookkeeping systems. Their reports are always delivered on time, meticulously accurate and easy to work with. They are professional, highly conscientious and consistently go the extra mile. They have become far more than accountants. They are a valued working partner we trust. We are very pleased to have their ongoing support.",
        name: "Matthew B",
        role: "Gibraltar",
    },
    {
        text: "The Mavens Advisor team has supported us for over three years, and their service has been excellent. They manage payroll, taxes, contracts, audits and client follow-ups with professionalism and reliability. Their availability during US business hours makes communication easy and efficient. We are 100% satisfied and highly recommend them.",
        name: "Marwa",
        role: "Mojo Solutions and Services MSS LLC",
    },
    {
        text: "Partnering with Mavens Advisor has been a game-changer for our business. Their consistent support, quick responsiveness and deep financial knowledge have been instrumental in helping us stay on top of our books and maintain excellent financial health. We highly recommend their services.",
        name: "Seth Cooper",
        role: "Closets by Design",
    },
]

const midpoint = Math.ceil(testimonials.length / 2)
const leftTestimonials = testimonials.slice(0, midpoint)
const rightTestimonials = testimonials.slice(midpoint)
const leftItems = [...leftTestimonials, ...leftTestimonials]
const rightItems = [...rightTestimonials, ...rightTestimonials]

function Card({ text, name, role }: { text: string; name: string; role: string }) {
    return (
        <div className="bg-[#f6f7f7] rounded-2xl p-[20px] shadow-sm border border-[#d0d0d066]">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-[30px] h-[30px]">
                    <g>
                        <path d="M75.3,86.8c12.3,0,22.2-10,22.2-22.3s-9.9-22.3-22.2-22.3c-2.6,0-5,0.4-7.3,1.2L57.3,13.2h-4.2v51.3C53.1,76.8,63.1,86.8,75.3,86.8z" />
                        <path d="M24.7,86.8c12.3,0,22.2-10,22.2-22.3s-9.9-22.3-22.2-22.3c-2.6,0-5,0.4-7.3,1.2L6.7,13.2H2.5v51.3C2.5,76.8,12.4,86.8,24.7,86.8z" />
                    </g>
                </svg>
            </span>
            <p className="text-gray-600 my-[20px] text-[16px] leading-[1.55]">{text}</p>
            <div>
                <p className="font-medium text-[18px]">{name}</p>
                <p className="text-[14px] font-semibold text-gray-400">{role}</p>
            </div>
        </div>
    )
}

const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonial() {
    const gridRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -80px 0px" })

    return (
        <section className="bg-[#f6f7f4] py-[40px] pt-0 md:py-[100px] !pb-[85px] md:-mt-[80px] relative">
            <div className="container">
                <motion.div
                    className="flex items-center mb-10 md:mb-[50px]"
                    ref={headerRef}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={gridInView ? "visible" : "hidden"}
                >
                    <div className="m-auto flex flex-col items-center">
                        <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                            <h3 className="wdt-heading text-center">Client Proof</h3>
                        </div>
                        <h2 className="text-[36px] md:text-[50px] font-semibold leading-[1.15] text-center">
                            Hear What Our Clients Say.
                        </h2>
                        <p className="mt-1 max-w-[800px] text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b] text-center">
                            Read how businesses describe Mavens Advisor’s bookkeeping, reporting, tax support, responsiveness, and ownership.
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
                        <div className="bg-white testimonial-left flex flex-col md:flex-row rounded-[20px] h-full px-5">
                            <div className="w-full md:w-[30%] flex flex-col justify-center md:p-[40px] py-[30px] inner-left relative">
                                <div>
                                    <h4 className="text-[26px] md:text-[30px] font-semibold leading-[1.15]">
                                        Reliable Support, in Our Clients’ Own Words
                                    </h4>
                                    <p className="mt-2 text-[16px] md:text-[17px] leading-[24px] text-[#6b6b6b]">
                                        Our clients value accurate work, dependable follow-through, timely reporting, and a team that takes ownership.
                                    </p>
                                </div>
                                <Link to="/client-reviews" className="mt-10 flex w-fit items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                                    Read Client Reviews
                                    <ArrowRight />
                                </Link>
                            </div>

                            <div className="w-full md:w-[70%]">
                                <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
                                    <div className="marquee-container min-h-full">
                                        <div className="marquee-down flex flex-col gap-[24px]">
                                            {leftItems.map((item, i) => <Card key={`left-${i}`} {...item} />)}
                                        </div>
                                    </div>
                                    <div className="marquee-container min-h-full hidden lg:block">
                                        <div className="marquee-up flex flex-col gap-[24px]">
                                            {rightItems.map((item, i) => <Card key={`right-${i}`} {...item} />)}
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
