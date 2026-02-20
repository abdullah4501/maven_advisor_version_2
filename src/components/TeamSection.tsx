import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import team1 from '@/assets/team-img1.jpg';
import team2 from '@/assets/team-img2.jpg';
import team3 from '@/assets/team-img3.jpg';
import team4 from '@/assets/team-img4.jpg';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"



const teamMembers = [
    {
        name: "Rosemary Turk",
        role: "Founder & CEO",
        img: team1,
        expertise: ["Audit Defense", "Corporate Tax", "Strategic Planning"],
        email: "rosemary@limpa.com",
    },
    {
        name: "Richard McMille",
        role: "Chief Financial Officer",
        img: team2,
        expertise: ["Cost Optimization", "Financial Modeling", "Risk Management"],
        email: "richard@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team3,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team4,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
];

const TeamSection = ({ }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    return (
        <section className="md:rounded-t-[80px] bg-[#f6f7f4] py-[40px] md:py-[120px] md:-mt-[80px] relative">
            <div className="container">
                {/* Header */}
                <div className="flex items-center mb-5 mb:mb-20">
                    <div className="m-auto flex flex-col items-center">
                        <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                            <h3 className="wdt-heading text-center">Our Teams</h3>
                        </div>

                        <h2 className="text-[36px] md:text-[46px] font-semibold leading-[1.15] text-center">
                            Expert Guidance Team
                        </h2>
                        <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b]">
                            Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus.
                        </p>

                    </div>

                </div>
                <div ref={wrapperRef} className="relative">
                    <Swiper
                        spaceBetween={56}
                        speed={600}
                        observer
                        observeParents
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".team-nav-prev",
                            nextEl: ".team-nav-next",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col"
                                >
                                    {/* Image Card */}
                                    <div className="team-img relative rounded-[20px] overflow-hidden group cursor-pointer">
                                        {/* Team Member Image */}
                                        <div className="aspect-[4/4] lg:aspect-[3/4] w-full">
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/30 to-transparent" />

                                        {/* Bottom Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                                            {/* Name & Role */}
                                            <div>
                                                <h3 className="text-white text-[20px] font-bold mb-1">
                                                    {member.name}
                                                </h3>
                                                <p className="text-white/80 text-[18px]">
                                                    {member.role}
                                                </p>
                                            </div>

                                            {/* Email Button */}
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gold transition-colors shrink-0 group/mail"
                                            >
                                                <Mail size={24} className="text-navy group-hover/mail:text-white " />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Areas of Expertise */}
                                    <div className="mt-8">
                                        <h6 className="text-muted-foreground text-[18px] font-medium mb-3">
                                            AREAS OF EXPERTISE
                                        </h6>
                                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                                            {member.expertise.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-[15px] py-[4px] rounded-full text-[15px] text-muted-foreground bg-white inline-block transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="team-nav flex gap-5 justify-center mt-10">
                        <button className="team-nav-prev flex h-10 w-10 items-center justify-center rounded-full border border-white hover:border-[#79eb93] text-[#000] bg-white !hover:bg-primary-gradient rotate-[180deg]">
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="team-nav-next flex h-10 w-10 items-center justify-center rounded-full border border-white hover:border-[#79eb93] text-[#000] bg-white !hover:bg-primary-gradient">
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
