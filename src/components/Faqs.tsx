import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useInView, motion } from "framer-motion";
import bgImg from "@/assets/footer.png"

const FAQS = [
  {
    question: "What services do you offer?",
    answer: "Euismod quam justo lectus commodo augue arcu dignissim. Senectus netus suscipit auctor curabitur facilisi cubilia curae.",
    active: true
  },
  {
    question: "How long does a typical project take?",
    answer: "Vel maxime voluptatem aut molestias quia sit praesentium. Et tempore ipsam non voluptatum molestiae et beatae incidunt."
  },
  {
    question: "What are your pricing models?",
    answer: "Senectus netus suscipit auctor curabitur facilisi cubilia curae. Euismod quam justo lectus commodo augue arcu dignissim."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Et tempore ipsam non voluptatum molestiae et beatae incidunt. Vel maxime voluptatem aut molestias quia sit praesentium.",

  },
  {
    question: "What is the purpose of a financial audit?",
    answer: "Et tempore ipsam non voluptatum molestiae et beatae incidunt. Vel maxime voluptatem aut molestias quia sit praesentium.",

  },
  {
    question: "What services do you offer?",
    answer: "Euismod quam justo lectus commodo augue arcu dignissim. Senectus netus suscipit auctor curabitur facilisi cubilia curae.",
    active: true
  },
  {
    question: "How long does a typical project take?",
    answer: "Vel maxime voluptatem aut molestias quia sit praesentium. Et tempore ipsam non voluptatum molestiae et beatae incidunt."
  },
  {
    question: "What are your pricing models?",
    answer: "Senectus netus suscipit auctor curabitur facilisi cubilia curae. Euismod quam justo lectus commodo augue arcu dignissim."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Et tempore ipsam non voluptatum molestiae et beatae incidunt. Vel maxime voluptatem aut molestias quia sit praesentium.",

  },
  {
    question: "What is the purpose of a financial audit?",
    answer: "Et tempore ipsam non voluptatum molestiae et beatae incidunt. Vel maxime voluptatem aut molestias quia sit praesentium.",

  },
]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0)
  const [activeFaq2, setActiveFaq2] = useState<number | null>(0)
  const [activeStyling, setActiveStyling] = useState<number | null>(0)
  const [activeStyling2, setActiveStyling2] = useState<number | null>(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -80px 0px" })

  useEffect(() => {
    if (active === null) {
      setActiveStyling(null)
      return
    }
    const timer = setTimeout(() => {
      setActiveStyling(active)
    }, 150)

    return () => clearTimeout(timer)
  }, [active])

  return (
    <section className="bg-[#f6f7f4] w-full">
      <div className="relative w-full overflow-hidden md:rounded-t-[60px] bg- bg-cover bg-center lg:px-[60px] !px-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 rounded-[80px] bg-[#161616ba]" />

        <div className="container py-[50px] md:pt-[150px] md:pb-[210px]">
          <motion.div className="relative"
            ref={sectionRef}
            variants={fadeUpVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}>
            {/* HEADER */}
            <div className="mb-14 flex flex-col items-center w-[50%] m-auto text-center">
              <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                <h3 className="wdt-heading text-center text-white">Query Section</h3>
              </div>
              <h2 className="text-[38px] md:text-5xl font-semibold text-white leading-[38px]">
                Commonly Asked <span className="text-[#0C7FFE]">Questions</span>
              </h2>
              <p className="mt-4 text-white">
                Mattis scelerisque maximus eget fermentum odio phasellus non. Tempus leo eu aenean vulputate ornare sed diam urna tempor.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-1">

                {/* FAQ ITEMS */}
                {FAQS.slice(0,4).map((faq, index) => {
                  const isActive = active === index

                  return (
                    <div
                      key={index}
                      onClick={() => setActive(isActive ? null : index)}
                      className={`rounded-[20px] lg:p-[40px] p-[30px] mb-5 last:mb-0 cursor-pointer transition-all duration-300 ease-in-out
                          ${isActive ? "faq-item" : "bg-[#3f3f3f]"}
                          ${activeStyling === index ? "faq-item-active" : ""}
                      `}
                    >
                      {/* Header */}
                      <div

                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3
                          className={`lg:text-[23px] text-[16px] font-medium transition-colors duration-300 text-white`}
                        >
                          {faq.question}
                        </h3>

                        <span
                          className={`faq-arrow transition-transform duration-300 ${isActive ? "rotate-180" : ""
                            }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15.62 10.97"
                            className={`w-4 h-4 transition-colors duration-300 ${isActive ? "fill-black" : "fill-white"
                              }`}
                          >
                            <path d="M6.77,10.47a1.32,1.32,0,0,0,2.07,0l6.5-8.35A1.31,1.31,0,0,0,14.3,0h-13a1.31,1.31,0,0,0-1,2.12Z" />
                          </svg>
                        </span>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`leading-relaxed text-[16px] text-white
                              }`}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="col-span-1">

                {/* FAQ ITEMS */}
                {FAQS.slice(5,9).map((faq, index) => {
                  const isActiveFaq2 = activeFaq2 === index

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveFaq2(isActiveFaq2 ? null : index)}
                      className={`rounded-[20px] lg:p-[40px] p-[30px] mb-5 last:mb-0 cursor-pointer transition-all duration-300 ease-in-out
                          ${isActiveFaq2 ? "faq-item" : "bg-[#3f3f3f]"}
                          ${activeStyling2 === index ? "faq-item-active" : ""}
                      `}
                    >
                      {/* Header */}
                      <div

                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3
                          className={`lg:text-[23px] text-[16px] font-medium transition-colors duration-300 text-white`}
                        >
                          {faq.question}
                        </h3>

                        <span
                          className={`faq-arrow transition-transform duration-300 ${isActiveFaq2 ? "rotate-180" : ""
                            }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15.62 10.97"
                            className={`w-4 h-4 transition-colors duration-300 ${isActiveFaq2 ? "fill-black" : "fill-white"
                              }`}
                          >
                            <path d="M6.77,10.47a1.32,1.32,0,0,0,2.07,0l6.5-8.35A1.31,1.31,0,0,0,14.3,0h-13a1.31,1.31,0,0,0-1,2.12Z" />
                          </svg>
                        </span>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isActiveFaq2 ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`leading-relaxed text-[16px] text-white
                              }`}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="w-full flex justify-center mt-[20px]">
              <button className="mt-10 inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                View All FAQ's
                <ArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}