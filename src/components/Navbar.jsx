import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  CreditCard,
  LifeBuoy,
  Menu,
  X,
  ChevronDown,
  Mail,
  Info,
  Activity,
  Users,
  MessageSquare,
  ShieldCheck,
  Truck,
  BookOpen,
  Building2,
  BarChart,
  Smartphone,
  Coffee,
  Settings
} from 'lucide-react';
import SKOLA from "../assets/SKOLA.png";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Features', path: '/#features', icon: LayoutGrid },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Pricing', path: '/pricing', icon: CreditCard },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  // Helper function for smooth scroll on same page
  const handleScrollTo = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  // Helper function to determine if a link is active
  const checkActive = (itemPath) => {
    if (itemPath === '/') return location.pathname === '/' && !location.hash;
    if (itemPath.startsWith('/#')) return location.hash === itemPath.substring(1);
    return location.pathname.startsWith(itemPath);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ivory/95 backdrop-blur-xl border-b border-saas-border shadow-lg shadow-primary/5' : 'bg-transparent'}`}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 grad-fire rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center text-white font-display text-xl">
                P
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-ink">
                Pathology<span className="text-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = checkActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => {
                    if (item.path.startsWith('/#')) {
                      handleScrollTo(e, item.path.substring(2));
                    }
                  }}
                  className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-primary bg-primary-pale' : 'text-smoke hover:text-primary hover:bg-primary-pale/50'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://pytho.biosoftech.in/login" className="grad-fire text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-ink hover:text-primary transition-colors active:scale-90"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-saas-border overflow-hidden"
          >
            <div className="px-6 pt-2 pb-8 space-y-1">
              {navItems.map((item) => {
                const isActive = checkActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => {
                      if (item.path.startsWith('/#')) {
                        handleScrollTo(e, item.path.substring(2));
                      }
                    }}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold transition-colors ${isActive
                      ? 'bg-primary-pale text-primary'
                      : 'text-smoke hover:bg-ivory'
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-6">
                <a href="https://pytho.biosoftech.in/login" className="block w-full px-4 py-3 rounded-xl grad-fire text-center text-white font-bold text-sm shadow-lg active:scale-95">
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

