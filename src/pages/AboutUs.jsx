import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, Heart, Award, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-ivory">

      <div className="w-full max-w-[1180px] mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[11px] font-bold tracking-widest text-primary uppercase">
            Our Mission & Vision
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-ink leading-tight max-w-4xl mx-auto">
            Empowering Labs Through <br />
            <span className="text-primary italic">Diagnostic Innovation</span>
          </h1>
          <p className="text-xl text-smoke font-medium max-w-2xl mx-auto leading-relaxed">
            Pathology is dedicated to simplifying laboratory management and fostering excellence through smart, integrated technology.
          </p>
        </motion.div>

        {/* Story Section */}
        <section className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-black text-ink">Our Story</h2>
              <div className="w-20 h-1.5 grad-fire rounded-full" />
              <p className="text-lg text-smoke leading-relaxed font-medium">
                Founded with a vision to bridge the gap between traditional diagnostic centers and modern technology, Pathology has grown into a comprehensive ecosystem trusted by hundreds of laboratories across India. 
              </p>
              <p className="text-lg text-smoke leading-relaxed font-medium">
                We believe that by reducing administrative burdens, healthcare professionals can focus on what truly matters: <span className="text-primary font-bold">patient care and accuracy.</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="p-8 rounded-[2rem] bg-white border border-saas-border shadow-sm text-center">
                  <div className="text-3xl font-display font-black text-primary mb-1">500+</div>
                  <div className="text-[10px] font-bold text-mist uppercase tracking-widest">Active Labs</div>
                </div>
                <div className="p-8 rounded-[2rem] bg-primary text-white shadow-xl shadow-primary/20 text-center">
                  <div className="text-3xl font-display font-black mb-1">99%</div>
                  <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Accuracy</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-8 rounded-[2rem] bg-gold text-white shadow-xl shadow-gold/20 text-center">
                  <div className="text-3xl font-display font-black mb-1">24/7</div>
                  <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Support</div>
                </div>
                <div className="p-8 rounded-[2rem] bg-white border border-saas-border shadow-sm text-center">
                  <div className="text-3xl font-display font-black text-primary mb-1">10M+</div>
                  <div className="text-[10px] font-bold text-mist uppercase tracking-widest">Reports</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[2.5rem] bg-white border border-saas-border space-y-6 hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="w-14 h-14 bg-primary-pale rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-black text-ink">Our Mission</h3>
              <p className="text-smoke leading-relaxed font-medium text-lg">
                To provide accessible, user-friendly, and powerful management tools that empower every lab administrator, technician, and patient to collaborate effectively.
              </p>
            </div>
            <div className="p-12 rounded-[2.5rem] grad-fire text-white space-y-6 shadow-2xl shadow-primary/20">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-display font-black text-white">Our Vision</h3>
              <p className="text-white/80 leading-relaxed font-medium text-lg">
                To become the global standard for Laboratory Information Management Systems (LIMS), driving data-informed decisions that transform the diagnostic landscape.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-12 pt-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-black text-ink">Our Core Values</h2>
              <p className="text-smoke font-medium">The principles that guide our every innovation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Precision", icon: Shield, desc: "Rigorous data validation ensuring 100% diagnostic accuracy." },
                { title: "Compassion", icon: Heart, desc: "Building technology that keeps the patient journey at the center." },
                { title: "Excellence", icon: Award, desc: "Commitment to world-class standards in every line of code." }
              ].map((value, i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-white border border-saas-border space-y-6 group hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-ivory-2 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-display font-black text-ink">{value.title}</h4>
                  <p className="text-mist leading-relaxed font-medium">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-20 text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-ink">Join our growing family</h2>
            <p className="text-smoke font-medium text-lg italic">"Pathology is more than just software; it's a movement towards smarter healthcare."</p>
            <button className="grad-fire text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30 flex items-center gap-3 mx-auto">
              <a href='https://www.biosoftech.com/'>Contact Our Founders</a>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AboutUs;
