import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ChevronRight, Mail } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import strategyImage from '@/assets/blog-img-11.jpg';
import analyticsImage from '@/assets/Blog-img-07.jpg';
import teamMeetingImage from '@/assets/Blog-img-08.jpg';


const topArticles = [
    {
        image: strategyImage,
        category: 'Business',
        date: 'Jan 15, 2024',
        title: 'Manage your money wisely for better financial future',
        excerpt: 'Learn essential strategies for effective money management.',
    },
    {
        image: analyticsImage,
        category: 'Finance',
        date: 'Jan 12, 2024',
        title: 'The Ultimate Financial Strategy Guide for Businesses',
        excerpt: 'Comprehensive guide to business financial planning.',
    },
    {
        image: teamMeetingImage,
        category: 'Strategy',
        date: 'Jan 10, 2024',
        title: "Don't Let Poor Investment Choices Hurt Your Future",
        excerpt: 'Tips for making smart investment decisions.',
    },
    {
        image: teamMeetingImage,
        category: 'Strategy',
        date: 'Jan 10, 2024',
        title: "Don't Let Poor Investment Choices Hurt Your Future",
        excerpt: 'Tips for making smart investment decisions.',
    },
    {
        image: teamMeetingImage,
        category: 'Strategy',
        date: 'Jan 10, 2024',
        title: "Don't Let Poor Investment Choices Hurt Your Future",
        excerpt: 'Tips for making smart investment decisions.',
    },
    {
        image: teamMeetingImage,
        category: 'Strategy',
        date: 'Jan 10, 2024',
        title: "Don't Let Poor Investment Choices Hurt Your Future",
        excerpt: 'Tips for making smart investment decisions.',
    },
];

const Blog = ({ breadcrumb }) => {
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
            <section className="py-[60px] md:py-[120px] md:pb-[180px]" id="blog">
                <div className="container">
                    <div className="flex justify-center mb-10">
                        <h3 className="wdt-heading text-center">
                            Trendings
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
                        {/* LEFT: FEATURED BLOGS */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {topArticles.slice(0, 2).map((post, index) => (
                                <motion.article
                                    key={post.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative group cursor-pointer "
                                >
                                    <Link to={'/blog/why-financial-forecasting-is-critical-for-sustainable-growth'}>
                                        {/* Image */}
                                        <div className="relative h-[420px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.20)] ">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] rounded-[6px]"
                                            />

                                            {/* Category badge (TOP RIGHT) */}
                                            <span className="absolute top-5 right-5 bg-primary-gradient text-white text-[13px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Floating content box */}
                                        <div className="-mt-[60px] mx-[25px] relative bg-white p-7 rounded-t-[12px] ">
                                            <div className="flex items-center gap-3 text-[13px] text-muted-foreground font-semibold uppercase mb-3">
                                                <span>{post.date}</span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                                <span>By Gudfin</span>
                                            </div>

                                            <h3 className="text-[22px] leading-snug font-bold text-navy">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>

                        {/* RIGHT: COMPACT BLOG LIST */}
                        <div className="flex flex-col gap-8">
                            {topArticles.slice(2, 5).map((post, index) => (
                                <motion.article
                                    key={post.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.12 }}
                                    className="  border-b border-gray-200 pb-8 last:border-b-0 last:pb-0 cursor-pointer group"
                                >
                                    <Link to={'/blog/why-financial-forecasting-is-critical-for-sustainable-growth'} className="flex items-start gap-5">
                                        {/* Thumbnail */}
                                        <div className="relative min-w-[150px] w-[150px] h-[115px] rounded-lg overflow-hidden flex-shrink-0 ">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 text-[13px] text-muted-foreground font-semibold uppercase mb-2">
                                                <span>{post.date}</span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                                <span>By Gudfin</span>
                                            </div>

                                            <h4 className="text-[17px] font-bold text-navy leading-snug">
                                                {post.title}
                                            </h4>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>

                    </div>

                    <div className="flex justify-center mb-10">
                        <h3 className="wdt-heading text-center">
                            Top Articles
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {topArticles.map((post, index) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative group cursor-pointer "
                            >
                                <Link to={'/blog/why-financial-forecasting-is-critical-for-sustainable-growth'}>
                                    {/* Image */}
                                    <div className="relative h-[420px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.20)] ">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] rounded-[6px]"
                                        />

                                        {/* Category badge (TOP RIGHT) */}
                                        <span className="absolute top-5 right-5 bg-primary-gradient text-white text-[13px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Floating content box */}
                                    <div className="-mt-[60px] mx-[25px] relative bg-white p-7 rounded-t-[12px] ">
                                        <div className="flex items-center gap-3 text-[13px] text-muted-foreground font-semibold uppercase mb-3">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                            <span>By Gudfin</span>
                                        </div>

                                        <h3 className="text-[22px] leading-snug font-bold text-navy">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
