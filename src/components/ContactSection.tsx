import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react"


const SERVICES = [
    "Marketing & Retention",
    "Business Consulting",
    "Operation Management",
    "Customer Experience",
    "Financial Analysis",
]

export default function ContactSection() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("Choose Services*")

    return (
        <section className="bg-[#f6f7f4] w-full">
            <div className="relative w-full md:rounded-t-[80px] bg-[url('../src/assets/contactbg.jpg')] bg-cover bg-center ">
                <div className="absolute inset-0 md:rounded-[80px] bg-[#1616166e]" />
                <div className="container pt-[120px] pb-[170px]">
                    <div className="relative">
                        <div className="flex justify-end">

                            <div className="lg:w-[50%] md:w-[85%] w-full">
                                <div className="sm:p-[60px] px-[20px] py-[50px] rounded-[20px] bg-white/60 backdrop-blur-lg">
                                    {/* Header */}
                                    <div className="flex mb-5 md:mb-20">
                                        <div className="m-auto flex flex-col">
                                            <div className="mb-4 flex gap-4 text-[16px] font-bold tracking-wide">
                                                <h3 className="wdt-heading text-center">Let's Talk</h3>
                                            </div>

                                            <h2 className="md:text-[46px] text-[36px] font-semibold leading-[1.15] ">
                                                Connect With Us
                                            </h2>
                                            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#6b6b6b] ">
                                                Hey! Connect us with <a href="" className="relative link-underline text-[#000]">0987-6543-210</a> , or email us through <a href="" className="relative link-underline text-[#000]">info@example.com</a>, or fill the following form. We will contact you back within 12 hours or prior.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Form */}
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 relative">
                                        <div className="col-span-1">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-white text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="First Name*"
                                            />
                                        </div>

                                        <div className="col-span-1">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-white text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Last Name*"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-white text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Email Address*"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-white text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Phone Number*"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <input
                                                className="w-full rounded-xl px-6 py-5 bg-white text-gray-700 placeholder:text-gray-400 outline-none"
                                                placeholder="Company*"
                                            />
                                        </div>

                                        {/* Dropdown */}
                                        <div className="relative col-span-1">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(!open)}
                                                className={`w-full rounded-xl px-6 py-5 bg-white text-gray-700 flex items-center justify-between outline-none
                                                ${open ? "ring-2 ring-green-400" : ""}`}
                                            >
                                                <span>{selected}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {open && (
                                                <div className="absolute left-0 top-[calc(100%+10px)] w-full bg-white rounded-xl shadow-2xl p-2 max-h-[220px] overflow-y-auto z-20">
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
                                                                    : "hover:bg-green-100 text-gray-700"
                                                                }`}
                                                        >
                                                            {service}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="md:col-span-2 col-span-1">
                                            <textarea
                                                className="col-span-2 w-full rounded-xl px-6 py-5 bg-white text-gray-700 placeholder:text-gray-400 outline-none h-[120px] resize-none"
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
                </div>
            </div>
        </section>
    )
}