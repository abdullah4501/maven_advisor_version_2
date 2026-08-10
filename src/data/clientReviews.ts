// src/data/clientReviews.ts

import fabianImage from "@/assets/clients/Fabian.png"
import jasonImage from "@/assets/clients/Jason.png"
import matthewImage from "@/assets/clients/MatthewB.webp"
import sethImage from "@/assets/clients/Seth.png"

import alanaImage from "@/assets/clients/Alana.png"
import dasiaImage from "@/assets/clients/Daisa.png"
import danielImage from "@/assets/clients/Dan.png"
import peterImage from "@/assets/clients/Peter.png"
import tobyImage from "@/assets/clients/Toby.png"
import turgayImage from "@/assets/clients/Turgay.png"
import alexImage from "@/assets/clients/Alex.png"

import boyUserImage from "@/assets/clients/boyUser.png"
import girlUserImage from "@/assets/clients/girlUser.png"

export type ClientReview = {
    name: string
    company: string
    text: string
    image: string
}

export const clientReviews: ClientReview[] = [
    {
        name: "Fabian Petrina",
        company: "Co-Founder of Rapid Physique, LLC",
        image: fabianImage,
        text: "We have been working with the Mavens Advisor team for almost two years, and they have been a huge asset to our e-commerce brands. They are reliable, detail-oriented and consistently deliver everything on time without needing to be micromanaged. One of the things we appreciate most is how autonomously they work. They take full ownership of the bookkeeping process and make sure everything is accurate and up to date. It has been a massive weight off our shoulders knowing the financial side of the business is in good hands. We highly recommend them to anyone looking for a dependable and professional accounting team.",
    },
    {
        name: "Jason Lopes",
        company: "CEO of Exact Exteriors LLC",
        image: jasonImage,
        text: "We have been working with the Mavens Advisor team since February, and their services have made a noticeable difference in how we track and understand our company’s financial health. Their consistent daily and weekly updates have been invaluable, especially for our profit and loss statements and balance sheet reports. Having such clear and timely insights has been a great benefit to our business, and we truly appreciate their professionalism and attention to detail.",
    },
    {
        name: "Matthew B",
        company: "Gibraltar",
        image: matthewImage,
        text: "The Mavens Advisor team has been instrumental in structuring our company’s bookkeeping systems. Their reports are always delivered on time, meticulously accurate and easy to work with. They are professional, highly conscientious and consistently go the extra mile. They have become far more than accountants. They are a valued working partner we trust. We are very pleased to have their ongoing support.",
    },
    {
        name: "Marwa",
        company: "COO of Mojo Solutions and Services MSS LLC",
        image: girlUserImage,
        text: "The Mavens Advisor team has supported us for over three years, and their service has been excellent. They manage payroll, taxes, contracts, audits and client follow-ups with professionalism and reliability. Their availability during US business hours makes communication easy and efficient. We are 100% satisfied and highly recommend them.",
    },
    {
        name: "Seth Cooper",
        company: "CEO of Closets by Design",
        image: sethImage,
        text: "Partnering with Mavens Advisor has been a game-changer for our business. Their consistent support, quick responsiveness and deep financial knowledge have been instrumental in helping us stay on top of our books and maintain excellent financial health. We highly recommend their services.",
    },

    // Additional client reviews
    {
        name: "Alex Gerasimov",
        company: "CEO of Credo Construction",
        image: alexImage,
        text: "Clear communication, fast response time, and strong attention to detail. They handled year-end bookkeeping efficiently.",
    },
    {
        name: "Daniel Palenchar",
        company: "Co-Owner of Life's a Beach Volleyball Club",
        image: danielImage,
        text: "The Mavens team has been a great help managing our finances. Thanks Mavens!",
    },
    {
        name: "Toby Waller",
        company: "Co-Founder of Brick",
        image: tobyImage,
        text: "Thanks, Mavens team - exactly what I needed!",
    },
    {
        name: "Dasia Baker",
        company: "CEO of Warriors Revival",
        image: dasiaImage,
        text: "It was a pleasure working with the Mavens team as the bookkeeper. The way they calculated my business expenses, organized everything, and assisted with my profit and loss statements was phenomenal. Their professionalism and great assistance were highly appreciated. Their communication and attention to detail are amazing. I look forward to continuing our collaboration.",
    },
    {
        name: "Alana Fiks",
        company: "Owner of Black Market Provisions",
        image: alanaImage,
        text: "They were great to work with and solved my issues quickly. I will work with again!",
    },
    {
        name: "Peter Damelio",
        company: "Business Development at Gridiron Robotics",
        image: peterImage,
        text: "Great working with the Mavens Team. Helped me clean my books up in a matter of hours. If I have issues again or need help I will restart this contract.",
    },
    {
        name: "Steve Cohn",
        company: "",
        image: boyUserImage,
        text: "They are hard workers and know standard accounting practices like the back of their hand. They were willing to put in the extra time to make sure we met the goals of my project.",
    },
    {
        name: "Turgay CINAR",
        company: "Executive Director at Natural Life B.V",
        image: turgayImage,
        text: "It was an absolute pleasure collaborating with Mavens. They provided invaluable assistance with our UK VAT Return, demonstrating both expertise and clarity throughout the process. Their professionalism and straightforward approach make them highly commendable. I would not hesitate to recommend their services.",
    },
    {
        name: "Alltamash Siddiqui",
        company: "",
        image: boyUserImage,
        text: "The Mavens team is knowledgeable, reliable, and highly professional. They streamlined our financial processes, resolved long-standing issues, and improved our reporting. Their communication was clear, responsive, and thoughtful throughout. We highly recommend the Mavens team and look forward to working with them again.",
    },
]