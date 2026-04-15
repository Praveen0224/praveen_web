import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Code, Figma, PenTool, Terminal, Users, Mail } from 'lucide-react';

const Services = ({ onOpenContactForm }) => {
  const [index, setIndex] = useState(0);

  const services = [
    { title: "Web Development", desc: "High-performance, scalable web apps.", icon: <Code size={18} />, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" },
    { title: "UI/UX Designing", desc: "Intuitive interfaces & experiences.", icon: <Figma size={18} />, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
    { title: "Graphic Designing", desc: "Visual storytelling and branding.", icon: <PenTool size={18} />, img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80" },
    { title: "Tech Guidance", desc: "Strategic consulting & architecture.", icon: <Terminal size={18} />, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80" },
    { title: "Mentorship", desc: "Guiding master-level craft.", icon: <Users size={18} />, img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" },
    { title: "Start a project", desc: "Let's work together", icon: <Mail size={18} />, img: "", isContact: true }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [services.length]);

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="bg-[#050a0a] text-white py-20 px-6 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & ABOUT DESCRIPTION - Fixed Mobile Font Sizes */}
        <motion.div 
          {...slideInRight}
          className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <div className="w-12 h-[2px] bg-[#10b981] mb-6"></div>
            {/* Changed from text-4xl to text-3xl on mobile */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter lowercase leading-tight">
              what I <span className="text-[#10b981]">do</span>
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
              I specialize in bridging the gap between <span className="text-white">complex engineering</span> and <span className="text-white">elegant design</span>. 
              My goal is to provide end-to-end digital excellence.
            </p>
          </div>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...slideInRight}
              transition={{ ...slideInRight.transition, delay: i * 0.1 }}
            >
              <ServiceCard service={service} onOpenContactForm={onOpenContactForm} />
            </motion.div>
          ))}
        </div>

        {/* MOBILE VERTICAL AUTO-SCROLL - Fixed Container Spacing */}
        <motion.div 
          {...slideInRight}
          className="md:hidden relative min-h-[128px] flex justify-center items-center mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ServiceCard service={services[index]} isMobile={true} onOpenContactForm={onOpenContactForm} />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -bottom-10 flex gap-2">
            {services.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${index === i ? 'bg-[#10b981] w-5' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const ServiceCard = ({ service, isMobile = false, onOpenContactForm }) => {
  const isHighlight = service.isContact;
  
  return (
    <button
      type="button"
      onClick={isHighlight ? onOpenContactForm : undefined}
      className={`
      relative group flex items-center rounded-2xl overflow-hidden h-32 transition-all duration-500 cursor-pointer w-full border-none p-0
      text-left
      ${isHighlight ? 'bg-[#10b981] !text-black shadow-[0_10px_30px_rgba(16,185,129,0.2)]' : 'bg-[#0a0f0f] hover:bg-[#0e1414]'}
    `}>
      {/* IMAGE / ICON SECTION - Adjusted width for mobile to save space */}
      <div className={`relative ${isMobile ? 'w-24' : 'w-28'} h-full shrink-0 flex items-center justify-center overflow-hidden ${isHighlight ? 'bg-black/5' : ''}`}>
        {isHighlight ? (
          <Mail className="text-black/80" size={isMobile ? 22 : 28} />
        ) : (
          <>
            <img src={service.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f0f]" />
          </>
        )}
      </div>

      {/* TEXT CONTENT - Forced no-wrap prevention and smaller mobile text */}
      <div className="flex-1 px-3 md:px-5 flex flex-col justify-center gap-1 overflow-hidden">
        <h3 className={`
          font-black uppercase tracking-[1.5px] md:tracking-[2px] leading-tight break-words
          ${isMobile ? 'text-[9px]' : 'text-[11px]'}
          ${isHighlight ? 'text-black' : 'text-white group-hover:text-[#10b981]'}
        `}>
          {service.title}
        </h3>
        <p className={`
          leading-tight font-bold line-clamp-2
          ${isMobile ? 'text-[8px]' : 'text-[10px]'}
          ${isHighlight ? 'text-black/60' : 'text-white/20 group-hover:text-white/40'}
        `}>
          {service.desc}
        </p>
      </div>

      {/* ARROW */}
      <div className={`${isMobile ? 'pr-3' : 'pr-6'} shrink-0`}>
        <div className={`
          ${isMobile ? 'w-7 h-7' : 'w-9 h-9'} rounded-full flex items-center justify-center transition-all duration-500
          ${isHighlight ? 'bg-black/10 text-black' : 'bg-white/5 text-white/40 group-hover:bg-[#10b981] group-hover:text-[#050a0a]'}
        `}>
          <ChevronRight size={isMobile ? 12 : 16} strokeWidth={3} />
        </div>
      </div>
    </button>
  );
};

export default Services;