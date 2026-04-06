import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Send, Terminal } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "5+", label: "Project Done" },
    { value: "20+", label: "Students Mentored" },
    { value: "2+", label: "Year Experience" },
    { value: "UI/UX", label: "Design Strategy" },
  ];

  return (
    <div className="bg-[#050a0a] text-white font-sans min-h-screen flex items-center overflow-hidden relative">
      
      {/* THEME AMBIENCE */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[50%] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none" />

      <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        
        {/* MAIN CONTENT: Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start mb-20 md:mb-32">
          
          {/* COLUMN 1: IMAGE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group max-w-[400px] lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="absolute -inset-2 bg-[#10b981]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative aspect-square bg-gray-900 rounded-sm overflow-hidden border border-white/5">
              <img 
                src="/about1.jpg" 
                alt="Praveen" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
            </div>
          </motion.div>

          {/* COLUMN 2: BIO */}
          <div className="flex flex-col pt-0 lg:pt-4">
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8 relative">
              <span className="float-left text-5xl md:text-6xl font-serif mr-3 mt-1 text-[#10b981] leading-none font-bold">
                P
              </span>
              raveen is a Full-stack developer architecting high-performance digital products. 
              He focuses on the intersection of <span className="text-white">technical logic</span> and visual precision, 
              ensuring that every line of code contributes to a seamless user experience. 
            </p>
            
            <div className="border-l border-[#10b981]/40 pl-6 py-2 italic text-white/30 text-xs md:text-sm">
              "Building the future of the web through scalable code and intuitive design."
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-[#10b981] text-[10px] font-mono tracking-[4px] uppercase opacity-70">
              <Terminal size={12} /> // Lead Developer
            </div>
          </div>

          {/* COLUMN 3: HEADLINE & NEW BUTTONS */}
          <div className="relative pt-0 lg:pt-4">
            <span className="text-[#10b981] font-mono text-[10px] tracking-[6px] uppercase mb-4 md:mb-6 block">
              # Profile
            </span>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tighter relative z-10 mb-8 md:mb-12">
              Guiding you <br className="hidden md:block"/> through the <br/> 
              <span className="text-[#10b981]">Digital World.</span>
            </h2>
            
            {/* BUTTON GROUP: Responsive Flex */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#10b981] text-[#050a0a] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-all group"
              >
                Contact Me <Send size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all"
              >
                Resume <FileText size={14} />
              </a>
            </div>

            {/* WATERMARK: Hidden on small mobile to avoid clutter */}
            <div className="absolute -bottom-16 -right-12 text-[120px] md:text-[180px] font-black select-none pointer-events-none opacity-[0.03] leading-none tracking-tighter hidden sm:block"
                 style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              About
            </div>
          </div>
        </div>

        {/* BOTTOM STATS: Responsive Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/5 pt-16 md:pt-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-[#10b981] group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-500">
                {stat.value}
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[3px] md:tracking-[4px] leading-tight font-mono text-white/20 group-hover:text-white/40 transition-colors mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default About;