import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Marketplace",
      desc: "High-performance fullstack platform with secure payments and seamless UX.",
      tech: ["Next.js", "MongoDB", "Stripe"],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      id: 2,
      title: "AI Chat Application",
      desc: "Real-time chat experience powered by AI with fast communication.",
      tech: ["Socket.io", "Tailwind", "OpenAI"],
      img: "https://images.unsplash.com/photo-1618005182382-a4d449d16b2f?w=800&q=80",
    },
    {
      id: 3,
      title: "Job Analytics Platform",
      desc: "Smart job matching system with resume parsing and data visualization.",
      tech: ["TypeScript", "Firebase", "D3.js"],
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    },
  ];

  return (
    <section className="bg-[#050a0a] text-white py-24 px-6 overflow-hidden relative" id="projects">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* HEADER */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#10b981] font-mono text-[10px] tracking-[6px] mb-4 uppercase flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-[#10b981]"></span> Portfolio
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Selected <span className="text-[#10b981]">Works.</span>
            </h2>
          </div>
          
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-xs font-mono uppercase tracking-widest">
            // Building digital <br /> ecosystems that scale.
          </p>
        </header>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* SOLID BACKGROUND NUMBER */}
              <div className="absolute -top-10 -left-6 text-7xl font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500 text-white">
                0{project.id}
              </div>

              {/* IMAGE WRAPPER (No Outlines) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-gray-900">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                
                {/* SUBTLE OVERLAY */}
                <div className="absolute inset-0 bg-[#050a0a]/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* HOVER ACTIONS */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#050a0a]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm z-20">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#10b981] hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#10b981] hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="relative z-30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-[#10b981] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-white/20 group-hover:text-[#10b981] transition-all duration-300" size={20} />
                </div>
                
                <p className="text-white/40 text-sm leading-relaxed mb-6 font-normal line-clamp-2 group-hover:text-white/60 transition-colors">
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono uppercase tracking-[2px] text-white/30 group-hover:text-[#10b981] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM ACCENT (Solid Line) */}
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#10b981] group-hover:w-full transition-all duration-700 opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;