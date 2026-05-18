import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';
import contactimage from "../assets/contactimage.jpg";
import { useLocation } from "react-router-dom";

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
        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
                <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
            </div>
            <div>
                <h4 className="font-bold text-slate-800">{title}</h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">{text}</p>
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
        <div className="bg-slate-50/50 min-h-screen py-12 md:py-24 px-4 sm:px-6 lg:px-12">

            {/* Top Section */}
            <div className="text-center mb-16 md:mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saas-accent/10 text-saas-accent font-bold text-xs uppercase tracking-widest mb-6">
                    ✨ Get In Touch
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                    Let's Build Something <br className="hidden md:block" />
                    <span className="text-saas-accent">Great Together</span>
                </h2>
                <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg font-medium">
                    Have questions or need a custom solution? Reach out to our team, and we'll get back to you within 24 hours.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20 md:mb-32">
                <ContactCard
                    icon={Mail}
                    title="Email Us"
                    text="info@biosoftech.in"
                    color="bg-saas-accent"
                />
                <ContactCard
                    icon={Phone}
                    title="Call Us"
                    text={
                        <>
                            +91 62096 88930 <br />
                            +91 9044425858
                        </>
                    }
                    color="bg-indigo-600"
                />
                <ContactCard
                    icon={MapPin}
                    title="Visit Us"
                    text="3rd Floor, Office No- 624F/20A, Matiyari, Chinhat, Lucknow, UP"
                    color="bg-emerald-600"
                />
                <ContactCard
                    icon={Clock}
                    title="Working Hours"
                    text="Mon - Sat, 10AM - 7PM"
                    color="bg-amber-600"
                />
                <ContactCard
                    icon={Mail}
                    title="Support"
                    text="info@biosoftech.in"
                    color="bg-rose-600"
                />
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                {/* Image */}
                <div className="relative group order-2 lg:order-1 flex items-stretch h-full">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-saas-accent/10 to-indigo-500/5 rounded-[3rem] blur-2xl opacity-50 transition duration-1000"></div>
                    <div className="relative rounded-[3rem] overflow-hidden bg-white/50 p-4 w-full h-full flex items-center justify-center min-h-[500px] lg:min-h-full">
                        <img
                            src={contactimage}
                            alt="Contact Support"
                            className="w-full h-full object-cover rounded-[2.5rem] shadow-sm animate-float"
                        />
                    </div>
                </div>

                {/* Form */}
                <div className="order-1 lg:order-2">
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-saas-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        
                        <form ref={formRef} className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                            <h3 className="text-2xl font-black text-slate-900 mb-8">Send us a Message</h3>
                            
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full px-5 py-4 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-saas-accent/30 bg-slate-50/50 font-medium transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Lab Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter lab name"
                                        required
                                        value={formData.pathologyName}
                                        onChange={(e) => setFormData({ ...formData, pathologyName: e.target.value })}
                                        className="w-full px-5 py-4 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-saas-accent/30 bg-slate-50/50 font-medium transition-all"
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter phone"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-5 py-4 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-saas-accent/30 bg-slate-50/50 font-medium transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-5 py-4 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-saas-accent/30 bg-slate-50/50 font-medium transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help you?"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-5 py-4 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-saas-accent/30 bg-slate-50/50 font-medium transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 rounded-2xl font-black text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-xl ${isSubmitting ? 'bg-slate-300 cursor-not-allowed' : 'bg-saas-accent hover:bg-saas-accent/90 shadow-saas-accent/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message Now'}
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
        </div>
    );
}

