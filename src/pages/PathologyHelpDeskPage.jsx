import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, HelpCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PathologyHelpDeskPage() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "Lab Analyzer se direct result sync kaise hota hai?",
            answer: "Humari platform 'Equipment Interfacing' technology ka use karti hai. Iske zariye aapki lab machines (analyzers) se data seedha system mein sync ho jata hai, jisse manual entry ke errors khatam ho jate hain aur reporting fast ho jati hai."
        },
        {
            question: "Kya patients apni reports online download kar sakte hain?",
            answer: "Ji haan, har patient ko ek secure portal ka access milta hai. Saath hi, jaise hi report approve hoti hai, hum WhatsApp aur SMS ke zariye auto-delivery link bhej dete hain jahan se wo PDF download kar sakte hain."
        },
        {
            question: "QR Code verification ka kya fayda hai?",
            answer: "Har report par ek unique QR code hota hai. Koi bhi third-party (jaise doctors ya hospitals) ise scan karke report ki authenticity check kar sakte hain, jisse fake reports ka khatra nahi rehta."
        },
        {
            question: "NABL standards maintain karne mein yeh kaise help karta hai?",
            answer: "Humere system mein automated Quality Control (QC) logs, calibration alerts, aur audit trails pehle se hi integrated hain, jo NABL aur ISO standards ko follow karne mein aapki madad karte hain."
        },
        {
            question: "Multiple collection centers ko kaise manage karein?",
            answer: "Humara platform multi-center management support karta hai. Aap ek hi dashboard se apne saare branch centers, collection points, aur franchise labs ki billing aur reports monitor kar sakte hain."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10 pt-28">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    Pathology Help Desk
                </h1>
                <p className="text-gray-500 mt-2">
                    Find answers, guides, and support for your pathology management system
                </p>
            </div>

            {/* QUICK HELP */}
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                {[
                    { title: "Patient Management", desc: "Manage patient data easily" },
                    { title: "Billing & Invoicing", desc: "Track payments & invoices" },
                    { title: "Attendance", desc: "Mark & monitor attendance" },
                    { title: "Lab Reports & Analytics", desc: "View pathology performance" },
                    { title: "Patient Portal", desc: "Connect with patients" },
                    { title: "Technician Tools", desc: "Tools for technicians" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer"
                    >
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                ))}

            </div>

            {/* FAQ SECTION */}
            <div className="w-full max-w-screen-xl mx-auto mb-16">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saas-accent/10 text-saas-accent text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>Frequently Asked Questions</span>
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Everything you need to know
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-slate-800 leading-tight pr-4">
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openFaq === i ? 'bg-saas-accent text-white' : 'bg-slate-50 text-slate-400'}`}>
                                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CONTACT SUPPORT */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Contact Support
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="text-saas-accent" />
                            <span>info@biosoftech.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-green-500" />
                            <div className="flex flex-col">
                                <span>+91-9044425858</span>
                                <span>+91-6209688930</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Form */}


            </div>
        </div>
    );
}
