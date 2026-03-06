import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturesTabs from '@/components/FeaturesTabs';
import ServiceSlider2 from '@/components/ServiceSlider2';
import image1 from '@/assets/service-1.jpg';
import image2 from '@/assets/service-2.jpg';
import image3 from '@/assets/service-3.jpg';
import image4 from '@/assets/service-4.jpg';
import image5 from '@/assets/service-5.jpg';
import image6 from '@/assets/service-6.jpg';
import check from "@/assets/check.svg";


const services = [
    {
        title: "Monthly Bookkeeping",
        img: image1,
        items: [
            "Clean monthly closes you can rely on",
            "Bank and credit card reconciliations",
            "Ledger maintenance and accuracy checks",
            "Month-end journal entries",
            "Accruals and prepayments management",
        ],
    },
    {
        title: "Payroll & Contractor Management",
        img: image2,
        items: [
            "Weekly/monthly payroll processing",
            "Contractor payments and 1099 management",
            "Tax withholding and compliance",
            "Benefits administration support",
            "Payroll tax filing and reporting",
        ],
    },
    {
        title: "Invoicing, Billing & Receivables",
        img: image3,
        items: [
            "Automated invoicing and billing",
            "Accounts receivable tracking",
            "Collections management",
            "Payment processing and reconciliation",
            "Customer aging reports",
        ],
    },
    {
        title: "Accounts Payable & Cash Management",
        img: image4,
        items: [
            "Vendor bill processing and approval",
            "Payment scheduling and execution",
            "Cash flow optimization",
            "Vendor relationship management",
            "Expense categorization and tracking",
        ],
    },
    {
        title: "P&L Reporting + Performance Review",
        img: image5,
        items: [
            "Monthly profit & loss statements",
            "Revenue and expense analysis",
            "Performance vs. budget comparisons",
            "CFO-level insights and explanations",
            "Actionable recommendations for improvement",
        ],
    },
    {
        title: "Budgeting + Cash Flow Forecasting",
        img: image6,
        items: [
            "12-month rolling cash flow forecasts",
            "Annual budget development",
            "Variance analysis and adjustments",
            "Scenario planning for growth",
            "Capital expenditure planning",
        ],
    },
    {
        title: "VAT + HMRC & Companies House Filing",
        img: image1,
        items: [
            "VAT returns and submissions",
            "HMRC compliance and deadlines",
            "Companies House annual filings",
            "Statutory accounts preparation",
            "Confirmation statements and updates",
        ],
    },
    {
        title: "Chart of Accounts & System Setup",
        img: image2,
        items: [
            "Optimized chart of accounts structure",
            "Accounting system implementation",
            "Departmental and project coding",
            "Integration with business tools",
            "Scalable design for growth",
        ],
    },
    {
        title: "AI-Powered Analytics & Insights",
        img: image3,
        items: [
            "Custom analytics portal for your business",
            "Real-time KPI tracking and dashboards",
            "Tax savings opportunity identification",
            "AI assistant for financial questions",
            "Predictive analytics and trend analysis",
        ],
    },
    {
        title: "CFO-Level Strategic Guidance",
        img: image4,
        items: [
            "Monthly CFO review and strategy sessions",
            "Growth planning and financial modeling",
            "Fundraising and investor readiness",
            "M&A support and due diligence",
            "Long-term financial strategy development",
        ],
    },
];

const Services = ({ breadcrumb }) => {
    const imageVariants: Variants = {
        initial: {
            filter: "blur(0px)",
        },
        hover: {
            filter: ["blur(0px)", "blur(8px)", "blur(3px)", "blur(0px)"],
            transition: {
                duration: 0.65, // slightly faster than 0.9
                ease: [0.4, 0, 0.2, 1], // proper easeInOut
                times: [0, 0.3, 0.65, 1],
            },
        },
    };
    const blurFlashVariants: Variants = {
        initial: { opacity: 0 },
        hover: {
            opacity: [0, 0.75, 0],
            transition: {
                duration: 0.65,
                ease: [0.4, 0, 0.2, 1],
                times: [0, 0.5, 1],
            },
        },
    };

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
            <FeaturesTabs />
            <ServiceSlider2 />
            <section className='bg-[#f6f7f4] py-[120px]'>
                <div className='container '>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 gap-y-16'>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card-new relative bg-white rounded-[20px] flex flex-col h-full w-full group"
                                initial="initial"
                                whileHover="hover"
                            >
                                {/* Image wrapper */}
                                <div className="mb-8 relative overflow-hidden rounded-t-[20px]">
                                    <motion.img
                                        src={service.img}
                                        alt={service.title}
                                        className="rounded-t-[20px] w-full"
                                        variants={imageVariants}
                                    />


                                    {/* Strong blur + sharpness flash */}
                                    <motion.div
                                        className="absolute inset-0 backdrop-blur-[10px]"
                                        variants={blurFlashVariants}
                                    />
                                </div>

                                <div className="md:px-[50px] md:pt-[25px] md:pb-[50px] p-[25px]">
                                    {/* Title */}
                                    <h3 className="text-[24px] service-title font-bold text-navy mb-6">
                                        <Link to="" className="transition">
                                            {service.title}
                                        </Link>
                                    </h3>

                                    {/* List */}
                                    <ul className="space-y-4 mb-10">
                                        {service.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-3 text-[18px] font-medium text-gray-600"
                                            >
                                                <span className="text-green-500">
                                                    <img src={check} alt="" />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <div className="mt-auto flex">
                                        <button className=" inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                                            Get Quotation
                                            <ArrowRight />
                                        </button>
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

export default Services;
