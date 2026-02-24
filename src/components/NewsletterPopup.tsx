import { useState } from "react"
import { X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import popupImg from "@/assets/newsletter.jpg" // swap to the correct image asset

export default function NewsletterPopup({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) {
    const [email, setEmail] = useState("")
    const [agreed, setAgreed] = useState(false)

    return (
        <AnimatePresence>
            {isOpen && (
                <>

                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/70"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[101] flex items-center justify-center px-4"
                    >
                        <div className="relative flex flex-col md:flex-row w-full max-w-[900px] min-h-[380px] rounded-[20px] bg-white shadow-2xl">

                            {/* Close button — top-right, outside the card */}
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute -top-4 -right-4 z-10 w-[44px] h-[44px] rounded-full bg-primary-gradient flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                            >
                                <X className="w-5 h-5 text-white font-bold" strokeWidth={2.5} />
                            </button>

                            {/* LEFT — image */}
                            <div className="w-full md:w-[50%]  shrink-0">
                                <img
                                    src={popupImg}
                                    alt="Newsletter"
                                    className="w-full h-full max-h-auto object-cover object-center rounded-l-[20px]"
                                />
                            </div>

                            {/* RIGHT — content */}
                            <div className="flex flex-col justify-center px-8 md:px-12 py-10 flex-1 bg-[#f6f7f4] rounded-r-[20px]">
                                <div className="pb-[50px]">
                                    <div className="mb-4 flex items-center gap-4 text-[16px] font-bold tracking-wide">
                                        <h3 className="wdt-heading">Join Today</h3>
                                    </div>

                                    <h2 className="text-[36px] md:text-[38px] font-semibold leading-[1.15]">
                                        Our Newsletter.
                                    </h2>

                                    {/* Description */}
                                    <p className="mx-auto text-black/60">
                                        Join our mailing list to receive the latest news and updates from our team.
                                    </p>
                                </div>

                                <div className="w-full">
                                    <div className="relative flex items-center bg-white rounded-[10px] overflow-hidden h-[56px]">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your Email"
                                            className="flex-1 bg-transparent text-black/90 placeholder:text-black/40 text-[16px] px-7 h-full outline-none"
                                        />
                                        <button className="flex items-center justify-center bg-primary-gradient transition-colors rounded-[10px] w-[80px] h-full shrink-0">
                                            <Send className="w-5 h-5 text-[#000] font-bold rotate-[40deg]" />
                                        </button>
                                    </div>

                                    <label className="flex items-center gap-3 mt-2 cursor-pointer">
                                        <div
                                            onClick={() => setAgreed(!agreed)}
                                            className={`w-[14px] h-[14px] rounded-[3px] border flex items-center justify-center transition-colors ${agreed
                                                ? "bg-primary-gradient border-[#a5f94e]"
                                                : "border-black/30 bg-transparent"
                                                }`}
                                        >
                                            {agreed && (
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                    <path d="M1 4L3.5 6.5L9 1" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-black/60 text-[16px]">
                                            I acknowledge all the Terms & Conditions
                                        </span>
                                    </label>
                                </div>

                                {/* Social icons */}
                                <div className="flex items-center gap-8 mt-5">
                                    {[
                                        {
                                            label: "Twitter / X",
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            label: "YouTube",
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            label: "Instagram",
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            label: "Website",
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M2 12h20" />
                                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                </svg>
                                            ),
                                        },
                                    ].map((s) => (
                                        <a
                                            key={s.label}
                                            href="#"
                                            aria-label={s.label}
                                            className="w-[44px] h-[44px] rounded-full border border-black/15 bg-white flex items-center justify-center text-black/70 hover:border-black/40 hover:text-black transition-all"
                                        >
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}