import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Shield, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Services', href: '#services', icon: <Shield size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* 1. TOP NAV (Enhanced Glass Effect) */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-5 md:px-16 h-16 md:h-20 flex items-center justify-between ${
          isScrolled 
          ? 'bg-[#050a0a]/80 backdrop-blur-2xl border-b border-white/5' 
          : 'bg-white/5 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-white font-black tracking-[3px] uppercase text-[10px] md:text-xs">Praveen</span>
        </div>
        
        {/* Desktop Links Only */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[3px] text-white hover:text-[#10b981] transition-all !no-underline border-none">
              {link.name}
            </a>
          ))}
        </div>

        {/* Minimalist Contact Button */}
        <a 
          href="#contact" 
          className="px-3 py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[2px] rounded-full hover:bg-[#10b981] hover:text-black transition-all !no-underline"
        >
          Hire Me
        </a>
      </motion.nav>

      {/* 2. BOTTOM DOCK (Increased Width & Glass Effect) */}
      <div className="md:hidden fixed bottom-6 left-0 w-full z-[110] flex justify-center px-6 pointer-events-none">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          /* Increased px-4 and gap to make it wider */
          className="pointer-events-auto bg-white/5 backdrop-blur-2xl p-2 px-4 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center "
        >
          <div className="flex items-center gap-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileTap={{ scale: 0.8 }}
                className="p-3.5 rounded-full text-white/80 transition-all !no-underline border-none flex items-center justify-center hover:text-[#10b981] hover:bg-white/10 relative group"
              >
                {link.icon}
                {/* Active Indicator Dot */}
                <div className="absolute bottom-1 w-1 h-1 bg-[#10b981] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* GLOBAL CSS OVERRIDES */}
      <style>{`
        a, a:hover, a:visited, a:active {
          text-decoration: none !important;
          color: white !important;
          border: none !important;
          outline: none !important;
        }
        /* Button Hover Fix */
        a[href="#contact"]:hover {
          color: black !important;
        }
        /* Selection & Highlight Fix */
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </>
  );
};

export default Navbar;