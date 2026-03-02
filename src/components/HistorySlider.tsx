import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import image2 from "@/assets/history-img-01.jpg";
import image1 from "@/assets/history-img-02.jpg";
import image3 from "@/assets/history-img-03.jpg";
import image4 from "@/assets/history-img-04.jpg";
import image5 from "@/assets/history-img-05.jpg";

import 'swiper/css';
import 'swiper/css/free-mode';

// Timeline data structure - each slide has both top and bottom content
const timelineData = [
    {
        id: 1,
        top: {
            type: 'text',
            year: '2015',
            title: 'Started Company',
            description: 'Once the ideas are screened and business opportunity emerges conceptualized',
        },
        bottom: {
            type: 'image',
            image: image1,
            alt: 'Business handshake 2017',
        },
        dotPosition: 'top',
    },
    {
        id: 2,
        top: {
            type: 'image',
            image: image2,
            alt: 'Business meeting 2015',
        },
        bottom: {
            type: 'text',
            year: '2017',
            title: 'Expert Member',
            description: 'As a team member, you understand your role within the team and work to achieve',
        },
        dotPosition: 'bottom',
    },
    {
        id: 3,
        top: {
            type: 'text',
            year: '2019',
            title: 'Multiple Branches',
            description: 'In a multi-industry study, he found that high-performance work practices',
        },
        bottom: {
            type: 'image',
            image: image3,
            alt: 'Business professionals 2019',
        },
        dotPosition: 'top',
    },
    {
        id: 4,
        top: {
            type: 'image',
            image: image4,
            alt: 'Business team 2019',
        },
        bottom: {
            type: 'text',
            year: '2021',
            title: 'Evolved Over',
            description: 'Investment companies have evolved from small entrepreneurial organizations',
        },
        dotPosition: 'bottom',
    },
    {
        id: 5,
        top: {
            type: 'text',
            year: '2022',
            title: 'Milestone Vision',
            description: 'In a multi-industry study, he found that high-performance work practices',
        },
        bottom: {
            type: 'image',
            image: image5,
            alt: 'Business professionals 2019',
        },
        dotPosition: 'top',
    },
];

interface TimelineSlideProps {
    data: typeof timelineData[0];
}

const TimelineSlide = ({ data }: TimelineSlideProps) => {
    return (
        <div className="flex flex-col h-full min-h-[500px] md:min-h-[600px]">
            {/* Top Content Area */}
            <div className="flex-1 flex flex-col justify-end pb-4">
                {data.top.type === 'text' && (
                    <div className="text-center px-2">
                        <span className="text-primary font-semibold text-base md:text-[18px] tracking-wider mb-2 md:mb-3 block">
                            {data.top.year}
                        </span>
                        <h3 className="text-white font-bold text-lg md:text-[24px] mb-2 md:mb-3 leading-tight">
                            {data.top.title}
                        </h3>
                        <p className="text-white text-sm md:text-[18px] font-semibold leading-[20px] md:leading-[22px]">
                            {data.top.description}
                        </p>
                    </div>
                )}
                {data.top.type === 'image' && (
                    <div className="flex items-end justify-center h-full mx-5">
                        <img
                            src={data.top.image}
                            alt={data.top.alt}
                            className="w-full h-40 md:h-52 object-cover rounded-[20px]"
                        />
                    </div>
                )}
            </div>

            {/* Timeline Dot Area */}
            <div className="relative h-20 flex items-center justify-center">
                {/* Horizontal line segment */}
                <div className="absolute left-0 right-0 h-px bg-muted-foreground/40"></div>

                {/* Dot */}
                <div className="relative z-10">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-muted-foreground/40"></div>

                    {/* Vertical line - going up or down based on content position */}
                    {data.dotPosition === 'bottom' && (
                        <div className="absolute left-1/2 bottom-3 w-px h-10  bg-white/40 -translate-x-1/2"></div>
                    )}
                    {data.dotPosition === 'top' && (
                        <div className="absolute left-1/2 top-3 w-px h-10  bg-white/40 -translate-x-1/2"></div>
                    )}
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="flex-1 flex flex-col justify-start pt-4">
                {data.bottom.type === 'text' && (
                    <div className="text-center px-2">
                        <span className="text-primary font-semibold text-base md:text-[18px] tracking-wider mb-2 md:mb-3 block mt-2 md:mt-4">
                            {data.bottom.year}
                        </span>
                        <h3 className="text-white font-bold text-lg md:text-[24px] mb-2 md:mb-3 leading-tight">
                            {data.bottom.title}
                        </h3>
                        <p className="text-white text-sm md:text-[18px] font-semibold leading-[20px] md:leading-[22px]">
                            {data.bottom.description}
                        </p>
                    </div>
                )}
                {data.bottom.type === 'image' && (
                    <div className="flex items-start justify-center h-full mx-5">
                        <img
                            src={data.bottom.image}
                            alt={data.bottom.alt}
                            className="w-full h-40 md:h-52 object-cover rounded-[20px]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

const HistorySlider = () => {
    return (
        <section className="relative min-h-[80vh] bg-navy py-12 md:py-20 overflow-hidden">
            <div className="">
                <div className="py-[50px] md:pt-[150px] md:pb-[180px]">
                    <div className="mb-[65px] text-center">
                        <h3 className="mb-3 flex items-center justify-center gap-3 text-white wdt-heading">
                            Consulting Services
                        </h3>
                        <h2 className="text-[38px] md:text-5xl font-semibold text-white leading-[38px]">
                            Trusted <span className="text-[#0C7FFE]">Guidance</span> Built For You
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-white">
                            Euismod quam justo lectus commodo augue arcu dignissim.
                        </p>
                    </div>
                    <HistorySlider />
                </div>
                {/* Timeline Swiper Container */}
                <div className="relative">
                    <Swiper
                        modules={[FreeMode]}
                        spaceBetween={30}
                        slidesPerView={1.5}
                        freeMode={{
                            enabled: true,
                            momentum: true,
                            momentumRatio: 0.5,
                        }}
                        speed={5000}
                        loop={false}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        className="history-swiper !overflow-visible"
                    >
                        {timelineData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <TimelineSlide data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Continuous Timeline Line Overlay */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-600 pointer-events-none z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default HistorySlider;
