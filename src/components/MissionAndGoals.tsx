import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import tabImg1 from "@/assets/h2-filler-tab-img1.jpg"
import tabImg2 from "@/assets/h2-filler-tab-img2.jpg"
import tabImg3 from "@/assets/Filler-With-tab-img-01.jpg"
import tabImg4 from "@/assets/Filler-With-tab-img-02.jpg"
import centeredCircle from "@/assets/Bullish-rotate-img-02.png"
import rotateImg1 from "@/assets/Bullish-rotate-img-01.png"


const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-5 h-5 shrink-0 mt-[3px] fill-[#000]">
        <path d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm8.06,7a.79.79,0,0,1-.2.52A55.39,55.39,0,0,0,13.19,23a1.24,1.24,0,0,1-2.25.11,35.8,35.8,0,0,0-4.25-6.49,1.78,1.78,0,0,1,2.66-2.36,32.86,32.86,0,0,1,2.82,3.45,0,0,0,0,0,0,0A46.22,46.22,0,0,1,21.8,6.44.76.76,0,0,1,23.06,7Z" />
    </svg>
)

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.7 18" className="w-5 h-[13px] fill-white transition-transform duration-300 group-hover:translate-x-1">
        <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
    </svg>
)

const TABS = [
    { label: "Inspection" },
    { label: "Approach" },
    { label: "Performance" },
]

const TAB_CONTENT = [
    {
        text: "Proin libero feugiat tristique accumsan maecenas potenti ultricies. Consequat magna ante condimentum neque at luctus nibh. Ut hendrerit semper vel class aptent taciti sociosqu. Suscipit auctor curabitur.",
        list1: ["Efficient Resource Allocation", "Improved Productivity", "Auto reporting system"],
        list2: ["Maintain ethics & compliance", "Give Profit-oriented advice", "Ensure timely updates"],
    },
    {
        text: "Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes nascetur ridiculus mus donec. Ut hendrerit semper vel class aptent taciti sociosqu. Suscipit auctor curabitur.",
        list1: ["Efficient Resource Allocation", "Improved Productivity", "Auto reporting system"],
        list2: ["Maintain ethics & compliance", "Give Profit-oriented advice", "Ensure timely updates"],
    },
    {
        text: "Ut hendrerit semper vel class aptent taciti sociosqu. Suscipit auctor curabitur. Ad litora torquent per conubia nostra inceptos himenaeos. Dis parturient montes nascetur ridiculus mus donec.",
        list1: ["Efficient Resource Allocation", "Improved Productivity", "Auto reporting system"],
        list2: ["Maintain ethics & compliance", "Give Profit-oriented advice", "Ensure timely updates"],
    },
]

function RotateImage() {
    const rotateRef = useRef<HTMLDivElement>(null)

    return (
        // Exact match to WordPress DOM structure
        <div className="wdt-rotate-image-container">
            {/* Outer rotating image */}
            <div className="wdt-rotate-image" ref={rotateRef}>
                <img
                    decoding="async"
                    src={rotateImg1}
                    title="Bullish-rotate-img-01"
                    alt="Bullish-rotate-img-01"
                    loading="lazy"
                    width={180}
                    height={180}
                />
            </div>
            {/* Center static image */}
            <div className="wdt-rotate-second-image">
                <img
                    decoding="async"
                    src={centeredCircle}
                    title="Bullish-rotate-img-02"
                    alt="Bullish-rotate-img-02"
                    loading="lazy"
                    width={180}
                    height={180}
                />
            </div>
        </div>
    )
}

export default function MissionAndGoals() {
    const [activeTab, setActiveTab] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: "0px 0px -80px 0px" })
    const content = TAB_CONTENT[activeTab]

    return (
        <>

            <section className="md:rounded-t-[60px] bg-[#f6f7f4] py-[60px] md:py-[120px] lg:pt-[150px] md:-mt-[80px] relative" ref={sectionRef}>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-[60px] items-center">

                        {/* ── LEFT: 2×2 Image Grid ── */}
                        <motion.div
                            className="w-full relative"
                            initial={{ opacity: 0, x: -60 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
                        >
                            <div className="grid grid-cols-2 grid-rows-2 gap-[30px]">
                                <div className="img-cell-1 flex items-end">
                                    <img src={tabImg1} alt="" className="w-full h-auto object-cover rounded-[20px]" />
                                </div>
                                <div className="flex items-end">
                                    <img src={tabImg2} alt="" className="w-full h-auto object-cover rounded-[20px]" />
                                </div>
                                <div>
                                    <img src={tabImg3} alt="" className="w-full h-auto object-cover rounded-[20px]" />
                                </div>
                                <div className="img-cell-4">
                                    <img src={tabImg4} alt="" className="w-full h-auto object-cover rounded-[20px]" />
                                </div>
                            </div>

                            <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block w-[150px] h-[150px]">
                                <RotateImage />
                            </div>
                        </motion.div>

                        {/* ── RIGHT: Heading + Tabs ── */}
                        <motion.div
                            className="w-full overflow-hidden"
                            initial={{ opacity: 0, x: 60 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
                        >
                            <div className="max-w-[560px]">
                                <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                                    <h3 className="wdt-heading">Mission & Goals</h3>
                                </div>
                                <h2 className="text-[36px] md:text-[46px] font-semibold leading-[1.15]">
                                    Achieving success through clear Company goals.
                                </h2>
                            </div>

                            {/* Tabs */}
                            <div className="w-full mt-10">

                                {/* Tab List */}
                                <ul
                                    className="wdt-tabs-list flex flex-wrap items-center gap-3 m-0 p-0 list-none border-b-2 border-[#e1e1e1] relative z-10 gap-y-5"
                                    role="tablist"
                                >
                                    {TABS.map((tab, i) => (
                                        <li
                                            key={i}
                                            role="tab"
                                            aria-selected={activeTab === i}
                                            className={`relative cursor-pointer ${activeTab === i ? "wdt-tab-active" : ""}`}
                                            onClick={() => setActiveTab(i)}
                                        >
                                            <button className="px-[20px] pb-[24px] text-[20px] wdt-tab-btn inline-flex items-center justify-center text-[#000] font-normal leading-none bg-transparent border-none outline-none cursor-pointer">
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tab Content */}
                                <div className="pt-[30px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            role="tabpanel"
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            {/* Description */}
                                            <p className="text-[#161616]/70 text-base leading-[1.7] mb-[30px]">
                                                {content.text}
                                            </p>

                                            {/* Two-column list */}
                                            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2 pb-[60px] flex-wrap">
                                                <ul className="list-none m-0 p-0 flex-1 min-w-[180px] space-y-[7.5px]">
                                                    {content.list1.map((item, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-[#161616] text-base leading-[1.7]">
                                                            <CheckIcon />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="list-none m-0 p-0 flex-1 min-w-[180px] space-y-[7.5px]">
                                                    {content.list2.map((item, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-[#161616] text-base leading-[1.7]">
                                                            <CheckIcon />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button className="inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                                                Get Started
                                                <ArrowRight />
                                            </button>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}