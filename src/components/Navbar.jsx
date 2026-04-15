import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ onOpenContactForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${
          isScrolled 
          ? 'py-4 bg-[#050a0a]/70 backdrop-blur-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO (Left) */}
          <div className="flex-1 flex justify-start">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="text-white font-bold tracking-[3px] uppercase text-[10px]">Praveen</span>
            </div>
          </div>

          {/* CENTER LINKS (Desktop - Perfectly Centered) */}
          <div className="hidden md:flex items-center justify-center gap-10 flex-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px]  uppercase tracking-[2px] text-white hover:text-white transition-all no-underline relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#10b981] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT CTA (Right) */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <button
              onClick={onOpenContactForm}
              className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[2px] hover:bg-[#10b981] hover:text-white transition-all"
            >
              Let's Talk
            </button>

            {/* MOBILE TOGGLE */}
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE DRAWER (Slides from Right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Side Menu */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] z-[170] bg-[#0a0f0f] border-l border-white/10 p-10 md:hidden flex flex-col"
            >
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="self-end text-white/50 hover:text-white mb-12"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-8">
                <p className="text-[#10b981] font-mono text-[9px] tracking-[4px] uppercase mb-2">// Navigation</p>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white tracking-tight no-underline flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 text-[#10b981] transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContactForm(); }}
                  className="w-full bg-[#10b981] text-black py-4 rounded-xl font-bold uppercase tracking-[2px] text-[10px]"
                >
                  Start Project
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        a { text-decoration: none !important; color: inherit; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </>
  );
};

export default Navbar;