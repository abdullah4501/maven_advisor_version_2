import { useRef, useState } from "react"
import sectionImg from "@/assets/h1.jpg"
import sectionImg2 from "@/assets/feature_main2.jpg"
import sectionImg3 from "@/assets/interactive-Section-img-02.jpg"
import sectionImg4 from "@/assets/interactive-Section-img-03.jpg"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation"

type Item = {
    title: string
    description: string
    subtitle: string
    heading: string
    image: string
    content: string
}

type MarqueeItem =
    | { type: "text"; label: string; href?: string }
    | { type: "image"; src: string; alt?: string }

const Marquee: MarqueeItem[] = [
    { type: "text", label: "Award-Winning Performance" },
    {
        type: "image",
        src: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/05/favicon.png",
        alt: "favicon",
    },
    { type: "text", label: "Honors And Achievements" },
    {
        type: "image",
        src: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/05/favicon.png",
        alt: "favicon",
    },
    { type: "text", label: "Recognized For Excellence" },
    {
        type: "image",
        src: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/05/favicon.png",
        alt: "favicon",
    },
]

function MarqueeRow({ items }: { items: MarqueeItem[] }) {

    return (
        <div className="flex items-center gap-[48px] ">
            {items.map((item, i) =>
                item.type === "text" ? (
                    <a
                        key={i}
                        href={item.href ?? "#"}
                        className="text-[70px] md:text-[110px] font-bold text-[#d7d7d7] whitespace-nowrap transition-colors hover:text-[#79eb93]"
                    >
                        {item.label}
                    </a>
                ) : (
                    <img
                        key={i}
                        src={item.src}
                        alt={item.alt ?? ""}
                        className="h-[70px] md:h-[110px] w-[70px] md:w-[110px] object-contain"
                        loading="eager"
                    />
                )
            )}
        </div>
    )
}

const ITEMS: Item[] = [
    {
        title: "Reliability",
        description: "Ante condimentum neque at luctus nibh facilisis. Sollicitudin erat elementum.",
        subtitle: "Guidance. Trust. Results.",
        heading: "Guiding Business Growth Through Expert Strategy.",
        image: sectionImg,
        content:
            "Class aptent taciti sociosqu ad litora torquent per. Natoque penatibus parturient montes nascetur. Nulla molestie mattis scelerisque.",
    },
    {
        title: "Customer Care",
        description: "Cras eleifend turpis fames orci primis vulputate. Proin libero feugiat tristique.",
        subtitle: "Trusted Support",
        heading: "Customer Support Built Around Your Needs",
        image: sectionImg2,
        content:
            "Class aptent taciti sociosqu ad litora torquent per. Natoque penatibus parturient montes nascetur.",
    },
    {
        title: "Business Continuity",
        description: "Donec rhoncus eros lobortis nulla mattis efficitur laoreet scelerisque.",
        subtitle: "Always Prepared",
        heading: "Business Resilience Starts With Proper Planning",
        image: sectionImg3,
        content:
            "Class aptent taciti sociosqu ad litora torquent per. Natoque penatibus parturient montes nascetur.",
    },
    {
        title: "Experience",
        description: "Ut hendrerit semper vel class aptent taciti sociosqu. Inceptos orci varius.",
        subtitle: "Explore, Engage, Learn",
        heading: "Experience the Journey, Grow with Confidence",
        image: sectionImg4,
        content:
            "Class aptent taciti sociosqu ad litora torquent per. Natoque penatibus parturient montes nascetur.",
    },
]

export default function InteractiveShowcase() {
    const [active, setActive] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const item = ITEMS[active]
    const wrapperRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <section className=" md:rounded-t-[80px] bg-[#f6f7f4] py-[40px] md:py-[120px] md:-mt-[80px] relative">
                <div className="container">
                    {/* TOP AREA */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* IMAGE */}
                        <div className="w-full overflow-hidden order-1-sm">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={item.image}
                                    src={item.image}
                                    initial={{ x: -80, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="h-[350px] lg:h-[620px] w-[500] rounded-[32px] object-cover bg-center "
                                />
                            </AnimatePresence>
                        </div>


                        {/* CONTENT */}
                        <div className="max-w-[560px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={item.heading}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="max-w-[560px]"
                                >
                                    <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                                        <h3 className="wdt-heading">{item.subtitle}</h3>
                                    </div>

                                    <h2 className="text-[36px] md:text-[46px] font-semibold leading-[1.15]">
                                        {item.heading}
                                    </h2>

                                    <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b]">
                                        {item.content}
                                    </p>

                                    <button className="mt-10 inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                                        Get Started
                                        <ArrowRight />
                                    </button>
                                </motion.div>
                            </AnimatePresence>


                        </div>
                    </div>

                    {/* BOTTOM TABS */}
                    <div className="mt-[88px]">
                        <div ref={wrapperRef} className="relative">
                            <Swiper
                                loop
                                spaceBetween={56}
                                speed={600}
                                observer
                                observeParents
                                modules={[Pagination]}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1280: { slidesPerView: 4 },
                                }}
                            >
                                {ITEMS.map((tab, index) => {
                                    const isActive = index === active

                                    return (
                                        <SwiperSlide key={index}>
                                            <div
                                                key={tab.title}
                                                onClick={() => setActive(index)}
                                                className={`group cursor-pointer transition-opacity ${isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                                                    }`}
                                            >
                                                {/* ICON */}
                                                <div className="relative mb-6 pb-8 w-fit tab-line w-full border-b border-[#d0d0d0]">
                                                    <span className="icon"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={`transition-colors duration-300 ${isActive ? "fill-[#79eb93]" : "fill-[#686868] group-hover:fill-[#79eb93]"}`}><path d="M47,32.42a10.16,10.16,0,0,1,0-14.48,9.94,9.94,0,0,0,3-7.07A10.11,10.11,0,0,0,32.84,3.71a11.06,11.06,0,0,1-15.52-.19A10.11,10.11,0,0,0,0,10.5a10.12,10.12,0,0,0,17.16,7.16,11,11,0,0,1,15.51.19l.09.09a10.18,10.18,0,0,1,0,14.49,9.94,9.94,0,0,0-2.95,7.07,10.1,10.1,0,0,0,20.2,0,9.94,9.94,0,0,0-2.95-7.07Z"></path><path d="M17.65,46.14A9.93,9.93,0,0,0,16.81,32a10.16,10.16,0,0,0-14.26.84A9.93,9.93,0,0,0,3.39,47,10.17,10.17,0,0,0,17.65,46.14Z"></path></svg></i></span>
                                                </div>

                                                <h4 className="text-[24px] font-semibold">
                                                    {tab.title}
                                                </h4>

                                                <p className="mt-3 text-[16px] leading-[1.2] text-[#7a7a7a]">
                                                    {tab.description}
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                    )
                                })}
                            </Swiper>
                            <div className="mt-10 w-full block md:hidden">
                                <div className="relative h-[4px] rounded-[2px] w-full bg-[#e6e6e6] overflow-hidden">
                                    <div
                                    className="absolute left-0 top-0 h-full bg-primary-gradient transition-all duration-500 ease-out"
                                    style={{
                                        width: `${((activeIndex + 1) / ITEMS.length) * 100}%`,
                                    }}
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative overflow-hidden w-full pb-20 bg-[#f6f7f4]">
                <div className="marquee-track flex w-max">
                    <MarqueeRow items={Marquee} />
                </div>
            </div>
        </>
    )
}
