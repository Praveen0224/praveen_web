import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-[#050a0a] text-white pt-32 pb-12 px-6 relative overflow-hidden border-t border-white/5">
      
      {/* AMBIENT MIST */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: THE BIG "CONTACT" CIRCLE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8">
              Let's create <br /> 
              <span className="text-[#10b981]">Together.</span>
            </h2>
            <div className="flex items-center gap-3 text-white/30 font-mono text-[10px] tracking-[4px] uppercase">
              <span className="w-12 h-[1px] bg-white/10"></span>
              Available for global opportunities
            </div>
          </div>
          
          {/* PREMIUM CIRCLE BUTTON */}
          <motion.a 
            href="mailto:hello@praveen.com"
            whileHover={{ scale: 1.05, borderColor: '#10b981' }}
            className="group relative flex items-center justify-center w-44 h-44 rounded-full border border-white/10 transition-all duration-700 bg-transparent hover:bg-white/5"
          >
            <div className="text-center z-10">
              <span className="block text-[10px] font-bold uppercase tracking-[4px] text-white/40 group-hover:text-[#10b981] transition-colors mb-2">Get in</span>
              <span className="block text-2xl font-bold uppercase tracking-tighter">Touch</span>
            </div>
            {/* Pulsing Dot */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-[#10b981] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_#10b981]" />
          </motion.a>
        </div>

        {/* MIDDLE SECTION: THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="space-y-8">
            <div className="text-2xl font-black tracking-tighter uppercase">
              Praveen<span className="text-[#10b981]">.</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
              Architecting high-performance digital products with technical logic and visual precision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 hover:bg-[#10b981] hover:text-[#050a0a] transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[5px] uppercase text-[#10b981] mb-10">Sitemap</h4>
            <ul className="space-y-5">
              {['About', 'Works', 'Studio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-lg font-bold hover:text-[#10b981] transition-colors flex items-center gap-3 group">
                    <span className="w-0 h-[1px] bg-[#10b981] group-hover:w-6 transition-all duration-500"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[5px] uppercase text-[#10b981] mb-10">Inquiries</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] text-white/30 mb-2 uppercase tracking-widest font-bold">Project Inquiries</p>
                <a href="mailto:work@praveen.com" className="text-lg font-bold hover:text-[#10b981] transition-colors border-b border-white/5 pb-1 block">
                  work@praveen.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/30 mb-2 uppercase tracking-widest font-bold">Office</p>
                <p className="text-lg font-bold">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* SYSTEM STATUS BOX */}
          <div className="bg-white/[0.02] p-8 rounded-sm border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                <Send size={40} className="text-[#10b981]" />
             </div>
            <p className="text-sm leading-relaxed text-white/50 font-medium relative z-10">
              "Focusing on the intersection of clean architecture and meaningful user experiences."
            </p>
            <div className="mt-8 flex items-center gap-3 text-[#10b981]">
              <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-ping"></div>
              <span className="text-[10px] font-bold uppercase tracking-[3px]">System Active</span>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-mono tracking-[3px] text-white/20 uppercase">
            © {currentYear} Praveen — Architect of Digital Spaces
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[4px] text-white/40 hover:text-white transition-all"
          >
            Scroll to Top 
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#10b981] group-hover:text-[#10b981] transition-all duration-500">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;