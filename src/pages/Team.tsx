import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ChevronRight, Mail } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import team1 from '@/assets/team-img1.jpg';
import team2 from '@/assets/team-img2.jpg';
import team3 from '@/assets/team-img3.jpg';
import team4 from '@/assets/team-img4.jpg';
import team5 from '@/assets/team-5.jpg';
import team6 from '@/assets/team-6.jpg';

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
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team4,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team5,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team6,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
];

const Team = ({ breadcrumb }) => {
    return (
        <>
            <Header />

            <section className="relative min-h-[550px] overflow-hidden flex flex-col justify-end items-center">
                {/* Background Images with Fade */}
                <div
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                >
                    <img
                        src={image}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Container */}
                <div className='container pt-[150px] pb-[120px] flex items-end'>
                    <div className='grid grid-cols-12 relative items-center'>
                        <div className="relative col-span-12 lg:col-span-7">
                            <div className="">
                                {/* Main Heading with fade animation */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                        animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                                        exit={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                        transition={{ duration: 1, ease: [0.5, 0.5, 0, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="mb-5 flex text-white text-[16px] items-center leading-[30px] font-[500]"
                                        >
                                            <span>
                                                <Link to={'/'}>Home</Link>
                                            </span>
                                            <span>
                                                <ChevronRight size={20} className='mx-1' />
                                            </span>
                                            <span>
                                                {breadcrumb}
                                            </span>
                                        </div>
                                        <h1 className="text-[45px] md:text-[55px] lg:text-[70px] font-bold text-white leading-tight lg:mb-12 mb-6">
                                            {breadcrumb}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='lg:mt-[30px] lg:ml-[125px] mb-[25px]'>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="text-white text-[16px] lg:text-[18px] lg:leading-[30px] font-[500] z-10 self-end"
                                >
                                    Mavens Advisor is a Virtual CFO firm delivering complete finance departments with CFO-level leadership, AI-powered analytics, and evergreen support for every stage of growth.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="md:rounded-t-[60px] bg-[#f6f7f4] py-[80px] md:py-[120px] md:pb-[180px] relative">
                <div className="container">
                    {/* Header */}
                    <div className="flex items-center mb-5 mb:mb-20">
                        <div className="m-auto flex flex-col items-center">
                            <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                                <h3 className="wdt-heading text-center">Our Teams</h3>
                            </div>

                            <h2 className="text-[36px] md:text-[50px] font-semibold leading-[1.15] text-center">
                                Expert Guidance Team
                            </h2>
                            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b]">
                                Sem placerat in id cursus mi pretium tellus. Sed diam urna tempor pulvinar vivamus.
                            </p>

                        </div>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {teamMembers.map((member, index) => (
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
                                    <div className="sm:aspect-[3/4] w-full">
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
                                    <h6 className="text-muted-foreground text-[18px] font-medium mb-4">
                                        AREAS OF EXPERTISE
                                    </h6>
                                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                                        {member.expertise.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-[20px] py-[5px] rounded-full text-[18px] text-muted-foreground bg-white inline-block transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Team;
