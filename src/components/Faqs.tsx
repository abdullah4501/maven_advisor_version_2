import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"


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
]

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-[#f6f7f4] w-full">
      <div className="relative w-full overflow-hidden md:rounded-t-[80px] bg-[url('https://wdtbullish.wpengine.com/wp-content/uploads/2025/05/footer_img.webp')] bg-cover bg-center lg:px-[60px] !px-0">
        <div className="absolute inset-0 rounded-[80px] bg-[#1616166e]" />
        <div className="container py-[50px] md:pt-[120px] md:pb-[170px]">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {/* HEADER */}
                <div className="mb-14">
                  <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                    <h3 className="wdt-heading text-center text-white">Our FAQs</h3>
                  </div>
                  <h2 className="text-[38px] md:text-5xl font-semibold text-white leading-[38px]">
                    Answers To <span className="text-[#79eb93]">Your</span> Questions
                  </h2>
                  <p className="mt-4 text-white">
                    Euismod quam justo lectus commodo augue arcu dignissim.
                  </p>
                </div>

                {/* FAQ ITEMS */}
                {FAQS.map((faq, index) => {
                  const isActive = active === index

                  return (
                    <div
                      key={index}
                      onClick={() => setActive(isActive ? null : index)}
                      className={`rounded-[20px] lg:p-[40px] p-[30px] mb-5 cursor-pointer transition-all duration-300 ease-in-out
                        ${isActive ? "bg-primary-gradient faq-item-active" : "bg-[#3f3f3f]"}
                      `}
                    >
                      {/* Header */}
                      <div

                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3
                          className={`lg:text-[30px] text-[16px] font-medium transition-colors duration-300 ${isActive ? "text-black" : "text-white"
                            }`}
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
                            className={`leading-relaxed lg:text-[22px] text-[15px] ${isActive ? "text-black" : "text-white/80"
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
                <div className="faq-right h-full flex flex-col items-center gap-y-[60px] rounded-[20px] px-[20px] py-[60px]">
                  <div className="text-center">
                    <span className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 22.66" className="w-[100px] w-[100px]"><path d="M3.88,19.29c.19-1.52.28-2.78.53-4a1.22,1.22,0,0,0-.68-1.51A7,7,0,0,1,0,8.23,6.47,6.47,0,0,1,2.63,2.62C6.75-.85,14-.87,18.14,2.56c3.61,3,3.61,7.57,0,10.51a11.77,11.77,0,0,1-8.4,2.5,2.93,2.93,0,0,0-2.26.78c-1.1,1-2.25,1.86-3.56,2.94Z"></path><path d="M26.11,22.66c-1.3-1.07-2.41-1.89-3.42-2.81a3.26,3.26,0,0,0-2.6-.92,11.74,11.74,0,0,1-7.84-2.21c3.3-.66,6.16-1.75,8.12-4.37a7.22,7.22,0,0,0,.33-8.71c3.65-.45,8.27,2.68,9.12,6.09.67,2.72-.53,5.46-3.35,7.27a1.63,1.63,0,0,0-.88,1.93c.22,1.13.33,2.28.52,3.73Z"></path></svg>
                    </span>
                    <h4 className=" text-[28px] mb-5 font-semibold leading-[1.15]">
                      Have Questions About Something?
                    </h4>
                    <p className="text-[20px]  font-normal">Nec metus bibendum egestas iaculis massa nisl malesuada. Semper vel class aptent taciti sociosqu ad litora.</p>
                  </div>
                  <div>
                    <button className=" relative flex items-center gap-3 rounded-[14px] bg-white px-8 py-4 text-[15px] font-semibold hover:bg-[#000] hover:text-white transition duration-300">
                      Contact Us
                      <ArrowRight />
                    </button>
                  </div>

                  <div ref={wrapperRef} className="relative w-full block lg:hidden">
                    <Swiper
                      spaceBetween={56}
                      speed={600}
                      observer
                      observeParents
                      modules={[Navigation]}
                      navigation={{
                        prevEl: ".contact-nav-prev",
                        nextEl: ".contact-nav-next",
                      }}
                      breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                    >
                      <SwiperSlide key='phone'>
                        <div className="space-y-2 flex flex-col items-center justify-center">
                          <p className="text-[20px] font-medium">Talk To Us</p>
                          <div className="flex items-center justify-center gap-3 text-base font-semibold">
                            <Phone className="w-7 h-7" />
                            <span className="text-[20px]">+000 - 123456789</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide key='email'>
                        <div className="space-y-2 flex flex-col items-center justify-center">
                          <p className="text-[20px] font-medium">Email</p>
                          <div className="flex items-center justify-center gap-3 text-base font-semibold">
                            <Mail className="w-7 h-7" />
                            <span className="text-[20px]">info@example.com</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide key='location'>
                        <div className="space-y-2 flex flex-col items-center justify-center">
                          <p className="text-[20px] font-medium">Our Location</p>
                          <div className="flex items-start justify-center gap-3 text-base font-semibold max-w-xs">
                            <MapPin className="w-7 h-7 mt-1" />
                            <span className="text-[20px]">
                              456 Finance Street, WC1A
                              <br />
                              1AA
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="contact-nav flex gap-5 justify-center mt-10">
                      <button className="contact-nav-prev flex h-10 w-10 items-center justify-center rounded-full border border-white hover:border-[#79eb93] text-[#000] bg-white !hover:bg-primary-gradient rotate-[180deg]">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <button className="contact-nav-next flex h-10 w-10 items-center justify-center rounded-full border border-white hover:border-[#79eb93] text-[#000] bg-white !hover:bg-primary-gradient">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col w-full items-center text-center space-y-8 text-black hidden lg:block">
                    {/* Talk To Us */}
                    <div className="space-y-2">
                      <p className="text-[20px] font-medium">Talk To Us</p>
                      <div className="flex items-center justify-center gap-3 text-base font-semibold">
                        <Phone className="w-7 h-7" />
                        <span className="text-[20px]">+000 - 123456789</span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <p className="text-[20px] font-medium">Email</p>
                      <div className="flex items-center justify-center gap-3 text-base font-semibold">
                        <Mail className="w-7 h-7" />
                        <span className="text-[20px]">info@example.com</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <p className="text-[20px] font-medium">Our Location</p>
                      <div className="flex items-start justify-center gap-3 text-base font-semibold max-w-xs">
                        <MapPin className="w-7 h-7 mt-1" />
                        <span className="text-[20px]">
                          456 Finance Street, WC1A
                          <br />
                          1AA
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}