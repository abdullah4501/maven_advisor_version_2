import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import footerBg from "../assets/footer.png";

import { useRef } from 'react';


const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

const TestimonialsSection2 = () => {
    const { ref, isVisible } = useScrollAnimation();

    const testimonials = [
        {
            rating: 5,
            quote: '"Mavens Advisor transformed how we manage our finances. Having a dedicated CFO at a fraction of the cost was game-changing."',
            author: 'Adeline Wood',
            position: 'Founder & CEO',
        },
        {
            rating: 5,
            quote: '"The fixed pricing and complete transparency gave us confidence. No surprises, just solid financial control every month."',
            author: 'Naomi Violet',
            position: 'Operations Director',
        },
        {
            rating: 5,
            quote: '"Their AI analytics platform is incredible. We now see insights that drive real business decisions and save us money on taxes."',
            author: 'Anna Briggs',
            position: 'Finance Manager',
        },
        {
            rating: 5,
            quote: '"Professional, reliable, and truly scalable. As we grew, our finance team grew seamlessly without any disruption."',
            author: 'Michael Chen',
            position: 'Founder',
        },
        {
            rating: 5,
            quote: '"The best investment for early-stage companies. Compliance, bookkeeping, and strategic advice all in one place."',
            author: 'Sarah Johnson',
            position: 'CEO',
        },
    ];

    const loopedTestimonials = [...testimonials, ...testimonials];


    return (
        <>
            <section className="section-padding px-0 bg-[#f6f7f4] py-[120px] md:pb-[150px]" >
                <div className="container relative pb-[80px]">
                    {/* Header */}
                    <motion.div className="flex items-center  mb-10 md:mb-[50px]"
                    >
                        <div className="m-auto flex flex-col items-center">
                            <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                                <h3 className="wdt-heading text-center">Testimonial</h3>
                            </div>

                            <h2 className="text-[36px] md:text-[50px] font-semibold leading-[1.15] text-center">
                                Client feedback And reviews
                            </h2>
                            <p className="mt-1 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b] text-center">
                                Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus.
                            </p>

                        </div>

                    </motion.div>

                    <div className="grid grid-cols-12 gap-6 items-stretch">
                        {/* LEFT - Customer Satisfaction Card */}
                        <motion.div
                            className="relative md:col-span-3 sm:col-span-5 col-span-12 bg-black rounded-md p-8 flex flex-col justify-between min-h-[420px]"
                            style={{backgroundImage: `url(${footerBg})`}}
                        >
                            <div className='absolute inset-0 bg-black/50 z-0'></div>
                            
                            <div className='relative'>
                                <p className="uppercase text-[13px] tracking-[widest] text-white/80 font-semibold mb-16">
                                    Customer Satisfaction
                                </p>
                            </div>
                            <div className='relative'>
                                <h2 className="text-6xl font-bold text-white mb-8">
                                    4.9<span className="text-2xl font-bold">/5</span>
                                </h2>
                                <p className="text-white text-base leading-relaxed mb-5 font-[20px]">
                                    We've delivered <span className="font-bold underline">56+ projects</span> that help
                                    companies generate real results.
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT - Testimonials Slider */}
                        <div className="md:col-span-9 sm:col-span-7 col-span-12 relative">
                            <Swiper
                                modules={[Navigation]}
                                loop
                                speed={1200}
                                watchOverflow={false}
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="h-full"
                            >

                                {loopedTestimonials.map((testimonial, index) => (
                                    <SwiperSlide key={`${testimonial.author}-${index}`} className='h-full'>
                                        <motion.div
                                            className={`min-h-[420px] justify-between relative h-full flex gap-1 ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
                                                }`}
                                        >
                                            <div className='bg-white p-6 rounded-md h-full flex flex-col '>
                                                <div className="flex items-start justify-between mb-6">
                                                    {/* Stars */}
                                                    <div className="flex gap-0.5">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < testimonial.rating
                                                                    ? 'text-[#0c7ffe] fill-[#0c7ffe]'
                                                                    : 'text-slate-300 fill-slate-300'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    {/* Quote Icon */}
                                                    <Quote className="w-8 h-8 text-slate-300 fill-slate-300" />
                                                </div>

                                                <p className="text-slate-500 text-[18px] leading-relaxed mb-6 flex-grow flex items-end italic font-semibold">
                                                    {testimonial.quote}
                                                </p>
                                            </div>
                                            {/* Author */}
                                            <div className="bg-white p-6 rounded-md">
                                                <h4 className="font-semibold text-slate-800 text-base">
                                                    {testimonial.author}
                                                </h4>
                                                <p className="text-xs text-slate-400 uppercase tracking-wider">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                    {/* Custom Navigation Arrows - Bottom Right */}
                    <div className="absolute bottom-0 right-5 flex gap-3 z-10">
                        <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-[#0c7ffe] text-slate-900 hover:text-white hover:border-gold transition-colors">
                            <ChevronLeft className="w-5 h-5 " />
                        </button>
                        <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-[#0c7ffe] text-slate-900 hover:text-white hover:border-gold transition-colors">
                            <ChevronRight className="w-5 h-5 " />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection2;
