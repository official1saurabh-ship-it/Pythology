import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import pathology from "../assets/pathology.png";
import pathologyimage from "../assets/pathologyimage.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girl from "../assets/Advantagesimg.png";
import tables from "../assets/dashboard.png";
import overview from "../assets/overview.jpeg";
import {
  CheckCircle,
  TrendingUp,
  BarChart3,
  Users,
  Star,
  Quote,
  LayoutGrid,
  Smartphone,
  FlaskConical,
  ClipboardList,
  PieChart,
  ShieldCheck,
  CreditCard,
  Activity,
  MessageSquare,
  LayoutDashboard,
  Truck,
  BookOpen,
  Microscope,
  BarChart,
  Zap,
  ArrowRight,
  Stethoscope,
  Dna,
  FileText,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { labSystemGuide } from "../Data/Data";
import { useLocation } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#features") {
      const element = document.getElementById("features");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  const featureItems = [
    {
      icon: LayoutDashboard,
      title: labSystemGuide.dashboard.title,
      desc: labSystemGuide.dashboard.points[0],
      path: "/#features",
      color: "bg-saas-accent"
    },
    {
      icon: BookOpen,
      title: labSystemGuide.testMaster.title,
      desc: labSystemGuide.testMaster.setupCategories,
      path: "/#features",
      color: "bg-indigo-600"
    },
    {
      icon: CreditCard,
      title: labSystemGuide.paymentCollection.title,
      desc: labSystemGuide.paymentCollection.steps[0],
      path: "/#features",
      color: "bg-emerald-600"
    },
    {
      icon: FileText,
      title: labSystemGuide.reportPrinting.title,
      desc: labSystemGuide.reportPrinting.includes[0],
      path: "/#features",
      color: "bg-amber-600"
    },
    {
      icon: Settings,
      title: labSystemGuide.settings.title,
      desc: labSystemGuide.settings.config[0],
      path: "/#features",
      color: "bg-rose-600"
    },
    {
      icon: Users,
      title: labSystemGuide.patientManagement.title,
      desc: labSystemGuide.patientManagement.register[0],
      path: "/#features",
      color: "bg-cyan-600"
    },
    {
      icon: ClipboardList,
      title: labSystemGuide.bookings.title,
      desc: labSystemGuide.bookings.create[0],
      path: "/#features",
      color: "bg-violet-600"
    },
    {
      icon: Activity,
      title: labSystemGuide.reportEntry.title,
      desc: labSystemGuide.reportEntry.steps[0],
      path: "/#features",
      color: "bg-saas-accent"
    },
    {
      icon: ShieldCheck,
      title: labSystemGuide.qrVerification.title,
      desc: "Security verification for " + labSystemGuide.qrVerification.details.join(", "),
      path: "/#features",
      color: "bg-orange-600"
    }
  ];

  // 🔥 ensure refresh after full page load (layout stable)
  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Laptop Flip Animation
      if (imageRef.current && sectionRef.current) {
        gsap.set(imageRef.current, {
          rotateY: -180,
          transformOrigin: "center center",
          transformPerspective: 1000,
        });

        gsap.to(imageRef.current, {
          rotateY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }

    }, [sectionRef]);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);


  return (
    <div className="min-h-screen bg-ivory selection:bg-primary/10">
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="w-full px-6 lg:px-12 py-24 bg-white relative z-10">
        <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-faint border border-gold/20 text-[11px] font-bold tracking-widest text-gold uppercase"
            >
              <Star className="w-3 h-3 fill-gold" />
              <span>India's #1 Choice for Lab Excellence</span>
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-display font-black leading-[1.1] text-ink">
                Why Top Labs <br />
                <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Trust Our Software</span>
              </h2>
              <p className="text-lg text-smoke font-medium leading-relaxed max-w-xl">
                We empower pathology labs with cutting-edge digital tools to ensure 100% accuracy and maximum operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: CheckCircle, title: "Smart Operations", desc: "Digital registrations, testing logs, and automated billing." },
                { icon: TrendingUp, title: "Enhanced TAT", desc: "Reduce turnaround time with automated report generation." },
                { icon: BarChart3, title: "Lab Analytics", desc: "Gain deep insights into your lab's financial and diagnostic health." },
                { icon: Users, title: "Patient Portals", desc: "Let patients access reports instantly via WhatsApp and Web." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-ivory-2 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { val: "500+", label: "Labs" },
                { val: "40%", label: "Faster TAT" },
                { val: "99.9%", label: "Uptime" },
                { val: "4.9/5", label: "Rating" }
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-ivory border border-saas-border text-center group hover:border-primary/30 transition-all">
                  <div className="text-2xl font-display font-black text-ink group-hover:text-primary transition-colors">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-mist">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={girl}
                  alt="Pathology Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do We Do Section - Listing Layout */}
      <section id="features" className="relative bg-ivory-2 overflow-hidden py-24">
        <div className="w-full max-w-7xl mx-auto px-6">

          <div className="text-center space-y-4 mb-20 relative z-30">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-black text-ink"
            >
              What Do <span className="text-primary">We Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-smoke font-medium max-w-2xl mx-auto text-lg"
            >
              Explore our diagnostic ecosystem — empowering pathology labs through integrated smart solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="group relative flex flex-col h-full p-8 rounded-[1.5rem] bg-white border border-saas-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 grad-fire transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary-pale flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-bold text-ink group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-smoke text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* Solution Capabilities Section */}
      <section className="py-24 relative z-10 bg-ivory">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-widest"
            >
              <Zap className="w-4 h-4 fill-primary" />
              <span>Diagnostic Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight"
            >
              Features Designed For <br />
              <span className="text-gold">Modern Pathology Labs</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "QR-Validated Reports", 
                desc: "Secure QR codes on every report for instant verification and authenticity checks."
              },
              { 
                icon: Activity, 
                title: "Machine Interfacing", 
                desc: "Direct result syncing from lab analyzers to eliminate manual typing errors."
              },
              { 
                icon: MessageSquare, 
                title: "WhatsApp Alerts", 
                desc: "Send PDF reports and collection updates directly to patients' WhatsApp."
              },
              { 
                icon: FlaskConical, 
                title: "NABL Standards", 
                desc: "Integrated Quality Control and documentation to stay NABL compliant."
              },
              { 
                icon: Truck, 
                title: "Logistic Tracking", 
                desc: "Monitor home collection staff and sample transit status in real-time."
              },
              { 
                icon: CreditCard, 
                title: "GST Billing", 
                desc: "Fully automated GST invoicing and financial reporting for your lab."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group p-10 rounded-[2rem] bg-white border border-saas-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-ivory-2 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold-faint transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-smoke text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative grad-fire rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl shadow-primary/30">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-black text-white leading-tight"
              >
                Transform Your Lab <br />
                <span className="text-gold-light">Into a Smart Lab</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-lg md:text-xl font-medium"
              >
                Join 500+ labs that trust our software for their daily diagnostics and operational excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gold-faint hover:text-gold px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group"
                >
                  Book a Free Demo
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
