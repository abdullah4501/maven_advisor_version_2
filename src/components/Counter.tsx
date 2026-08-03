import { useRef, useState } from "react";

import { ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { motion, useInView } from "framer-motion"
import footerImg from "@/assets/footer.png"



const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}


export default function Counter() {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const countersRef = useRef<HTMLDivElement>(null)

    const countersInView = useInView(countersRef, { once: true, margin: "0px 0px -80px 0px" })


    return (
        <section className="">
            <div className="container">
                <motion.div
                    ref={countersRef}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={countersInView ? "visible" : "hidden"}
                    className="counters md:p-[40px] p-[20px] bg-[#161616ba] relative rounded-[20px] "
                    style={{ backgroundImage: `url(${footerImg})` }}
                >
                    <div ref={wrapperRef} className="relative">
                        <Swiper
                            spaceBetween={56}
                            speed={600}
                            observer
                            observeParents
                            modules={[Navigation, Autoplay]}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}

                            navigation={{
                                prevEl: ".counters-nav-prev",
                                nextEl: ".counters-nav-next",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                        >
                            <SwiperSlide key='coverage'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[36px] md:text-[3rem] lg:text-[3.4em] font-medium text-white ">UK &amp; US</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Business Coverage</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='pricing'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[36px] md:text-[3rem] lg:text-[3.4em] font-medium text-white ">Fixed Monthly</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Virtual CFO Pricing</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='oversight'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[36px] md:text-[3rem] lg:text-[3.4em] font-medium text-white ">Tax-Efficient</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Financial Management</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='service'>
                                <div className=" w-full flex flex-col items-center relative ">
                                    <h4 className="text-[36px] md:text-[3rem] lg:text-[3.4em] font-medium text-white ">CFO-Level</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Oversight</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
