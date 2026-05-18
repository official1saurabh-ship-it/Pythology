import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import SKOLAPORTRAITE from '../assets/SKOLAPORTRAITE.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  return (
    <footer className="py-24 bg-ink text-white/80">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 grad-fire rounded-xl flex items-center justify-center text-white font-display text-xl">
                P
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Pathology<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Empowering pathology labs across India with smart, secure, and integrated diagnostic management solutions.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/biosoftech/' },
                { icon: Instagram, href: 'https://www.instagram.com/skolamitra/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/biosoftech-solutions/' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="font-display font-bold text-white text-sm uppercase tracking-widest">Solutions</h5>
            <ul className="space-y-4">
              {['Diagnostic Management', 'Lab Administration', 'Patient Portal', 'Analyzer Interfacing'].map((link) => (
                <li key={link}>
                  <Link 
                    to="/#features" 
                    onClick={(e) => handleScroll(e, 'features')} 
                    className="text-white/60 hover:text-gold transition-colors text-sm font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-display font-bold text-white text-sm uppercase tracking-widest">Resources</h5>
            <ul className="space-y-4">
              {[
                { name: 'System Status', path: '/system-status' },
                { name: 'Staff Training', path: '/staff-training' },
                { name: 'Patient Guide', path: '/patient-guide' },
                { name: 'Technical Support', path: '/technical-support' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/60 hover:text-gold transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-display font-bold text-white text-sm uppercase tracking-widest">Company</h5>
            <ul className="space-y-4">
              {['About Us', 'Pricing Plans', 'Contact Sales', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'About Us' ? '/about' : link === 'Pricing Plans' ? '/pricing' : link === 'Contact Sales' ? '/contact' : '/privacypolicy'} 
                    className="text-white/60 hover:text-gold transition-colors text-sm font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-medium">
            ┬⌐ {new Date().getFullYear()} Pathology by Biosoftech. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-white/40">
            <Link to="/privacypolicy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/termsofservice" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
