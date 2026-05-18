import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Empowering Labs Through <span className="text-saas-accent">Innovation</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Pathology is dedicated to simplifying laboratory management and fostering diagnostic excellence through smart, integrated technology.
          </p>
        </motion.div>

        {/* Story Section */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest text-sm">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with a vision to bridge the gap between traditional diagnostic centers and modern technology, Pathology has grown into a comprehensive ecosystem trusted by hundreds of laboratories. We believe that by reducing administrative burdens, healthcare professionals can focus on what truly matters: patient care and accuracy.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#0D9488]/5 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-saas-accent" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide accessible, user-friendly, and powerful management tools that empower every lab administrator, technician, and patient to collaborate effectively.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-saas-accent/5 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-saas-accent" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the global standard for Laboratory Information Management Systems (LIMS), driving data-informed decisions that transform the diagnostic landscape.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8 pt-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest text-sm text-center">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Precision", icon: Shield, desc: "We ensure diagnostic accuracy through rigorous data validation and secure records." },
                { title: "Patient First", icon: Users, desc: "Every feature we build is designed to improve the patient experience and care journey." }
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <value.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">{value.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-20 text-center space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Join our growing family</h2>
            <p className="text-slate-500 font-medium">Have questions about our journey? We'd love to hear from you.</p>
            <button className="bg-saas-accent text-white px-8 py-4 rounded-2xl font-bold hover:bg-saas-accent/90 transition-colors shadow-lg shadow-saas-accent/20">
              <a href='https://www.biosoftech.com/'>Get in Touch</a>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;



