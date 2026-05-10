import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Projects', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/praveen-kumar-b07662219/" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/praveen.uiux/" },
    { icon: <Mail size={18} />, href: "mailto:praveenkumarak02@gmail.com" },
  ];

  return (
    <footer className="bg-[#050a0a] py-16 px-6 relative overflow-hidden">
      
      {/* Top Divider Line (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      <div className="max-w-7xl mx-auto">
        
        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          
          {/* 1. BRAND & STATUS */}
          <div className="flex flex-col items-center md:items-start group">
            <div className="text-2xl font-black tracking-tighter uppercase text-white leading-none">
              Praveen<span className="text-[#10b981]">.</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span>
              <p className="text-[9px] text-white/20 tracking-[3px] uppercase font-bold">Available for hire</p>
            </div>
          </div>

          {/* 2. NAVIGATION & CONTACT BUTTON */}
          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <ul className="flex items-center gap-8 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* Added multiple 'no-underline' variants to force-override global CSS */}
                  <a 
                    href={link.href} 
                    className="text-[11px] font-bold uppercase tracking-[2px] !text-white/40 hover:!text-white transition-all duration-300 no-underline !decoration-transparent hover:no-underline border-none outline-none inline-block shadow-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CONTACT ME BUTTON - Also ensuring no underline here */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white !text-black px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#10b981] hover:!text-white transition-colors no-underline !decoration-transparent inline-block border-none"
            >
              Contact Me
            </motion.a>
          </nav>

          {/* 3. SOCIAL ICONS */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, i) => (
              <motion.a 
                key={i} 
                href={social.href} 
                whileHover={{ y: -4, color: '#10b981' }}
                className="!text-white/30 transition-colors no-underline !decoration-transparent border-none flex items-center justify-center p-1"
              >
                {social.icon}
              </motion.a>
            ))}
            
            {/* Scroll Top Icon */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-4 !text-white/20 hover:!text-white transition-all border-none outline-none focus:outline-none"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[9px] font-medium tracking-[3px] text-white/10 uppercase">
          <p>© {currentYear} Praveen — Digital Experience Designer</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white/30 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/30 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;