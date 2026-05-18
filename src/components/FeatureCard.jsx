import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FeatureCard = ({ title, items, description, icon: Icon }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative group p-8 rounded-3xl bg-saas-card border border-saas-border hover:border-saas-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-saas-accent/10"
    >
      {/* Gradient Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-saas-accent/20 to-transpatient opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-saas-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-saas-accent" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-300">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-saas-accent/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-saas-accent" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FeatureCard;



