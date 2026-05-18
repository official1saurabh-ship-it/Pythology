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
    <div
      className="min-h-[200vh] bg-white pt-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FFF5F7 30%, #F5F3FF 70%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full -z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-pink-200/20 blur-[150px] rounded-full -z-0" />

      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-24 text-slate-900 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D9488]/10 backdrop-blur-md border border-[#0D9488]/20 text-[10px] lg:text-xs font-bold tracking-widest text-saas-accent w-fit uppercase"
          >
            <Star className="w-3 h-3 lg:w-4 h-4 text-saas-accent fill-saas-accent" />
            <span>LOVED BY PATHOLOGY ADMINISTRATORS</span>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black leading-[1.1] text-slate-900">
              Why Our <span className="text-saas-accent"> Clients</span> <br className="hidden sm:block" />
              <span className="text-slate-400">Love Us</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
              We don't just provide software; we become the <span className="underline decoration-[#0D9488]/40 decoration-4 underline-offset-4">growth partner</span> for your pathology's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: CheckCircle, title: "Simplify Lab Ops", desc: "Manage registrations, testing, and billing in a few clicks" },
              { icon: TrendingUp, title: "Increase Efficiency", desc: "Reduce manual paperwork and save valuable time" },
              { icon: BarChart3, title: "Real-time Lab Insights", desc: "Track diagnostic performance and finances instantly" },
              { icon: Users, title: "Satisfied Patients", desc: "Better communication leads to satisfied patients" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-[#0D9488]/30 transition-all duration-300">
                  <item.icon className="w-5 h-5 lg:w-6 h-6 text-slate-400 group-hover:text-saas-accent group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg text-slate-800 group-hover:text-saas-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 pt-4">
            {[
              { val: "500+", label: "Labs" },
              { val: "30%", label: "Avg. Efficiency" },
              { val: "40%", label: "Less Paperwork" },
              { val: "4.8/5", label: "Rating" }
            ].map((stat, i) => (
              <div key={i} className="p-3 lg:p-4 rounded-2xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg lg:text-2xl font-black text-slate-900">{stat.val}</div>
                <div className="text-[8px] lg:text-[10px] uppercase tracking-wider font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 lg:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden group max-w-2xl"
          >
            <Quote className="absolute -right-4 -top-4 w-24 lg:w-32 h-24 lg:h-32 text-[#0D9488]/10 rotate-12" />
            <p className="relative z-10 text-base lg:text-lg font-medium italic leading-relaxed text-slate-700">
              "Pathology has completely transformed the way we manage our institution. It's smart, simple, and super effective!"
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 h-12 rounded-full bg-gradient-to-tr from-[#0D9488]/20 to-indigo-100 flex items-center justify-center font-bold border border-white shadow-inner text-saas-accent text-sm lg:text-base">
                RK
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm lg:text-base">Rajesh Khanna</div>
                <div className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">Lab Director, City Pathology Lab</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full min-h-[400px] lg:min-h-0 overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
            <img
              src={girl}
              alt="Happy Lab Administrator"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </section>

      {/* What Do We Do Section - Listing Layout */}
      <section id="features" className="relative bg-white overflow-hidden py-24">
        <div className="w-full max-w-7xl mx-auto px-6">

          <div className="text-center space-y-4 mb-20 relative z-30">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900"
            >
              What Do <span className="text-saas-accent">We Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 font-medium max-w-2xl mx-auto text-lg"
            >
              Explore our ecosystem — empowering pathology labs through integrated solutions.
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
                <Link
                  to={item.path}
                  className="group relative flex flex-col h-full p-8 rounded-[2rem] bg-white border-2 border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#0D9488]/50 hover:shadow-2xl hover:shadow-[#0D9488]/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-saas-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-saas-accent font-bold tracking-widest text-xs pt-4 uppercase group-hover:gap-3 transition-all duration-300">
                      Explore Module <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* Solution Capabilities Section */}
      <section className="py-12 md:py-24 relative z-10 ">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D9488]/5 text-saas-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-4 h-4 fill-saas-accent" />
              <span>Engineered for Diagnostic Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              What Our Solutions <br className="hidden sm:block" />
              <span className="text-saas-accent text-2xl sm:text-3xl md:text-5xl">Can Do For Your Lab</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium max-w-2xl mx-auto text-base md:text-lg"
            >
              Streamline your administrative workflow and focus on diagnostics with tools built specifically for modern labs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "QR-Validated Reports", 
                desc: "Generate smart reports with secure QR codes for instant authenticity verification and patient trust.", 
                accent: "bg-saas-accent" 
              },
              { 
                icon: Activity, 
                title: "Analyzer Interfacing", 
                desc: "Directly sync results from lab machines to minimize manual entry errors and speed up TAT.", 
                accent: "bg-indigo-600" 
              },
              { 
                icon: MessageSquare, 
                title: "WhatsApp Automation", 
                desc: "Instantly deliver diagnostic reports and status updates to patients via WhatsApp and SMS.", 
                accent: "bg-emerald-600" 
              },
              { 
                icon: FlaskConical, 
                title: "NABL-Ready QC", 
                desc: "Maintain high laboratory standards with automated Quality Control logs and calibration tracking.", 
                accent: "bg-amber-600" 
              },
              { 
                icon: Truck, 
                title: "Sample Logistics", 
                desc: "Real-time logistics monitoring for home collections, sample transfers, and cold-chain status.", 
                accent: "bg-rose-600" 
              },
              { 
                icon: CreditCard, 
                title: "Financial Auditing", 
                desc: "GST-ready invoicing with detailed financial tracking, expense management, and secure payments.", 
                accent: "bg-violet-600" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="group p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-saas-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-saas-accent transition-all duration-500">
                  <item.icon className={`w-7 h-7 md:w-8 md:h-8 text-slate-600 group-hover:text-white transition-colors duration-500`} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-saas-accent transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-saas-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white leading-tight"
              >
                Ready to Transform Your <span className="text-saas-accent">Pathology Lab?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 text-lg md:text-xl font-medium"
              >
                Join hundreds of labs that have already streamlined their diagnostics and administrative workflows with our smart solution.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-saas-accent hover:bg-saas-accent/90 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-saas-accent/30 transition-all hover:scale-105 active:scale-95 group"
                >
                  Contact Us Now
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
