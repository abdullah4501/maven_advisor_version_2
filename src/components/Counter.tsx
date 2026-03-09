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
                            <SwiperSlide key='experience'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[4.5em] font-medium text-white ">27+</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Depth Of Experience</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='clients'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[4.5em] font-medium text-white ">150+</h4>
                                    <p className="text-white font-medium text-[18px]tmd:ext-[02px]">Happy Clients</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='growth'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[4.5em] font-medium text-white ">$600</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Profit Growth</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='success'>
                                <div className=" w-full flex flex-col items-center relative ">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[4.5em] font-medium text-white ">97%</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[20px]">Customer Success Rate</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
