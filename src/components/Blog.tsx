import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from "react-router-dom";
import image from '@/assets/team-banner.jpg';
import strategyImage from '@/assets/blog-img-11.jpg';
import analyticsImage from '@/assets/Blog-img-07.jpg';
import teamMeetingImage from '@/assets/Blog-img-08.jpg';
import teamMeetingImage2 from '@/assets/Blog-img-12.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
        image: teamMeetingImage2,
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

export default function Blog() {
    const [active, setActive] = useState(0)

    return (
        <section className=" rounded-t-[80px] bg-[#f6f7f4] py-[120px] -mt-[80px] relative ">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center items-start justify-between mb-20">
                    <div className="max-w-[560px]">
                        <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                            <h3 className="wdt-heading">Our Blog</h3>
                        </div>

                        <h2 className="text-[46px] font-semibold leading-[1.15]">
                            Execution With Clear Steps.
                        </h2>
                    </div>

                    <button className="mt-10 inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                        View All
                        <ArrowRight />
                    </button>
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
                                    <div className="team-img relative h-[420px] overflow-hidden shadow-[0px_20px_60px_0px_rgba(0,0,0,0.20)] rounded-[10px]">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] rounded-[10px] "
                                        />

                                        {/* Category badge (TOP RIGHT) */}
                                        <span className="absolute top-5 right-5 bg-primary-gradient text-black text-[13px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
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
                                    <div className="team-img relative min-w-[150px] w-[150px] h-[115px] rounded-lg overflow-hidden flex-shrink-0 ">
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
            </div>
        </section>
    )
}
