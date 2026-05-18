import React, { useState } from 'react';
import { 
  Settings, 
  ShieldCheck, 
  Zap, 
  Phone, 
  Mail, 
  MessageCircle, 
  FileText, 
  Terminal, 
  Cpu,
  HelpCircle,
  Plus,
  Minus,
  Wrench,
  Globe,
  Database
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechnicalSupportPage() {
    const [openFaq, setOpenFaq] = useState(null);

    const supportCategories = [
        {
            icon: Cpu,
            title: "Software & App Support",
            desc: "Dashboard, mobile app, aur daily operations se jude issues ke liye.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: Wrench,
            title: "Machine Interfacing",
            desc: "Lab analyzers aur system integration mein technical help.",
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            icon: Globe,
            title: "Network & Connectivity",
            desc: "Server sync, internet issues, aur data backup support.",
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            icon: ShieldCheck,
            title: "Security & Access",
            desc: "Password reset, user permissions, aur account security.",
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            icon: Database,
            title: "Data & Reports",
            desc: "Report formatting, historical data, aur analytics help.",
            color: "text-rose-500",
            bg: "bg-rose-50"
        },
        {
            icon: Terminal,
            title: "Developer API",
            desc: "Custom integration aur API documentation related queries.",
            color: "text-slate-600",
            bg: "bg-slate-100"
        }
    ];

    const faqs = [
        {
            question: "Agar system offline ho jaye to kya data loss hoga?",
            answer: "Nahi, humara system 'Local Sync' feature use karta hai. Jab internet chala jata hai, data aapke local browser memory mein save hota rehta hai aur internet aate hi server par auto-sync ho jata hai."
        },
        {
            question: "Nayi machine (Analyzer) ko system se kaise connect karein?",
            answer: "Nayi machine connect karne ke liye aapko humari technical team se contact karna hoga. Hum remote support (AnyDesk/TeamViewer) ke zariye interfacing setup kar dete hain."
        },
        {
            question: "WhatsApp reports delivery fail hone par kya karein?",
            answer: "Check karein ki aapka WhatsApp API balance khatam to nahi hua. Agar balance hai, to settings mein jaakar 'WhatsApp Node' ko restart karein ya humein support ticket bhejein."
        },
        {
            question: "Kya hum puraana data Excel format mein export kar sakte hain?",
            answer: "Ji haan, 'Reports' section mein jaakar aap kisi bhi date range ka data CSV ya Excel format mein download kar sakte hain."
        },
        {
            question: "System update kaise hota hai?",
            answer: "Hum cloud-based platform hain, isliye updates automatically deploy hote hain. Jab bhi koi naya feature aata hai, aapko dashboard par notification mil jayega."
        }
    ];

    return (
        <div className="bg-ivory min-h-screen pt-28 pb-20">
            {/* HERO SECTION */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[11px] font-bold tracking-widest text-primary uppercase"
                    >
                        <Zap className="w-4 h-4 fill-primary" />
                        <span>24/7 Technical Assistance</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-display font-black text-ink leading-tight">
                        Technical <span className="text-primary">Support</span> Center
                    </h1>
                    <p className="text-xl text-smoke font-medium max-w-2xl mx-auto leading-relaxed">
                        Humari expert technical team aapki lab ko smooth chalane mein madad karne ke liye hamesha taiyaar hai.
                    </p>
                </div>
            </section>

            {/* SUPPORT CATEGORIES */}
            <section className="px-6 mb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {supportCategories.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white border border-saas-border hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-ink mb-4">{item.title}</h3>
                            <p className="text-smoke text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ink mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-smoke font-medium">Common technical queries aur unke solutions.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-saas-border overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-bold text-ink leading-tight">
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-colors ${openFaq === i ? 'bg-primary text-white' : 'bg-ivory-2 text-mist'}`}>
                                        {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-smoke font-medium leading-relaxed border-t border-ivory-2 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grad-fire rounded-[3rem] p-12 md:p-16 overflow-hidden relative shadow-2xl shadow-primary/30">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-display font-black text-white">Abhi bhi problem hai?</h2>
                                <p className="text-white/80 text-lg font-medium">
                                    Humein contact karein, humari team 15 minutes ke andar aapse connect karegi.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a 
                                    href="tel:+919044425858" 
                                    className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="text-white">
                                        <div className="text-[10px] uppercase font-bold opacity-60 tracking-widest">Call Us</div>
                                        <div className="font-bold">+91 90444 25858</div>
                                    </div>
                                </a>
                                <a 
                                    href="mailto:info@biosoftech.in" 
                                    className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="text-white">
                                        <div className="text-[10px] uppercase font-bold opacity-60 tracking-widest">Email Us</div>
                                        <div className="font-bold">info@biosoftech.in</div>
                                    </div>
                                </a>
                                <a 
                                    href="https://wa.me/919044425858" 
                                    className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all group sm:col-span-2"
                                >
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div className="text-white">
                                        <div className="text-[10px] uppercase font-bold opacity-60 tracking-widest">WhatsApp Support</div>
                                        <div className="font-bold">Chat with our experts instantly</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
