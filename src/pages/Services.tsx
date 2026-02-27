import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import image from '@/assets/footer.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturesTabs from '@/components/FeaturesTabs';
import ServicesSlider from '@/components/ServicesSlider';
import Faqs from '@/components/Faqs';
import Testimonial from '@/components/Testimonial';
import Counter from '@/components/Counter';
import ServiceSlider2 from '@/components/ServiceSlider2';
import TrustedPartners from '@/components/TrustedPartners';
import FAQSection2 from '@/components/Faqs2';
import TestimonialsSection2 from '@/components/TestimonialSection2';
import MissionAndGoals from '@/components/MissionAndGoals';
import OurMission from '@/components/OurMission';
import WorkProcess from '@/components/WorkProcess';
import TeamSection from '@/components/TeamSection';

const Services = ({ breadcrumb }) => {
    return (
        <>
            <Header />
            <section className="relative min-h-[490px] overflow-hidden flex flex-col justify-center items-center">
                {/* Background Images with Fade */}
                <div
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                >
                    <img
                        src={image}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Content Container */}
                <div className='container pt-[70px] pb-[30px] flex items-center justify-center'>
                    <div className="relative ">
                        <div className="">
                            {/* Main Heading with fade animation */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                    animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                                    exit={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                    transition={{ duration: 1, ease: [0.5, 0.5, 0, 1] }}
                                    className="overflow-hidden flex flex-col items-center"
                                >
                                    <h1 className="text-[45px] md:text-[55px] lg:text-[60px] font-semibold text-white leading-tight ">
                                        {breadcrumb}
                                    </h1>
                                    <div className="mb-5 flex text-white text-[16px] items-center leading-[30px] font-[500]">
                                        <span>
                                            <Link to={'/'}>Home</Link>
                                        </span>
                                        <span className='mx-2'>
                                            /
                                        </span>
                                        <span>
                                            {breadcrumb}
                                        </span>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>


            </section>
            <FeaturesTabs/>
            <ServiceSlider2 />
            <TeamSection />
            <WorkProcess />
            <Footer />
        </>
    );
};

export default Services;
