import { useRef, useState } from "react";

import { ArrowRight, Star } from "lucide-react";
import apple from "@/assets/apple.svg";
import google from "@/assets/google.svg";
import youtube from "@/assets/youtube.svg";
import filler from "@/assets/h1-filler-client-img.png";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const testimonials = [
    {
        text: "Fermentum odio phasellus non purus est efficitur laoreet. Blandit quis suspendisse.",
        name: "Nicole Saskia",
        role: "Founder",
        image: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-testimonial-img1.jpg",
    },
    {
        text: "Fermentum odio phasellus non purus est efficitur laoreet. Blandit quis suspendisse.",
        name: "Angela Ursel",
        role: "Managing Director",
        image: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-testimonial-img2.jpg",
    },
    {
        text: "Fermentum odio phasellus non purus est efficitur laoreet. Blandit quis suspendisse.",
        name: "Mario Pascal",
        role: "Project Manager",
        image: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-testimonial-img3.jpg",
    },
    {
        text: "Fermentum odio phasellus non purus est efficitur laoreet. Blandit quis suspendisse.",
        name: "Mario Pascal",
        role: "Project Manager",
        image: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-testimonial-img3.jpg",
    },
    {
        text: "Fermentum odio phasellus non purus est efficitur laoreet. Blandit quis suspendisse.",
        name: "Mario Pascal",
        role: "Project Manager",
        image: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-testimonial-img3.jpg",
    },
]

const items = [...testimonials, ...testimonials];


function Card({
    text,
    name,
    role,
    image,
}: {
    text: string
    name: string
    role: string
    image: string
}) {
    return (
        <div className="bg-[#f6f7f7] rounded-2xl p-[30px] shadow-sm border border-[#d0d0d066]">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="w-[30px] h-[30px]"><g>	<path d="M75.3,86.8c12.3,0,22.2-10,22.2-22.3s-9.9-22.3-22.2-22.3c-2.6,0-5,0.4-7.3,1.2L57.3,13.2h-4.2v51.3  C53.1,76.8,63.1,86.8,75.3,86.8z"></path>	<path d="M24.7,86.8c12.3,0,22.2-10,22.2-22.3s-9.9-22.3-22.2-22.3c-2.6,0-5,0.4-7.3,1.2L6.7,13.2H2.5v51.3  C2.5,76.8,12.4,86.8,24.7,86.8z"></path></g></svg>
            </span>

            <p className="text-gray-600 my-[20px] text-[18px]">{text}</p>

            <div className="flex items-center gap-4">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-medium text-[18px]">{name}</p>
                    <p className="text-[16px] font-semibold text-gray-400">{role}</p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonial() {
    const [active, setActive] = useState(0)
    const wrapperRef = useRef<HTMLDivElement>(null)

    return (
        <section className="bg-[#f6f7f4] py-[40px] md:py-[120px] md:-mt-[80px] relative">
            <div className="container">
                {/* Header */}
                <div className="flex items-center  mb-10 md:mb-20">
                    <div className="m-auto flex flex-col items-center">
                        <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                            <h3 className="wdt-heading text-center">Testimonial</h3>
                        </div>

                        <h2 className="text-[36px] md:text-[46px] font-semibold leading-[1.15] text-center">
                            Advanced Tools And Features.
                        </h2>
                        <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b] text-center">
                            Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus.
                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-4 gap-10">
                    <div className="col-span-4 lg:col-span-3">
                        <div className="bg-white testimonial-left flex flex-col md:flex-row rounded-[20px] h-full px-5">
                            <div className="w-full md:w-[44%] flex flex-col justify-center md:p-[40px] py-[30px] inner-left relative">
                                <div className="">
                                    <h4 className="text-[26px] md:text-[30px] font-semibold leading-[1.15]">
                                        Trusted by over 1300 loyal clients
                                    </h4>
                                    <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b]">
                                        Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes nascetur ridiculus mus donec.
                                    </p>
                                </div>
                                <div>
                                    <button className="mt-10  flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                                        Contact Us
                                        <ArrowRight />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-[56%]">
                                <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
                                    {/* LEFT */}
                                    <div className="marquee-container min-h-full">
                                        <div className=" marquee-down flex flex-col gap-[24px]">
                                            {items.map((item, i) => (
                                                <Card key={`left-${i}`} {...item} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* RIGHT (desktop only) */}
                                    <div className="marquee-container min-h-full hidden lg:block">
                                        <div className=" marquee-up flex flex-col gap-[24px]">
                                            {items.map((item, i) => (
                                                <Card key={`right-${i}`} {...item} />
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[30px] justify-start">
                        <div className="w-full bg-white testimonial-right-up items-center flex flex-col rounded-[20px] p-[50px]">
                            <h2 className="md:text-[70px] text-[50px] font-bold leading-[1.15] text-center mb-6">
                                4.80
                            </h2>
                            <span className="flex gap-0 mb-5">
                                <Star fill="#ffc527" stroke="0" size={20} />
                                <Star fill="#ffc527" stroke="0" size={20} />
                                <Star fill="#ffc527" stroke="0" size={20} />
                                <Star fill="#ffc527" stroke="0" size={20} />
                                <Star fill="#ffc527" stroke="0" size={20} />
                            </span>
                            <p className="mb-2 text-[18px] leading-[1.7] text-[#6b6b6b]">
                                2,568 Reviews and counting
                            </p>
                            <div className="flex gap-10 justify-center">
                                <img src={apple} alt="" className="w-[35px] h-[35px]" />
                                <img src={google} alt="" className="w-[35px] h-[35px]" />
                                <img src={youtube} alt="" className="w-[35px] h-[35px]" />
                            </div>
                        </div>
                        <div className="w-full testimonial-right-down flex flex-col gap-y-[100px] rounded-[20px] md:p-[50px] p-[30px]">
                            <div className="max-w-[70%]">
                                <h4 className="md:text-[30px] text-[24px] font-semibold leading-[1.15]">
                                    Group Cooperation
                                </h4>
                            </div>
                            <div className="flex justify-end">
                                <img src={filler} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counters md:p-[60px] p-[20px] bg-[#161616] relative rounded-[20px] mt-[40px] bg-cover " style={{ backgroundImage: 'url(../src/assets/footer_img.webp)' }}>
                    <div ref={wrapperRef} className="relative">
                        <Swiper
                            spaceBetween={56}
                            speed={600}
                            observer
                            observeParents
                            modules={[Navigation]}
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
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[5em] font-medium text-white ">27+</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[22px]">Depth Of Experience</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='clients'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[5em] font-medium text-white ">150+</h4>
                                    <p className="text-white font-medium text-[18px]tmd:ext-[22px]">Happy Clients</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='growth'>
                                <div className=" w-full flex flex-col md:border-r border-[#fff3] items-center relative ">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[5em] font-medium text-white ">$600</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[22px]">Profit Growth</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='success'>
                                <div className=" w-full flex flex-col items-center relative md:border-r border-[#fff3]">
                                    <h4 className="text-[40px] md:text-[4rem] lg:text-[5em] font-medium text-white ">97%</h4>
                                    <p className="text-white font-medium text-[18px] md:text-[22px]">Customer Success Rate</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="counters-nav flex gap-5 justify-center mt-10">
                            <button className="counters-nav-prev flex h-10 w-10 items-center justify-center rounded-full border border-white hover:border-[#79eb93] text-[#000] bg-white !hover:bg-primary-gradient rotate-[180deg]">
                                <ArrowRight className="h-5 w-5"/>
                            </button>
                            <button className="counters-nav-next flex h-10 w-10 items-center justify-center rounded-full border border-white hover:border-[#79eb93] text-[#000] bg-white !hover:bg-primary-gradient">
                                <ArrowRight className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
