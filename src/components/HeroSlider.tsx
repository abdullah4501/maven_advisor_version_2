import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
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
      "Nisl malesuada etiam dignissim diam quis enim. Euismod in pellentesque massa placerat duis ut venenatis.",
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
  return (
    <section className="relative z-0 cursor-grab">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        loop
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative min-h-[75vh] flex items-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              {/* Overlay + Union graphic */}
              <div className="absolute inset-0 bg-black/30">
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
                  <div className="py-[190px] ">
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

                    <p className="text-white font-normal mb-8 text-[18px]">
                      {slide.description}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center mt-3 gap-3 bg-primary-gradient text-black text-[18px] px-8 py-4 rounded-[12px] font-semibold transition hover:scale-105"
                    >
                      {slide.cta}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27.7 18"
                        className="w-5 h-5"
                      >
                        <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
                      </svg>
                    </a>
                    <div className="relative hidden lg:block">
                      <div className="absolute -top-[300px] -left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,#CEFF9C63_0%,transparent_70%)]" />
                    </div>
                  </div>

                  {/* Right side glow */}
                  <div className="relative hidden lg:block">

                    <div className="absolute bottom-[10%] -right-[40%] w-[550px] h-[550px] bg-[radial-gradient(circle,#ABE47157_0%,transparent_70%)]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HeroSlider;
