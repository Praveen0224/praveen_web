import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Terminal, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "5+", label: "Project Done" },
    { value: "20+", label: "Students Mentored" },
    { value: "2+", label: "Year Experience" },
    { value: "UI/UX", label: "Design Strategy" },
  ];

  // Common class to kill blue/underline globally for these links
  const linkReset = "no-underline !no-underline !decoration-transparent border-none outline-none shadow-none";

  return (
    <div className="bg-[#050a0a] text-white font-sans min-h-screen flex items-center overflow-hidden relative" id="about">
      
      {/* THEME AMBIENCE */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[50%] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none" />

      <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        
        {/* MAIN CONTENT: Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start mb-20 md:mb-32">
          
          {/* COLUMN 1: IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group max-w-[400px] lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#10b981]/20 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative aspect-[4/5] bg-[#0a0f0f] rounded-lg overflow-hidden ">
              <img 
                src="/about1.jpg" 
                alt="Praveen" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
            </div>
          </motion.div>

          {/* COLUMN 2: BIO */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col pt-0 lg:pt-4"
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
  <span className="block text-white text-lg md:text-xl font-semibold mb-2">
    I design experiences. I build products.
  </span>

  A UI/UX designer and full-stack developer with 2+ years of hands-on experience, I craft digital solutions that are not just functional—but meaningful. From intuitive interfaces to scalable web applications, I blend 
  <span className="text-white font-semibold"> creativity</span> with 
  <span className="text-white font-semibold"> clean code</span> to bring ideas to life.  

  <br /><br />

  Beyond building products, I mentor and train aspiring designers and developers through structured courses—helping them 
  <span className="text-white font-semibold"> think</span>, 
  <span className="text-white font-semibold"> create</span>, and 
  <span className="text-white font-semibold"> grow</span> in the real world.
</p>
            
            <div className="border-l-2 border-[#10b981] pl-6 py-1 italic text-white/40 text-xs md:text-sm bg-white/[0.02] rounded-r-lg">
              "Transforming complex problems into elegant, functional digital solutions."
            </div>
            
            <div className="mt-10 flex items-center gap-3 text-[#10b981] text-[10px] font-mono tracking-[4px] uppercase opacity-80">
              <div className="w-8 h-[1px] bg-[#10b981]/30"></div>
              <Terminal size={14} /> // Lead Developer
            </div>
          </motion.div>

          {/* COLUMN 3: HEADLINE & PREMIUM BUTTONS */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="relative pt-0 lg:pt-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-[#10b981]" />
              <span className={`text-[#10b981] font-mono text-[10px] tracking-[6px] uppercase ${linkReset}`}>
                Profile
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tighter relative z-10 mb-8 md:mb-12">
              Guiding you <br className="hidden md:block"/> through the <br/> 
              <span className="text-[#10b981]">Digital World.</span>
            </h2>
            
            {/* BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-3 px-8 py-4 bg-[#10b981] !text-[#050a0a] font-bold text-[11px] uppercase tracking-[2px] rounded-full transition-all group shadow-[0_10px_20px_rgba(16,185,129,0.15)] ${linkReset}`}
              >
                Contact Me 
                <Send size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a 
                href="/resume.pdf" 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/10 !text-white font-bold text-[11px] uppercase tracking-[2px] rounded-full transition-all ${linkReset}`}
              >
                Resume <FileText size={14} />
              </motion.a>
            </div>

            {/* WATERMARK */}
            <div className="absolute -bottom-16 -right-12 text-[120px] md:text-[180px] font-black select-none pointer-events-none opacity-[0.02] leading-none tracking-tighter hidden sm:block"
                 style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              About
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/5 pt-16 md:pt-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-[#10b981] group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-500 select-none">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[4px] leading-tight font-mono text-white/30 group-hover:text-[#10b981] transition-colors mt-3">
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