import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ChevronRight, Mail } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/Faqs';

const FAQ = ({ breadcrumb }) => {
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
            <div className='my-20 mb-40'>
                <FAQSection />
            </div>
            <Footer />
        </>
    );
};

export default FAQ;
