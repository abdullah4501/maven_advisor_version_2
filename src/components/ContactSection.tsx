import { useState, useRef } from "react";
import { ArrowRight, Clock, Link, Mail, MapPin, Phone } from "lucide-react";
import { ChevronDown } from "lucide-react"
import { motion, useInView } from "framer-motion";


const SERVICES = [
    "Marketing & Retention",
    "Business Consulting",
    "Operation Management",
    "Customer Experience",
    "Financial Analysis",
]

const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

export default function ContactSection() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("Choose Services*")

    const sectionRef = useRef<HTMLDivElement>(null)
    const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -80px 0px" })


    return (
        <section className="md:rounded-t-[60px] bg-[#f6f7f4] py-[60px] md:py-[120px] md:pb-[180px] md:-mt-[80px] relative">
            <motion.div
                ref={sectionRef}
                variants={fadeUpVariants}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                className="relative w-full md:rounded-t-[60px] bg-cover bg-center"
            >
                <div className="absolute inset-0 md:rounded-[80px] bg-[#f6f7f4]" />
                    <div className="container relative">
                        <div className="flex justify-end">

                            <div className=" grid lg:grid-cols-2 grid-cols-1 w-full gap-10 items-start">
                                <div className="flex flex-col gap-10 lg:sticky md:top-[40px]">
                                    <div className=" flex flex-col">
                                        <div className="mb-4 flex gap-4 text-[16px] font-bold tracking-wide">
                                            <h3 className="wdt-heading text-center">Let's Talk</h3>
                                        </div>

                                        <h2 className="md:text-[50px] text-[36px] font-semibold leading-[1.15] ">
                                            Connect With Us
                                        </h2>
                                        <p className="mt-4 text-[15px] leading-[1.5] text-[#6b6b6b] ">
                                            Hey! Connect us with <a href="" className="relative link-underline text-[#000]">0987-6543-210</a> , or email us through <a href="" className="relative link-underline text-[#000]">info@example.com</a>, or fill the following form. We will contact you back within 12 hours or prior.
                                        </p>
                                    </div>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 justify-between gap-7">
                                        <div className="col-span-1 flex gap-4 mb-6">
                                            <div className="p-[10px] rounded-[14px] bg-[#fff]">
                                                <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-gradient flex items-center justify-center">
                                                    <MapPin className="w-[28px] h-[28px]" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[20px] text-black">Company Address</p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    230 Neville Street New Albany, IN 71520
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 flex gap-4 mb-6">
                                            <div className="p-[10px] rounded-[14px] bg-[#fff]">
                                                <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-gradient flex items-center justify-center">
                                                    <Phone className="w-[28px] h-[28px]" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[20px] text-black">Talk To Us</p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    +00-123-456789
                                                </p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    +000-1234-56789
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 flex gap-4 mb-6">
                                            <div className="p-[10px] rounded-[14px] bg-[#fff]">
                                                <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-gradient flex items-center justify-center">
                                                    <Clock className="w-[28px] h-[28px]" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[20px] text-black">Office Days</p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    Mon to Sat: 09:00am-07:00pm
                                                </p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    Sunday : Closed
                                                </p>
                                            </div>
                                        </div>
                                        {/* EMAIL */}
                                        <div className="col-span-1 flex gap-4 mb-8">
                                            <div className="p-[10px] rounded-[14px] bg-[#fff]">
                                                <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-gradient flex items-center justify-center">
                                                    <Mail className="w-[28px] h-[28px]" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[20px] text-black">Email Us</p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    Info@Example.Com
                                                </p>
                                                <p className="text-[15px] text-black/40 font-medium">
                                                    Support@Example.Com
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="sm:p-[60px] px-[20px] !py-[60px] rounded-[20px] bg-white shadow-[0_0_25px_0px_#ededed]">
                                    <h2 className="md:text-[35px] text-[25px] font-semibold leading-[1.15] ">
                                        Book Your Free Consultation
                                    </h2>
                                    {/* Form */}
                                    <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 relative pt-[30px] md:pt-[50px]">
                                        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="First Name*"
                                            />
                                        </div>

                                        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Last Name*"
                                            />
                                        </div>
                                        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Email Address*"
                                            />
                                        </div>
                                        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Phone Number*"
                                            />
                                        </div>
                                        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Company*"
                                            />
                                        </div>

                                        {/* Dropdown */}
                                        <div className="relative xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(!open)}
                                                className={`w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 flex items-center justify-between outline-none
                                                ${open ? "ring-2 ring-blue-400" : ""}`}
                                            >
                                                <span>{selected}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {open && (
                                                <div className="absolute left-0 top-[calc(100%+10px)] w-full bg-[#f3f5f4] rounded-xl shadow-2xl p-2 max-h-[220px] overflow-y-auto z-20">
                                                    {SERVICES.map((service) => (
                                                        <button
                                                            key={service}
                                                            type="button"
                                                            onClick={() => {
                                                                setSelected(service)
                                                                setOpen(false)
                                                            }}
                                                            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition
                                                            ${service === selected
                                                                    ? "bg-green-200 text-black"
                                                                    : "hover:bg-blue-100 text-gray-700"
                                                                }`}
                                                        >
                                                            {service}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="col-span-2">
                                            <textarea
                                                className="col-span-2 w-full rounded-xl px-6 py-5 bg-[#f3f5f4] text-gray-700 placeholder:text-gray-400 outline-none h-[120px] resize-none"
                                                placeholder="Additional Message"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <div>
                                            <button type="submit" className="md:mt-10 inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold">
                                                Submit
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </motion.div>
        </section>
    )
}