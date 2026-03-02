import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";

type Slide = {
  subtitle: string;
  title: string;
  highlight: string;
  extra: string;
  description: string;
  cta: string;
  bg: string;
};



const slides: Slide[] = [
  {
    subtitle: "Business Consultant",
    title: "Trusted",
    highlight: "Finance",
    extra: "Consulting Patner",
    description:
      " Nisl malesuada etiam dignissim diam quis enim.Euismod in pellentesque massa placerat duis ut venenatis. Odio pellentesque diam volutpat commodo sed egestas. Massa sapien faucibus et molestie ac feugiat sed lectus.",
    cta: "Free Consultation",
    bg: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/07/home-01-slider-img-01.jpg",
  },
  {
    subtitle: "Financial Strategist",
    title: "Executive",
    highlight: "Leader",
    extra: "Consulting Patner",
    description:
      "Dictum risus blandit quis suspendisse aliquet enim. Euismod in pellentesque massa placerat duis ut venenatis.",
    cta: "Schedule a Call",
    bg: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-hero-banner-img.jpg",
  },
  {
    subtitle: "Expert Advisor",
    title: "Business",
    highlight: "Growth",
    extra: "Consulting Patner",
    description:
      "Primis vulputate ornare sagittis vehicula praesent dui felis. Accumsan maecenas potenti ultricies habitant.",
    cta: "Get Started Now",
    bg: "https://wdtbullish.wpengine.com/wp-content/uploads/2025/07/home-01-slider-img-02.jpg",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      swiperRef.current.autoplay?.start(); // keep autoplay alive
    }
  };

  return (
    <section className="relative z-0 cursor-grab">
      <Swiper
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        effect="fade"
        loop
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative min-h-[80vh] flex items-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              {/* Overlay + Union graphic */}
              <div className="absolute inset-0 bg-black/50">
                <div
                  className="absolute inset-0 bg-no-repeat bg-left opacity-[0.1] animate-bg-drift"
                  style={{
                    backgroundImage:
                      "url(https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Union.png)",
                    backgroundSize: "contain",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 container ">
                <div className="hero-grid grid-cols-1 lg:grid-cols-2">
                  <div className="md:py-[265px] py-[50px]">
                    <span className="block text-[18px] tracking-widest text-[#fff] mb-4 wdt-heading">
                      {slide.subtitle}
                    </span>

                    <h1 className="text-white text-[40px] lg:text-[70px] font-bold leading-tight mb-3">
                      {slide.title}{" "}
                      <span className="text-primary-gradient">
                        {slide.highlight}
                      </span> <br />
                      <span>{slide.extra}</span>
                    </h1>

                    <p className="text-white font-normal mb-8 text-[16px] md:text-[18px]">
                      {slide.description}
                    </p>

                    <a
                      href="#"
                      className="relative z-[2] inline-flex items-center mt-3 gap-3 bg-primary-gradient text-black text-[16px] p-[clamp(1.125rem,1.0971rem+0.1274vw,1.25rem)_clamp(1.5rem,1.2771rem+1.0191vw,2.5rem)] rounded-[10px] font-medium transition "
                    >
                      {slide.cta}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27.7 18"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
                      </svg>
                    </a>
                    <div className="relative">
                      <div className="absolute -top-[300px] -left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,#75b1f359_0%,transparent_70%)]" />
                    </div>
                  </div>

                  {/* Right side glow */}
                  <div className="relative grad-right-top">
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[150px] left-4    lg:left-24 z-20 flex items-center">
        {slides.map((_, i) => (
          <div key={i} className="flex items-center">
            <button
              onClick={() => handlePaginationClick(i)}
              className={`text-sm font-medium transition-all duration-300 ${activeIndex === i ? 'text-white' : 'text-white/50'
                }`}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
            {i < slides.length - 1 && (
              <div className="mx-3 w-10 h-[1px] bg-white/30 relative">
                {activeIndex === i && (
                  <motion.i
                    className="absolute top-0 left-0 h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    key={`progress-${activeIndex}`}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
