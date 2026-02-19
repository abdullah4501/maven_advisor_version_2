import { useState } from "react";
import featuresMain from "@/assets/features_main.jpg";
import feature1 from "@/assets/features_main.jpg";
import feature2 from "@/assets/feature_main2.jpg";
import feature3 from "@/assets/interactive-Section-img-02.jpg";
import feature4 from "@/assets/interactive-Section-img-03.jpg";
import feature5 from "@/assets/interactive-Section-img-04.jpg";
import { ArrowRight } from "lucide-react";

const FEATURES = [
  {
    id: 0,
    title: "Business Strategists",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        className="w-[30px] h-[30px] fill-current"
      >
        <path d="M24.45,0a2.29,2.29,0,0,0-2.28,2.28,2.4,2.4,0,0,0,.12.71L18,6.83a2.27,2.27,0,0,0-2.29.25L11.93,4.91a1.6,1.6,0,0,0,0-.23,2.29,2.29,0,0,0-4.57,0,2.38,2.38,0,0,0,.15.81L3.12,9.86a2.32,2.32,0,0,0-.84-.16A2.29,2.29,0,1,0,4.57,12a2.25,2.25,0,0,0-.16-.81L8.84,6.8A2.32,2.32,0,0,0,9.67,7,2.24,2.24,0,0,0,11,6.51L14.8,8.68c0,.07,0,.15,0,.23a2.29,2.29,0,1,0,4.45-.7l4.29-3.85a2.22,2.22,0,0,0,.93.21,2.29,2.29,0,1,0,0-4.57Z" />
        <path d="M8,11h3.27a.65.65,0,0,1,.65.65V29.11H7.39V11.65A.65.65,0,0,1,8,11Z" />
        <path d="M.65,17H3.92a.65.65,0,0,1,.65.65V29.11H0V17.62A.65.65,0,0,1,.65,17Z" />
        <path d="M17.78,17.78A7.11,7.11,0,0,0,19.35,29v.14H14.78V14.87a.65.65,0,0,1,.65-.65H18.7a.65.65,0,0,1,.65.65v1.71a7,7,0,0,0-1.57,1.2Z" />
        <path d="M26.74,9.82v7.09a7,7,0,0,0-4-1.21,6.08,6.08,0,0,0-.61,0V9.82a.65.65,0,0,1,.65-.65h3.27a.66.66,0,0,1,.65.65Z" />
        <path d="M29.73,28.43,27,25.68a5.11,5.11,0,0,0-7.82-6.52A5.11,5.11,0,0,0,25.68,27l2.75,2.75a.92.92,0,0,0,1.3,0A.92.92,0,0,0,29.73,28.43Z" />
      </svg>
    ),
    image: feature1,
    heading: "Strategic planning Led by Experts",
    description: "Lacinia integer nunc posuere ut hendrerit semper vel.",
    points: [
      "Montes nascetur ridiculus mus",
      "Fermentum odio phasellus non",
      "Imperdiet mollis nullam volutpat",
    ],
  },
  {
    id: 1,
    title: "Flexible Plans",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-current"><path d="M15,6.75A8.25,8.25,0,1,0,23.25,15,8.25,8.25,0,0,0,15,6.75Zm-.94,6.79a4.59,4.59,0,0,0,1.35.65c.33.12.67.24,1,.41a2.62,2.62,0,0,1,1.37,1.53,2.85,2.85,0,0,1-.19,2.23,2.63,2.63,0,0,1-1.8,1.32v.78a.83.83,0,0,1-1.65,0v-.8A2.62,2.62,0,0,1,12,17.27a.83.83,0,0,1,1.65,0c0,.43.64.85,1.3.85a1.11,1.11,0,0,0,1.28-1.47.89.89,0,0,0-.49-.55c-.31-.14-.62-.25-.92-.36A5.64,5.64,0,0,1,13,14.8a2.57,2.57,0,0,1-.68-3,2.61,2.61,0,0,1,1.86-1.44V9.54a.83.83,0,0,1,1.65,0v.8A2.63,2.63,0,0,1,18,12.73a.83.83,0,1,1-1.65,0c0-.43-.65-.85-1.31-.85-.94,0-1.15.44-1.22.59a.92.92,0,0,0,.25,1.07Z"></path><path d="M27.58,24.76l-1.51.35A15.06,15.06,0,0,0,30,15a14.91,14.91,0,0,0-.72-4.61.92.92,0,1,0-1.76.56A13,13,0,0,1,28.16,15a13.16,13.16,0,0,1-3.71,9.15l.63-2.06a.92.92,0,0,0-1.76-.54l-1.53,5a.91.91,0,0,0,.88,1.19.65.65,0,0,0,.2,0L28,26.56a.91.91,0,0,0,.69-1.11.92.92,0,0,0-1.1-.69Z"></path><path d="M26.84,8.25A.92.92,0,0,0,27.47,8a.94.94,0,0,0,.27-.88L26.56,2a.92.92,0,0,0-1.8.41l.35,1.51a15,15,0,0,0-15-3.12A.9.9,0,0,0,9.57,2a.92.92,0,0,0,1.17.58,13.14,13.14,0,0,1,13.4,3l-2.05-.63a.93.93,0,0,0-.54,1.77l5,1.53a.75.75,0,0,0,.26,0Z"></path><path d="M2.48,19.05A13.15,13.15,0,0,1,1.84,15,13,13,0,0,1,5.31,6.1L4.71,8a.92.92,0,0,0,.88,1.19.91.91,0,0,0,.88-.65L8,3.56A.93.93,0,0,0,6.92,2.39L1.8,3.57a.92.92,0,1,0,.42,1.79L3.82,5A14.9,14.9,0,0,0,0,15a14.74,14.74,0,0,0,.73,4.62.91.91,0,0,0,.87.64,1,1,0,0,0,.29-.05.91.91,0,0,0,.59-1.16Z"></path><path d="M19.05,27.52a12.85,12.85,0,0,1-4.05.64,13.09,13.09,0,0,1-9.11-3.67l2,.61a.92.92,0,0,0,.54-1.76l-5-1.54a1,1,0,0,0-.9.21.91.91,0,0,0-.26.88L3.42,28a.9.9,0,0,0,.89.71.75.75,0,0,0,.21,0,.91.91,0,0,0,.69-1.1L4.85,26a15,15,0,0,0,14.77,3.24.93.93,0,0,0-.57-1.76Z"></path></svg>
    ),
    image: feature2,
    heading: "Plans built Around your Goals",
    description: "Torquent per conubia nostra inceptos himenaeos.",
    points: [
      "Fermentum odio phasellus non purus",
      "Imperdiet mollis nullam volutpat",
      "Ornare sagittis vehicula praesent",
    ],
  },
  {
    id: 2,
    title: "Smart Data Insights",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-current"><path d="M1.92,4.28a.22.22,0,0,1,.2-.11H3.21V.44A.44.44,0,0,1,3.65,0H5.84a.44.44,0,0,1,.44.44V4.17H7.37a.2.2,0,0,1,.19.11.24.24,0,0,1,0,.23L4.93,8.72a.22.22,0,0,1-.37,0L1.93,4.51a.24.24,0,0,1,0-.23Z"></path><path d="M12.18,4.28a.21.21,0,0,1,.19-.11h1.1V.44A.44.44,0,0,1,13.91,0H16.1a.44.44,0,0,1,.43.44V4.17h1.1a.22.22,0,0,1,.18.34L15.19,8.72a.22.22,0,0,1-.38,0L12.19,4.51a.24.24,0,0,1,0-.23Z"></path><path d="M22.44,4.28a.21.21,0,0,1,.19-.11h1.1V.44A.44.44,0,0,1,24.16,0h2.19a.44.44,0,0,1,.44.44V4.17h1.1a.2.2,0,0,1,.18.11.24.24,0,0,1,0,.23L25.44,8.72a.22.22,0,0,1-.37,0L22.44,4.51a.24.24,0,0,1,0-.23Z"></path><path d="M22.15,10.78H7.84a1.53,1.53,0,0,0-1.52,1.53V26.2H8.15V16.78a8.71,8.71,0,0,0,4.16-4.16h5.37a8.75,8.75,0,0,0,4.16,4.16V26.2h1.84V12.31a1.54,1.54,0,0,0-1.53-1.53Z"></path><path d="M20,25.78a2.88,2.88,0,0,1,0,.42H10c0-.13,0-.28,0-.42a5,5,0,1,1,10,0Z"></path><path d="M16,17.73a1.46,1.46,0,1,0-2.07,0A1.47,1.47,0,0,0,16,17.73Z"></path><path d="M29.08,30H.92A.92.92,0,0,1,0,29.08v-7a.92.92,0,0,1,1.84,0v6.1H28.16v-6.1a.92.92,0,1,1,1.84,0v7a.92.92,0,0,1-.92.92Z"></path></svg>
    ),
    image: feature3,
    heading: "Data insights That drive Real Results",
    description: "Fermentum odio phasellus non purus est efficitur laoreet. Blandit quis suspendisse tortor ligula aliquet.",
    points: [
      "Fermentum odio phasellus non purus",
      "Imperdiet mollis nullam volutpat",
      "Ornare sagittis vehicula praesent",
    ],
  },
  {
    id: 3,
    title: "Focused On Growth",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-current"><path d="M16.72,0H13.28a2,2,0,0,0-2,2V5.4a2,2,0,0,0,2,2H14v6.83a8.26,8.26,0,0,1,1-.06c.28,0,.56,0,.84,0V7.36h.88a2,2,0,0,0,2-2V2A2,2,0,0,0,16.72,0Z"></path><path d="M5.4,7.36H2a2,2,0,0,0-2,2v3.44a2,2,0,0,0,2,2h.8v8a1.57,1.57,0,0,0,1.57,1.57H6.18a8.42,8.42,0,0,1-.09-1.24,5.91,5.91,0,0,1,0-.6H4.6V14.72h.8a2,2,0,0,0,2-2V9.32a2,2,0,0,0-2-2Z"></path><path d="M28,7.36H24.6a2,2,0,0,0-2,2v3.44a2,2,0,0,0,2,2h.8v7.73H23.89c0,.2,0,.4,0,.6a8.66,8.66,0,0,1-.09,1.25h1.85a1.57,1.57,0,0,0,1.57-1.58v-8H28a2,2,0,0,0,2-2V9.32a2,2,0,0,0-2-2Z"></path><path d="M15,16.09a7,7,0,1,0,7,7A7,7,0,0,0,15,16.09Zm-.76,5.79a3.4,3.4,0,0,0,1.08.52c.27.1.55.21.84.34A2.07,2.07,0,0,1,17.25,24a2.3,2.3,0,0,1-.15,1.78,2.1,2.1,0,0,1-1.45,1.06v.63a.65.65,0,1,1-1.3,0v-.65a2.1,2.1,0,0,1-1.74-1.91.66.66,0,0,1,.66-.65.65.65,0,0,1,.65.65c0,.36.52.7,1.06.7a1,1,0,0,0,1-.44.94.94,0,0,0,.07-.75.75.75,0,0,0-.41-.45c-.24-.11-.49-.2-.73-.29a4.66,4.66,0,0,1-1.47-.75,2,2,0,0,1-.54-2.42,2.07,2.07,0,0,1,1.49-1.16v-.62a.66.66,0,1,1,1.31,0v.64a2.11,2.11,0,0,1,1.73,1.91.66.66,0,0,1-.66.65.65.65,0,0,1-.65-.65c0-.36-.52-.69-1.06-.69-.76,0-.93.36-1,.47a.74.74,0,0,0,.2.87Z"></path></svg>
    ),
    image: feature4,
    heading: "Your growth, Our strategic Priority",
    description: "Turpis fames primis vulputate ornare sagittis vehicula praesent. Feugiat tristique accumsan maecenas.",
    points: [
      "Fermentum odio phasellus non purus",
      "Imperdiet mollis nullam volutpat",
      "Ornare sagittis vehicula praesent",
    ],
  },
  {
    id: 4,
    title: "Finance Advisory",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-current"><path d="M15,6a9,9,0,1,0,9.05,9A9,9,0,0,0,15,6ZM14,13.4a4.75,4.75,0,0,0,1.48.71c.36.13.73.27,1.14.46a2.78,2.78,0,0,1,1.5,1.67,3.13,3.13,0,0,1-.21,2.45,2.94,2.94,0,0,1-2,1.45V21a.91.91,0,1,1-1.81,0v-.87a2.87,2.87,0,0,1-2.37-2.62.91.91,0,1,1,1.81,0c0,.47.7.93,1.43.93a1.22,1.22,0,0,0,1.4-1.61,1,1,0,0,0-.54-.6c-.34-.15-.68-.28-1-.4a6.34,6.34,0,0,1-2-1,2.83,2.83,0,0,1-.75-3.33,2.86,2.86,0,0,1,2-1.58V9a.91.91,0,0,1,1.81,0v.87a2.89,2.89,0,0,1,2.37,2.63.91.91,0,0,1-1.81,0c0-.48-.72-.94-1.44-.94-1,0-1.26.49-1.34.65A1,1,0,0,0,14,13.4Z"></path><path d="M30,27.32a2.69,2.69,0,0,1-5.37,0,2.79,2.79,0,0,1,.25-1.13L22.1,23.4a11.4,11.4,0,0,0,1.3-1.3l2.79,2.78a2.78,2.78,0,0,1,1.12-.25A2.68,2.68,0,0,1,30,27.32Z"></path><path d="M30,2.69a2.69,2.69,0,0,1-2.69,2.69,2.6,2.6,0,0,1-1.12-.26L23.4,7.91A10.72,10.72,0,0,0,22.1,6.6l2.78-2.78a2.87,2.87,0,0,1-.25-1.13,2.69,2.69,0,1,1,5.37,0Z"></path><path d="M7.9,6.6A10.56,10.56,0,0,0,6.61,7.9L3.82,5.12a2.71,2.71,0,0,1-1.13.26A2.69,2.69,0,1,1,5.37,2.69a2.7,2.7,0,0,1-.25,1.13L7.9,6.61Z"></path><path d="M5.12,26.19a2.64,2.64,0,0,1,.25,1.13,2.69,2.69,0,1,1-2.68-2.69,2.87,2.87,0,0,1,1.13.25L6.61,22.1A10.56,10.56,0,0,0,7.9,23.4Z"></path></svg>
    ),
    image: feature5,
    heading: "Guiding growth With Expert financial Advice",
    description: "Cursus mi pretium tellus duis convallis tempus leo. Pulvinar vivamus fringilla lacus metus bibendum.",
    points: [
      "Fermentum odio phasellus non purus",
      "Imperdiet mollis nullam volutpat",
      "Ornare sagittis vehicula praesent",
    ],
  },
]

export default function FeaturesTabs() {
  const [active, setActive] = useState(0)
  const current = FEATURES[active]

  return (
    <section className=" rounded-t-[80px] bg-[#f6f7f4] py-[120px] -mt-[80px] relative ">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center items-start justify-between mb-20">
          <div className="max-w-[560px]">
            <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
              <h3 className="wdt-heading">Smart Solutions</h3>
            </div>

            <h2 className="text-[46px] font-semibold leading-[1.15]">
              Advanced Tools And Features.
            </h2>
          </div>

          <button className="mt-10 inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
            View All Feastures
            <ArrowRight />
          </button>
        </div>

        {/* Tabs Layout */}
        <div className="flex flex-col md:flex-row lg:gap-16 gap-8 items-start">
          {/* LEFT – Tabs */}
          <ul className="lg:w-[28%] md:w-[40%] w-full md:sticky top-24 flex flex-col gap-5">
            {FEATURES.map((tab, i) => {
              const isActive = i === active

              return (
                <li
                  key={tab.id}
                  onClick={() => setActive(i)}
                  className={`rounded-[20px] ${isActive ? "bg-primary-gradient" : "bg-white"
                    }`}
                >
                  <button className="flex items-center gap-[20px] py-[18px] px-[20px] w-full">
                    {tab.icon}
                    <span className="text-lg font-medium text-[#000]">
                      {tab.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* RIGHT – Content */}
          <div className="lg:w-[72%] md:w-[60%] w-full">
            <div className="bg-[#fff] rounded-[30px] flex overflow-hidden max-lg:flex-col">
              <div className="w-1/2 max-lg:w-full">
                <img
                  src={current.image}
                  alt={current.heading}
                  className="h-full w-full object-cover rounded-[30px]"
                />
              </div>

              <div className="w-1/2 max-lg:w-full py-[50px] px-[25px] lg:px-[50px] flex flex-col justify-center gap-10">
                <div>
                  <h4 className="text-[30px] font-semibold leading-[1.15]">
                    {current.heading}
                  </h4>
                  <p className="mt-5 text-[18px] leading-[1.7] text-[#6b6b6b]">
                    {current.description}
                  </p>
                </div>

                <ul className="space-y-4">
                  {current.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[18px] leading-[1.7] text-[#6b6b6b]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[20px] h-[20px]"><path d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm8.06,7a.79.79,0,0,1-.2.52A55.39,55.39,0,0,0,13.19,23a1.24,1.24,0,0,1-2.25.11,35.8,35.8,0,0,0-4.25-6.49,1.78,1.78,0,0,1,2.66-2.36,32.86,32.86,0,0,1,2.82,3.45,0,0,0,0,0,0,0A46.22,46.22,0,0,1,21.8,6.44.76.76,0,0,1,23.06,7Z"></path></svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
