import React from "react";
import { Users, Microscope, IndianRupee, BarChart, MessageCircle, ArrowRight, Zap, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";
import Laptopbag from "../assets/Laptop-bag.png";
import { motion } from "framer-motion";

export default function HeroSection() {
    const features = [
        { name: "Fast Setup", icon: Zap },
        { name: "Secure Data", icon: ShieldCheck },
        { name: "Mobile Ready", icon: Smartphone },
        { name: "GST Ready", icon: IndianRupee },
    ];

    return (
        <section className="relative min-h-screen grad-bg pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 relative z-10">
                
                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-8">
                    
                    {/* Badge Row */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-saas-border rounded-full shadow-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[11px] font-bold text-smoke uppercase tracking-wider">Live & Trusted by 500+ Labs</span>
                        </div>
                        <div className="px-3 py-1.5 bg-gold-faint border border-gold/20 rounded-full">
                            <span className="text-[11px] font-bold text-gold uppercase tracking-wider">Made in India</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-display font-black text-ink leading-[1.1] tracking-tight">
                            Smart <span className="text-primary">Pathology</span> <br />
                            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Better Diagnostics</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-smoke font-medium max-w-lg leading-relaxed">
                            India's most advanced lab management software. Streamline your registrations, testing, and billing with ease.
                        </p>
                    </div>

                    {/* CTA Row */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="grad-fire text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <a href='https://pathology.biosoftech.in/register'>Get Started Now</a>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-2 text-mist text-sm font-semibold">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            No credit card required
                        </div>
                    </div>

                    {/* Tags Row */}
                    <div className="flex flex-wrap gap-3">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-saas-border rounded-full shadow-sm text-ink text-xs font-bold">
                                <item.icon className="w-4 h-4 text-primary" />
                                {item.name}
                            </div>
                        ))}
                    </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative group">
                    {/* Visual Decoration */}
                    <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10 transform perspective-1000 rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                        <img
                            src={Laptopbag}
                            alt="Pathology Dashboard"
                            className="w-full h-auto object-contain drop-shadow-[0_32px_64px_rgba(76,53,117,0.25)] rounded-[2rem]"
                        />

                        {/* Floating Badges */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 p-4 bg-white rounded-2xl shadow-xl border border-saas-border flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-mist uppercase tracking-widest">Active Patients</div>
                                <div className="text-lg font-display font-bold text-ink">12,450+</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -bottom-10 -right-5 p-4 bg-white rounded-2xl shadow-xl border border-saas-border flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gold-faint flex items-center justify-center text-gold">
                                <IndianRupee className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-mist uppercase tracking-widest">Total Revenue</div>
                                <div className="text-lg font-display font-bold text-ink">Γé╣ 4.2M</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}

