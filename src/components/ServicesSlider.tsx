import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"

import serviceImg1 from "@/assets/service1.jpg"
import serviceImg2 from "@/assets/service2.jpg"
import serviceImg3 from "@/assets/service3.jpg"
import serviceImg4 from "@/assets/service4.jpg"
import serviceImg5 from "@/assets/service5.jpg"
import serviceImg6 from "@/assets/service6.jpg"

import "swiper/css"
import "swiper/css/navigation"

const SERVICES = [
  { title: ["Decision", "Streamlining"], desc: "Senectus netus suscipit auctor curabitur facilisi cubilia curae.", img: serviceImg1 },
  { title: ["Boosted", "Efficiency"], desc: "Vel maxime voluptatem aut molestias quia sit praesentium.", img: serviceImg2 },
  { title: ["Recruitment", "Support"], desc: "Et tempore ipsam non voluptatum molestiae et beatae incidunt.", img: serviceImg3 },
  { title: ["Recruitment", "Support"], desc: "Et tempore ipsam non voluptatum molestiae et beatae incidunt.", img: serviceImg4 },
  { title: ["Recruitment", "Support"], desc: "Et tempore ipsam non voluptatum molestiae et beatae incidunt.", img: serviceImg5 },
  { title: ["Recruitment", "Support"], desc: "Et tempore ipsam non voluptatum molestiae et beatae incidunt.", img: serviceImg6 },
]

export default function ServicesType3() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const cards = wrapperRef.current.querySelectorAll<HTMLElement>(
      ".wdt-service-item.wdt-type-3"
    )

    cards.forEach((card) => {
      const desc = card.querySelector<HTMLElement>(".wdt-service-description")
      if (!desc) return

      const h = desc.offsetHeight
      card.style.setProperty("--type3-desc-height", `${h}px`)
    })
  }, [])


  return (
    <section className="relative w-full overflow-hidden rounded-t-[80px] bg-[url('https://wdtbullish.wpengine.com/wp-content/uploads/2025/05/footer_img.webp')] bg-cover bg-center px-20">
      <div className="absolute inset-0 rounded-[38px] bg-[#1616166e]" />
      <div className="container pt-[120px] pb-[170px]">
        <div className="relative">

          {/* HEADER */}
          <div className="mb-14 text-center">
            <h3 className="mb-3 flex items-center justify-center gap-3 text-sm text-white wdt-heading">
              Consulting Services
            </h3>
            <h2 className="text-5xl font-semibold text-white">
              Trusted <span className="text-[#79eb93]">Guidance</span> Built For You
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Euismod quam justo lectus commodo augue arcu dignissim.
            </p>
          </div>

          <div ref={wrapperRef} className="relative">

          <Swiper
            modules={[Navigation]}
            centeredSlides
            loop
            spaceBetween={30}
            speed={600}
            observer
            observeParents
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >

              {SERVICES.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="wdt-service-item wdt-type-3">

                    {/* MEDIA */}
                    <div className="wdt-service-media-group">
                      <div className="wdt-service-image">
                        <img src={s.img} alt={s.title.join(" ")} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="wdt-service-detail-group">
                      <div className="wdt-service-content-group flex items-center justify-between mb-[26px]">
                        <h5 className="text-white text-[30px] font-semibold leading-[35px]">
                          {s.title[0]}<br />{s.title[1]}
                        </h5>
                        <div className="wdt-service-type-icon svg-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" className="w-[50px] h-[50px]">
                            <g>
                              <g>
                                <path d="M86.7,56.2c-1.9,7-5.6,13.1-10.8,17.9c0.1,1.1,0.2,2.2,0.2,3.4c0,1.5-0.1,2.9-0.4,4.3c8.4-6.1,14.5-15.1,16.9-25.6H86.7z M29.1,7.8c1.5,1.3,2.7,3,3.5,4.8C37.8,9.9,43.7,8.3,50,8.3s12.2,1.5,17.4,4.2c0.8-1.8,2-3.5,3.5-4.8C64.7,4.4,57.6,2.5,50,2.5 S35.3,4.4,29.1,7.8z M24,74.1c-5.1-4.8-8.9-11-10.7-17.9h-6c2.4,10.4,8.5,19.5,16.9,25.6c-0.2-1.4-0.4-2.8-0.4-4.3 C23.8,76.3,23.9,75.2,24,74.1z" />
                                <path d="M50,57.5c-11.1,0-20,9-20,20c0,11.1,9,20,20,20c11.1,0,20-9,20-20C70,66.4,61.1,57.5,50,57.5z M47.6,74 c0.8,0.7,2,1.1,3.2,1.6l0.1,0c0.8,0.3,1.6,0.6,2.5,1c1.5,0.7,2.7,2,3.2,3.6c0.6,1.7,0.4,3.7-0.5,5.3c-0.8,1.6-2.4,2.7-4.4,3.1v2 c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8v-2.1c-2.6-0.6-5.3-2.6-5.3-5.7c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8 c0,1.2,1.8,2.3,3.4,2.3c1.5,0,2.6-0.5,3.1-1.4c0.4-0.7,0.5-1.6,0.2-2.4c-0.2-0.7-0.7-1.1-1.3-1.4c-0.7-0.3-1.3-0.5-1.9-0.8 l-0.3-0.1c-1.5-0.6-3.1-1.1-4.4-2.3c-2.1-1.7-2.8-4.8-1.6-7.2c0.8-1.8,2.4-3,4.5-3.4v-2c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8 v2.1c2.6,0.6,5.3,2.6,5.3,5.7c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1.3-1.8-2.3-3.4-2.3s-2.7,0.5-3.2,1.5 C46.5,72.1,46.8,73.3,47.6,74L47.6,74z" />
                                <path d="M35.2,38.7v10.2c0,0.6-0.5,1.1-1.1,1.1H3.6c-0.6,0-1.1-0.5-1.1-1.1V38.7c0-4,2.9-7.3,6.7-7.9h0.3c2.6,2,5.8,3.2,9.3,3.2 c3.5,0,6.8-1.2,9.3-3.2h0.3C32.3,31.4,35.2,34.7,35.2,38.7z" />
                                <path d="M18.9,27.8c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9c-4.9,0-8.9,4-8.9,8.9C9.9,23.8,13.9,27.8,18.9,27.8z" />
                                <path d="M97.5,38.7v10.2c0,0.6-0.5,1.1-1.1,1.1H65.9c-0.6,0-1.1-0.5-1.1-1.1V38.7c0-4,2.9-7.3,6.7-7.9h0.3c2.6,2,5.8,3.2,9.3,3.2 c3.5,0,6.8-1.2,9.3-3.2h0.3C94.6,31.4,97.5,34.7,97.5,38.7L97.5,38.7z" />
                                <path d="M81.1,27.8c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9c-4.9,0-8.9,4-8.9,8.9C72.2,23.8,76.2,27.8,81.1,27.8z" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>

                      <div className="wdt-service-description">
                        {s.desc}
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="services-prev flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-white hover:border-[#79eb93] hover:text-[#79eb93]">
              <ArrowLeft />
            </button>
            <button className="services-next flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-white hover:border-[#79eb93] hover:text-[#79eb93]">
              <ArrowRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}