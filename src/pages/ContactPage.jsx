import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import contactimage from "../assets/contactimage.jpg";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SITE_NAME = "Pathology";

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const ContactCard = ({ icon: Icon, title, text, color }) => {
    return (
        <div className="flex flex-col gap-4 bg-white p-8 rounded-[2rem] shadow-sm border border-saas-border hover:shadow-xl hover:shadow-primary/5 transition-all group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} bg-opacity-10 text-primary group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="font-display font-bold text-ink text-lg">{title}</h4>
                <div className="text-sm font-medium text-smoke leading-relaxed mt-1">{text}</div>
            </div>
        </div>
    );
};

export default function ContactPage() {
    const formRef = useRef();
    const { hash } = useLocation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        fullName: '',
        pathologyName: '',
        phone: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const now = new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // Parameters for Admin Notification
        const ownerParams = {
            to_email: "info@biosoftech.in",
            owner_name: formData.fullName,
            pathology_name: formData.pathologyName,
            user_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            date_time: now,
            site_name: SITE_NAME,
        };

        // Parameters for User Confirmation
        const userParams = {
            owner_name: formData.fullName,
            user_email: formData.email,
            site_name: SITE_NAME,
            company_name: "Biosoftech Solutions",
            support_email: "info@biosoftech.in",
            to_email: formData.email
        };

        try {
            // 1. Send Email to Admin
            if (EMAILJS_TEMPLATE_ID_ORG) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID_ORG,
                    ownerParams,
                    EMAILJS_PUBLIC_KEY
                );
            }

            // 2. Send Confirmation Email to User
            if (EMAILJS_TEMPLATE_ID_USER) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID_USER,
                    userParams,
                    EMAILJS_PUBLIC_KEY
                );
            }

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ fullName: '', pathologyName: '', phone: '', email: '', message: '' });

            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-ivory min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-[1180px] mx-auto">
                    {/* Top Section */}
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-bold text-[11px] uppercase tracking-widest">
                            ✨ Contact Our Team
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-ink tracking-tight leading-tight">
                            Let's Build Something <br className="hidden md:block" />
                            <span className="text-primary italic">Excellent Together</span>
                        </h2>
                        <p className="text-smoke max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                            Have questions or need a custom solution for your lab? Reach out to our team, and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        <ContactCard
                            icon={Mail}
                            title="Email Us"
                            text="info@biosoftech.in"
                            color="bg-primary"
                        />
                        <ContactCard
                            icon={Phone}
                            title="Call Us"
                            text={
                                <>
                                    +91 62096 88930 <br />
                                    +91 90444 25858
                                </>
                            }
                            color="bg-gold"
                        />
                        <ContactCard
                            icon={MapPin}
                            title="Visit Us"
                            text="3rd Floor, Matiyari, Lucknow, UP"
                            color="bg-primary"
                        />
                        <ContactCard
                            icon={Clock}
                            title="Working Hours"
                            text="Mon - Sat, 10AM - 7PM"
                            color="bg-gold"
                        />
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Image */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
                            <div className="relative rounded-[3rem] overflow-hidden bg-white p-4 shadow-sm h-full">
                                <img
                                    src={contactimage}
                                    alt="Contact Support"
                                    className="w-full h-full object-cover rounded-[2.5rem] animate-float"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-primary/5 border border-saas-border relative overflow-hidden">
                            <form ref={formRef} className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-display font-black text-ink">Send us a Message</h3>
                                    <p className="text-mist text-sm font-medium">We typically respond in less than 24 hours.</p>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-mist uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full px-6 py-4 border border-saas-border rounded-2xl focus:outline-none focus:border-primary/40 bg-ivory/30 font-medium transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-mist uppercase tracking-widest ml-1">Lab Name</label>
                                        <input
                                            type="text"
                                            placeholder="City Lab"
                                            required
                                            value={formData.pathologyName}
                                            onChange={(e) => setFormData({ ...formData, pathologyName: e.target.value })}
                                            className="w-full px-6 py-4 border border-saas-border rounded-2xl focus:outline-none focus:border-primary/40 bg-ivory/30 font-medium transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-mist uppercase tracking-widest ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-6 py-4 border border-saas-border rounded-2xl focus:outline-none focus:border-primary/40 bg-ivory/30 font-medium transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-mist uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@lab.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 border border-saas-border rounded-2xl focus:outline-none focus:border-primary/40 bg-ivory/30 font-medium transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-mist uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="How can we help your lab grow?"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-6 py-4 border border-saas-border rounded-2xl focus:outline-none focus:border-primary/40 bg-ivory/30 font-medium transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 rounded-2xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl ${isSubmitting ? 'bg-slate-300 cursor-not-allowed' : 'grad-fire hover:scale-[1.02] active:scale-[0.98] shadow-primary/20 hover:shadow-2xl'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message Now'}
                                    {!isSubmitting && <Send className="w-5 h-5" />}
                                </button>

                                {status.message && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`text-center text-sm font-bold ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}
                                    >
                                        {status.message}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
