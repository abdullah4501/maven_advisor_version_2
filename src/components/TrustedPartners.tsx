import React, {useRef, useState} from 'react';
import { motion, useInView } from "framer-motion"

const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

const TrustedPartners = () => {
    // SVG Icons array
    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 50" className="w-[8em] h-auto">	<g>		<path d="M5.8,25.4c0-8,6.5-14.5,14.5-14.5V6.1C9.7,6.1,1,14.7,1,25.4C1,36,9.7,44.7,20.4,44.7v-4.8   C12.3,39.8,5.8,33.4,5.8,25.4z"></path>		<path d="M25.2,6.1V17c-1.4-0.8-3.1-1.3-4.8-1.3c-5.4,0-9.7,4.3-9.7,9.6S15,35,20.4,35c5.4,0,9.7-4.3,9.7-9.6V6.1H25.2   L25.2,6.1z M20.4,30.2c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8S23,30.2,20.4,30.2z"></path>		<path d="M44,20.3c-2.9,0-5.1,2.2-5.1,5c0,2.8,2.2,5.1,5.1,5.1c1.5,0,3-0.7,4.1-1.8l1.7,1.9c-1.6,1.6-3.8,2.6-6,2.6   c-4.5,0-7.9-3.4-7.9-7.7c0-4.4,3.5-7.7,8.1-7.7c2.2,0,4.4,0.9,5.9,2.4l-1.7,2.1C47.1,21,45.5,20.3,44,20.3L44,20.3z"></path>		<path d="M67,25.3c0,4.4-3.5,7.7-8.1,7.7c-4.6,0-8.1-3.4-8.1-7.7c0-4.4,3.5-7.7,8.1-7.7C63.5,17.7,67,21,67,25.3z    M53.8,25.3c0,2.9,2.4,5.1,5.2,5.1c2.8,0,5.1-2.3,5.1-5.1c0-2.9-2.3-5.1-5.1-5.1S53.8,22.5,53.8,25.3z"></path>		<path d="M73,17.8l4.8,9.7l4.8-9.7h3.4v15.2h-2.7l0-10.8l-4.5,9.3h-1.9l-4.5-9.3v10.8h-2.7V17.8H73L73,17.8z"></path>		<path d="M101.9,23c0,3.5-2.2,5.5-6,5.5h-3.3v4.5h-2.9V17.8h6.2C99.7,17.8,101.9,19.6,101.9,23L101.9,23z M99.1,23.1   c0-1.9-1.2-2.8-3.4-2.8h-3.2v5.6h3.2C97.9,25.9,99.1,25,99.1,23.1z"></path>		<path d="M113.2,29.7h-7.4l-1.3,3.2h-3l6.7-15.2h3l6.6,15.2h-3.1L113.2,29.7z M112.2,27.2l-2.7-6.4l-2.7,6.4H112.2z"></path>		<path d="M122.3,17.8l7.9,10.4V17.8h2.8v15.2h-2.8l-7.8-10.4v10.4h-2.9V17.8H122.3z"></path>		<path d="M143.5,28v5h-2.9v-4.9l-5.7-10.3h3l4.2,7.1l4.1-7.1h2.9L143.5,28L143.5,28z"></path>	</g></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 50" className="w-[8em] h-auto">	<g>		<path d="M5.8,25.4c0-8,6.5-14.5,14.5-14.5V6.1C9.7,6.1,1,14.7,1,25.4C1,36,9.7,44.7,20.4,44.7v-4.8   C12.3,39.8,5.8,33.4,5.8,25.4z"></path>		<path d="M25.2,6.1V17c-1.4-0.8-3.1-1.3-4.8-1.3c-5.4,0-9.7,4.3-9.7,9.6S15,35,20.4,35c5.4,0,9.7-4.3,9.7-9.6V6.1H25.2   L25.2,6.1z M20.4,30.2c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8S23,30.2,20.4,30.2z"></path>		<path d="M44,20.3c-2.9,0-5.1,2.2-5.1,5c0,2.8,2.2,5.1,5.1,5.1c1.5,0,3-0.7,4.1-1.8l1.7,1.9c-1.6,1.6-3.8,2.6-6,2.6   c-4.5,0-7.9-3.4-7.9-7.7c0-4.4,3.5-7.7,8.1-7.7c2.2,0,4.4,0.9,5.9,2.4l-1.7,2.1C47.1,21,45.5,20.3,44,20.3L44,20.3z"></path>		<path d="M67,25.3c0,4.4-3.5,7.7-8.1,7.7c-4.6,0-8.1-3.4-8.1-7.7c0-4.4,3.5-7.7,8.1-7.7C63.5,17.7,67,21,67,25.3z    M53.8,25.3c0,2.9,2.4,5.1,5.2,5.1c2.8,0,5.1-2.3,5.1-5.1c0-2.9-2.3-5.1-5.1-5.1S53.8,22.5,53.8,25.3z"></path>		<path d="M73,17.8l4.8,9.7l4.8-9.7h3.4v15.2h-2.7l0-10.8l-4.5,9.3h-1.9l-4.5-9.3v10.8h-2.7V17.8H73L73,17.8z"></path>		<path d="M101.9,23c0,3.5-2.2,5.5-6,5.5h-3.3v4.5h-2.9V17.8h6.2C99.7,17.8,101.9,19.6,101.9,23L101.9,23z M99.1,23.1   c0-1.9-1.2-2.8-3.4-2.8h-3.2v5.6h3.2C97.9,25.9,99.1,25,99.1,23.1z"></path>		<path d="M113.2,29.7h-7.4l-1.3,3.2h-3l6.7-15.2h3l6.6,15.2h-3.1L113.2,29.7z M112.2,27.2l-2.7-6.4l-2.7,6.4H112.2z"></path>		<path d="M122.3,17.8l7.9,10.4V17.8h2.8v15.2h-2.8l-7.8-10.4v10.4h-2.9V17.8H122.3z"></path>		<path d="M143.5,28v5h-2.9v-4.9l-5.7-10.3h3l4.2,7.1l4.1-7.1h2.9L143.5,28L143.5,28z"></path>	</g></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 50" className="w-[8em] h-auto">	<g>		<path d="M5.8,25.4c0-8,6.5-14.5,14.5-14.5V6.1C9.7,6.1,1,14.7,1,25.4C1,36,9.7,44.7,20.4,44.7v-4.8   C12.3,39.8,5.8,33.4,5.8,25.4z"></path>		<path d="M25.2,6.1V17c-1.4-0.8-3.1-1.3-4.8-1.3c-5.4,0-9.7,4.3-9.7,9.6S15,35,20.4,35c5.4,0,9.7-4.3,9.7-9.6V6.1H25.2   L25.2,6.1z M20.4,30.2c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8S23,30.2,20.4,30.2z"></path>		<path d="M44,20.3c-2.9,0-5.1,2.2-5.1,5c0,2.8,2.2,5.1,5.1,5.1c1.5,0,3-0.7,4.1-1.8l1.7,1.9c-1.6,1.6-3.8,2.6-6,2.6   c-4.5,0-7.9-3.4-7.9-7.7c0-4.4,3.5-7.7,8.1-7.7c2.2,0,4.4,0.9,5.9,2.4l-1.7,2.1C47.1,21,45.5,20.3,44,20.3L44,20.3z"></path>		<path d="M67,25.3c0,4.4-3.5,7.7-8.1,7.7c-4.6,0-8.1-3.4-8.1-7.7c0-4.4,3.5-7.7,8.1-7.7C63.5,17.7,67,21,67,25.3z    M53.8,25.3c0,2.9,2.4,5.1,5.2,5.1c2.8,0,5.1-2.3,5.1-5.1c0-2.9-2.3-5.1-5.1-5.1S53.8,22.5,53.8,25.3z"></path>		<path d="M73,17.8l4.8,9.7l4.8-9.7h3.4v15.2h-2.7l0-10.8l-4.5,9.3h-1.9l-4.5-9.3v10.8h-2.7V17.8H73L73,17.8z"></path>		<path d="M101.9,23c0,3.5-2.2,5.5-6,5.5h-3.3v4.5h-2.9V17.8h6.2C99.7,17.8,101.9,19.6,101.9,23L101.9,23z M99.1,23.1   c0-1.9-1.2-2.8-3.4-2.8h-3.2v5.6h3.2C97.9,25.9,99.1,25,99.1,23.1z"></path>		<path d="M113.2,29.7h-7.4l-1.3,3.2h-3l6.7-15.2h3l6.6,15.2h-3.1L113.2,29.7z M112.2,27.2l-2.7-6.4l-2.7,6.4H112.2z"></path>		<path d="M122.3,17.8l7.9,10.4V17.8h2.8v15.2h-2.8l-7.8-10.4v10.4h-2.9V17.8H122.3z"></path>		<path d="M143.5,28v5h-2.9v-4.9l-5.7-10.3h3l4.2,7.1l4.1-7.1h2.9L143.5,28L143.5,28z"></path>	</g></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 50" className="w-[8em] h-auto">	<g>		<path d="M5.8,25.4c0-8,6.5-14.5,14.5-14.5V6.1C9.7,6.1,1,14.7,1,25.4C1,36,9.7,44.7,20.4,44.7v-4.8   C12.3,39.8,5.8,33.4,5.8,25.4z"></path>		<path d="M25.2,6.1V17c-1.4-0.8-3.1-1.3-4.8-1.3c-5.4,0-9.7,4.3-9.7,9.6S15,35,20.4,35c5.4,0,9.7-4.3,9.7-9.6V6.1H25.2   L25.2,6.1z M20.4,30.2c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8S23,30.2,20.4,30.2z"></path>		<path d="M44,20.3c-2.9,0-5.1,2.2-5.1,5c0,2.8,2.2,5.1,5.1,5.1c1.5,0,3-0.7,4.1-1.8l1.7,1.9c-1.6,1.6-3.8,2.6-6,2.6   c-4.5,0-7.9-3.4-7.9-7.7c0-4.4,3.5-7.7,8.1-7.7c2.2,0,4.4,0.9,5.9,2.4l-1.7,2.1C47.1,21,45.5,20.3,44,20.3L44,20.3z"></path>		<path d="M67,25.3c0,4.4-3.5,7.7-8.1,7.7c-4.6,0-8.1-3.4-8.1-7.7c0-4.4,3.5-7.7,8.1-7.7C63.5,17.7,67,21,67,25.3z    M53.8,25.3c0,2.9,2.4,5.1,5.2,5.1c2.8,0,5.1-2.3,5.1-5.1c0-2.9-2.3-5.1-5.1-5.1S53.8,22.5,53.8,25.3z"></path>		<path d="M73,17.8l4.8,9.7l4.8-9.7h3.4v15.2h-2.7l0-10.8l-4.5,9.3h-1.9l-4.5-9.3v10.8h-2.7V17.8H73L73,17.8z"></path>		<path d="M101.9,23c0,3.5-2.2,5.5-6,5.5h-3.3v4.5h-2.9V17.8h6.2C99.7,17.8,101.9,19.6,101.9,23L101.9,23z M99.1,23.1   c0-1.9-1.2-2.8-3.4-2.8h-3.2v5.6h3.2C97.9,25.9,99.1,25,99.1,23.1z"></path>		<path d="M113.2,29.7h-7.4l-1.3,3.2h-3l6.7-15.2h3l6.6,15.2h-3.1L113.2,29.7z M112.2,27.2l-2.7-6.4l-2.7,6.4H112.2z"></path>		<path d="M122.3,17.8l7.9,10.4V17.8h2.8v15.2h-2.8l-7.8-10.4v10.4h-2.9V17.8H122.3z"></path>		<path d="M143.5,28v5h-2.9v-4.9l-5.7-10.3h3l4.2,7.1l4.1-7.1h2.9L143.5,28L143.5,28z"></path>	</g></svg>,

    ];

    const companies = [
        { name: 'COMPANY', icon: icons[2] },
        { name: 'FINANCE', icon: icons[0] },
        { name: 'GROWTH', icon: icons[1] },
        { name: 'Hertz', icon: icons[3] },
        { name: 'Growth', icon: icons[3] },
        { name: 'COMPANY', icon: icons[2] },
        { name: 'FINANCE', icon: icons[0] },
        { name: 'GROWTH', icon: icons[1] },
        { name: 'Hertz', icon: icons[3] },
        { name: 'Growth', icon: icons[3] },
    ];

    const companies2 = [
        { name: 'TeamWork', icon: icons[3] },
        { name: 'COMPANY', icon: icons[2] },
        { name: 'finance', icon: icons[0] },
        { name: 'COMPANY', icon: icons[2] },
        { name: 'narrow', icon: icons[3] },
        { name: 'TeamWork', icon: icons[3] },
        { name: 'COMPANY', icon: icons[3] },
        { name: 'finance', icon: icons[0] },
        { name: 'COMPANY', icon: icons[2] },
        { name: 'narrow', icon: icons[3] },
    ];

    const CompanyCard = ({ icon }: { name: string; icon: React.ReactNode }) => (
        <div className="marquee-card">
            <div className="flex items-center gap-3">
                <div className="marquee-icon">{icon}</div>
            </div>
        </div>
    );

    return (
        <div className='container'>
            <div className="flex items-center  mb-10 md:mb-[50px]"
            >
                <div className="m-auto flex flex-col items-center">
                    <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                        <h3 className="wdt-heading text-center">Our Company</h3>
                    </div>

                    <h2 className="text-[36px] md:text-[50px] font-semibold leading-[1.15] text-center">
                        Trusted Business Partner
                    </h2>
                </div>

            </div>
            <div className="partners-marquee-container">
                {/* First row - scrolling left */}
                <div className="marquee-wrapper">
                    <div className="marquee marquee-left">
                        {[...companies, ...companies].map((company, idx) => (
                            <CompanyCard key={idx} name={company.name} icon={company.icon} />
                        ))}
                    </div>
                    <div className="marquee-gradient-left"></div>
                    <div className="marquee-gradient-right"></div>
                </div>

                {/* Second row - scrolling right */}
                <div className="marquee-wrapper">
                    <div className="marquee marquee-right">
                        {[...companies2, ...companies2].map((company, idx) => (
                            <CompanyCard key={idx} name={company.name} icon={company.icon} />
                        ))}
                    </div>
                    <div className="marquee-gradient-left"></div>
                    <div className="marquee-gradient-right"></div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartners;
