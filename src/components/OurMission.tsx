import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface CounterItem {
    to: number
    suffix: string
    label: string
}

const COUNTERS: CounterItem[] = [
    { to: 16, suffix: "+", label: "Broad Career Experience" },
    { to: 22, suffix: "k+", label: "High-Earning Growth" },
    { to: 15, suffix: "k", label: "Happy Clients World Wide" },
    { to: 96, suffix: "%", label: "Customer Retention Rate" },
]

function useCounter(to: number, duration: number, started: boolean) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!started) return
        let startTime: number | null = null
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * to))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [started, to, duration])

    return count
}
function CounterCard({ item, index, started }: { item: CounterItem; index: number; started: boolean }) {
    const count = useCounter(item.to, 1000, started)

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.42, 0, 0.58, 1] }}
            className="wdt-column"
        >
            <div className="wdt-counter-item">
                {/* Rotating gradient border (::before) + white bg (::after) handled in CSS */}
                <div className="wdt-counter-number-wrap">
                    <span className="wdt-counter-number">{count}</span>
                    <span className="wdt-counter-suffix">{item.suffix}</span>
                </div>
                <h5 className="wdt-counter-label">{item.label}</h5>
            </div>
        </motion.div>
    )
}


const OurMission = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, margin: "0px 0px -80px 0px" })

    return (
        <section className='md:rounded-t-[60px] bg-[#f6f7f4] py-[60px] md:py-[120px] lg:pt-[150px] md:-mt-[80px] relative'>
            <div className='container'>
                <div className="flex items-center  mb-10 md:mb-[50px]"
                >
                    <div className="m-auto flex flex-col items-center">
                        <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                            <h3 className="wdt-heading text-center">Our Mission</h3>
                        </div>

                        <h2 className="text-[36px] md:text-[50px] font-semibold leading-[1.15] text-center">
                            Smart Solutions To Help Businesses.
                        </h2>
                    </div>

                </div>
                <div ref={sectionRef} className="wdt-counter-section py-10">
                    <div className="wdt-column-wrapper">
                        {COUNTERS.map((item, i) => (
                            <CounterCard key={i} item={item} index={i} started={inView} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
