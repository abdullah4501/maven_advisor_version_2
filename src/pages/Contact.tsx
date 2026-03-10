import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Phone, Mail, ArrowRight } from "lucide-react";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

interface LocationData {
    country: string;
    flag: string;
    address: string;
    phone: string;
    email: string;
    mapSrc: string;
}
const locations: LocationData[] = [
    {
        country: "America",
        flag: "🗺️",
        address: "1234 Elm Street, Springfield, IL 62704, USA",
        phone: "+1 212 555 1234",
        email: "usa@example.com",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.99!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTknMjQuMCJX!5e0!3m2!1sen!2sus!4v1",
    },
    {
        country: "United Kingdom",
        flag: "🇬🇧",
        address: "56 Baker Street, London W1U 7EU, UK",
        phone: "+000 123 456789",
        email: "joe@example.com",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4!2d-0.1566!3d51.5207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad100000000%3A0x0!2zNTHCsDMxJzE0LjUiTiAwwrAwOScyMy44Ilc!5e0!3m2!1sen!2suk!4v1",
    },
    {
        country: "Australia",
        flag: "🇦🇺",
        address: "200 George St, Sydney NSW 2000, Australia",
        phone: "+61 2 9000 1234",
        email: "au@example.com",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.207!3d-33.867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzAxLjIiUyAxNTHCsDEyJzI1LjIiRQ!5e0!3m2!1sen!2sau!4v1",
    },
    {
        country: "Germany",
        flag: "🇩🇪",
        address: "Friedrichstraße 43, 10117 Berlin, Germany",
        phone: "+49 30 1234 5678",
        email: "de@example.com",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.9!2d13.388!3d52.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzAxLjIiTiAxM8KwMjMnMTYuOCJF!5e0!3m2!1sen!2sde!4v1",
    },
    {
        country: "India",
        flag: "🇮🇳",
        address: "Connaught Place, New Delhi 110001, India",
        phone: "+91 11 2345 6789",
        email: "in@example.com",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7!2d77.217!3d28.632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzU1LjIiTiA3N8KwMTMnMDEuMiJF!5e0!3m2!1sen!2sin!4v1",
    },
];

const Contact = ({ breadcrumb }) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -80px 0px" })
    const [activeIndex, setActiveIndex] = useState(1);
    const active = locations[activeIndex];
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
            <ContactSection />
            <section className="md:rounded-t-[60px] bg-[#fff] py-[60px] md:py-[120px] md:pb-[180px] md:-mt-[80px] relative">
                <div className='container'>
                    <motion.div
                        ref={sectionRef}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        className="relative w-full md:rounded-t-[60px] bg-cover bg-center"
                    >
                        {/* Header */}
                        <div className="flex flex-col gap-10 md:sticky md:top-[40px] mb-[50px]">
                            <div className="items-center flex flex-col">
                                <div className="mb-4 flex gap-4 text-[16px] font-bold tracking-wide">
                                    <h3 className="wdt-heading text-center">Our Branches</h3>
                                </div>

                                <h2 className="md:text-[50px] text-[36px] font-semibold leading-[1.15] ">
                                    Worldwide Office Locations
                                </h2>
                            </div>
                        </div>
                        <div className=" flex flex-col lg:flex-row gap-[40px]">
                            {/* Country Tabs */}
                            <div className="flex flex-col gap-[20px] w-full lg:w-[350px] shrink-0 pr-0 lg:pr-6">
                                {locations.map((loc, i) => (
                                    <button
                                        key={loc.country}
                                        onClick={() => setActiveIndex(i)}
                                        className={`flex items-center gap-4 px-[20px] py-[18px] rounded-[20px] text-left text-[20px] font-semibold transition-all duration-200 ${i === activeIndex
                                            ? "bg-primary-gradient shadow-md"
                                            : "bg-[#f6f7f4] text-black"
                                            }`}
                                    >
                                        <span>{loc.country}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Map + Info Card */}
                            <div className="relative flex-1 min-h-[460px] rounded-2xl overflow-hidden mt-6 lg:mt-0">
                                <iframe
                                    src={active.mapSrc}
                                    className="absolute inset-0 w-full h-full border-0 filter grayscale"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${active.country}`}
                                />

                                {/* Glassmorphism overlay card */}
                                <div className="absolute top-[20%] left-8 z-10 bg-black/30 backdrop-blur-md rounded-2xl p-[40px] max-w-[380px] text-[hsl(0,0%,100%)]">
                                    <h3 className="text-[22px] font-semibold leading-tight mb-6">
                                        {active.address}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-3">
                                        <Phone className="w-5 h-5" />
                                        <span className="text-base font-medium">{active.phone}</span>
                                    </div>

                                    <div className="flex items-center gap-3 mb-8">
                                        <Mail className="w-5 h-5" />
                                        <span className="text-base font-medium">{active.email}</span>
                                    </div>

                                    <a
                                        href={`https://www.google.com/maps/search/${encodeURIComponent(active.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-primary-gradient"
                                    >
                                        Get Direction <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
