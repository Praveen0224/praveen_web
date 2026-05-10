import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Terminal, CheckCircle2, layers, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Code Wild Tech",
      role: "Fullstack Developer",
      location: "Trivandrum",
      period: "2025 — PRESENT",
      points: [
        "Leading the architecture of high-performance web applications using the T3 stack (Next.js, TypeScript, Tailwind).",
        "Optimizing server-side rendering and API response times by 40% through efficient PostgreSQL indexing.",
        "Managing cloud deployments and CI/CD pipelines to ensure 99.9% uptime for client ecosystems."
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      company: "Get Innovative",
      role: "Web Developer",
      location: "Azaghiyamandapam",
      period: "2024 — 2025",
      points: [
        "Engineered 15+ responsive landing pages with a focus on pixel-perfect UI and fluid Framer Motion animations.",
        "Collaborated with UI/UX designers to transform complex Figma prototypes into interactive React components.",
        "Improved cross-browser compatibility and mobile-first performance scores to 95+ on Lighthouse."
      ],
      tech: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "Figma"]
    }
  ];

  return (
    <section className="bg-[#fcfcfc] py-32 px-6 overflow-hidden" id="experience">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[#10b981] font-mono text-[11px] font-bold tracking-[10px] uppercase mb-4"
          >
            <Terminal size={14} /> Career Milestone
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
            Experience<span className="text-[#10b981]">.</span>
          </h2>
        </header>

        {/* 2-Card Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -12 }}
              className="group relative bg-white border border-slate-200 p-10 md:p-14 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.12)] hover:border-[#10b981] transition-all duration-700"
            >
              {/* Floating Decorative Icon */}
              <div className="absolute top-10 right-10 text-slate-100 group-hover:text-[#10b981]/20 transition-colors duration-500">
                <Globe size={80} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                {/* Period & Location */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 bg-slate-900 text-white font-mono text-[10px] font-bold rounded-full uppercase tracking-widest">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-tighter">
                    <MapPin size={14} className="text-[#10b981]" /> {exp.location}
                  </div>
                </div>

                {/* Company & Role */}
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                  {exp.company}
                </h3>
                <div className="inline-flex items-center gap-2 text-[#10b981] font-black text-xs tracking-[3px] uppercase mb-10 bg-[#10b981]/5 px-4 py-2 rounded-lg">
                   <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                   {exp.role}
                </div>

                {/* Expanded Bullet Points */}
                <div className="space-y-4 mb-10">
                  {exp.points.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start text-slate-500">
                      <CheckCircle2 size={18} className="text-[#10b981] mt-1 shrink-0" />
                      <p className="text-sm md:text-base font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                  {exp.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-100 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;