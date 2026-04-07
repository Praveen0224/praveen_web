import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Code, Figma, PenTool, Terminal, Users, Mail } from 'lucide-react';

const Services = () => {
  const [index, setIndex] = useState(0);

  const services = [
    { title: "Web Development", desc: "High-performance, scalable web apps.", icon: <Code size={18} />, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" },
    { title: "UI/UX Designing", desc: "Intuitive interfaces & experiences.", icon: <Figma size={18} />, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
    { title: "Graphic Designing", desc: "Visual storytelling and branding.", icon: <PenTool size={18} />, img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80" },
    { title: "Tech Guidance", desc: "Strategic consulting & architecture.", icon: <Terminal size={18} />, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80" },
    { title: "Mentorship", desc: "Guiding master-level craft.", icon: <Users size={18} />, img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" },
    { title: "Start a project", desc: "Let's work together", icon: <Mail size={18} />, img: "", isContact: true }
  ];

  // Auto-scroll logic for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000); // Change card every 3 seconds
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="bg-[#050a0a] text-white py-20 px-6 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-12">
          <div className="w-12 h-[2px] bg-[#10b981] mb-4"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter lowercase">
            what I <span className="text-[#10b981]">do.</span>
          </h2>
        </div>

        {/* DESKTOP GRID (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* MOBILE VERTICAL AUTO-SCROLL (Visible only on Mobile) */}
        <div className="md:hidden relative h-32 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <ServiceCard service={services[index]} isMobile={true} />
            </motion.div>
          </AnimatePresence>
          
          {/* Progress dots */}
          <div className="absolute -bottom-8 flex gap-2">
            {services.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${index === i ? 'bg-[#10b981] w-4' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Reusable Card Component
const ServiceCard = ({ service, isMobile = false }) => {
  const isHighlight = service.isContact;
  
  return (
    <div className={`
      relative flex items-center rounded-2xl overflow-hidden h-32  transition-all duration-500
      ${isHighlight ? 'bg-[#065f46] shadow-xl' : 'bg-[#0a0f0f] hover:bg-[#0e1414] '}
    `}>
      {/* IMAGE / ICON SECTION */}
      <div className={`relative w-28 h-full shrink-0 flex items-center justify-center overflow-hidden ${isHighlight ? 'bg-black/10' : ''}`}>
        {isHighlight ? (
          <Mail className="text-white/80" size={isMobile ? 22 : 28} />
        ) : (
          <>
            <img src={service.img} className="w-full h-full object-cover grayscale opacity-60" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0f0f]" />
          </>
        )}
      </div>

      {/* TEXT CONTENT - Responsive Sizes */}
      <div className="flex-1 px-4 md:px-6 flex flex-col justify-center gap-1 overflow-hidden">
        <h3 className={`
          font-extrabold uppercase tracking-widest leading-tight
          ${isMobile ? 'text-[10px]' : 'text-[11px]'}
          ${isHighlight ? 'text-white' : 'group-hover:text-[#10b981]'}
        `}>
          {service.title}
        </h3>
        <p className={`
          leading-tight font-medium
          ${isMobile ? 'text-[9px]' : 'text-[10px]'}
          ${isHighlight ? 'text-white/60' : 'text-white/30'}
        `}>
          {service.desc}
        </p>
      </div>

      {/* ARROW */}
      <div className="pr-5 shrink-0">
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center transition-all
          ${isHighlight ? 'bg-black/20 text-white' : 'bg-[#10b981] text-[#050a0a] shadow-lg'}
        `}>
          <ChevronRight size={14} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default Services;