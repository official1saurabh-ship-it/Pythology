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
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">

              <img src={SKOLAPORTRAITE} alt="" className="w-50 h-20" />
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Empowering pathology labs with smart diagnostic management solutions for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a href='https://www.facebook.com/biosoftech/'>  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Facebook className="w-5 h-5" /></div></a>
              {/* <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Twitter className="w-5 h-5" /></div>/ */}
              <a href='https://www.instagram.com/skolamitra/'> <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Instagram className="w-5 h-5" /></div></a>
              <a href='https://www.linkedin.com/company/biosoftech-solutions/posts/?feedView=all'> <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Linkedin className="w-5 h-5" /></div></a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Features</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li><Link to="/#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-saas-accent transition-colors cursor-pointer">Diagnostic Management</Link></li>
              <li><Link to="/#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-saas-accent transition-colors cursor-pointer">Administration</Link></li>
              <li><Link to="/#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-saas-accent transition-colors cursor-pointer">Patient Portal</Link></li>
              <li><Link to="/#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-saas-accent transition-colors cursor-pointer">Facility Management</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li><Link to="/pathology-help-desk" className="hover:text-saas-accent transition-colors cursor-pointer">Pathology Help Desk</Link></li>
              <li><Link to="/patient-guide" className="hover:text-saas-accent transition-colors cursor-pointer">Patient Guide</Link></li>
              <li><Link to="/system-status" className="hover:text-saas-accent transition-colors cursor-pointer">System Status</Link></li>
              <li><Link to="/staff-training" className="hover:text-saas-accent transition-colors cursor-pointer">Staff Training</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li><Link to="/about" className="hover:text-saas-accent transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-saas-accent transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-saas-accent transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="  flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} Pathology. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <span onClick={() => navigate("/privacypolicy")} className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
            <span onClick={() => navigate("/termsofservice")} className="hover:text-slate-900 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
