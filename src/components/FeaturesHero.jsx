import React from 'react';
import { motion } from 'framer-motion';

const FeaturesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-saas-bg">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-saas-accent/10 rounded-full blur-[120px] opacity-50"></div>
      
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            All-in-One pathology <br />
            <span className="bg-gradient-to-r from-saas-accent to-teal-400 bg-clip-text text-transpatient">
              Management Platform
            </span>
          </h1>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Everything you need to manage and grow your pathology. From patient records to staff management, we've got you covered with a modern, high-performance toolkit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pathology.biosoftech.in/register">
              <button className="bg-saas-accent hover:brightness-110 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-saas-accent/20 transition-all active:scale-95">
                Get Started
              </button>
            </a>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-saas-border px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesHero;



