import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  // 1. MOUSE TILT LOGIC
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 2. INDIVIDUAL CARD PARALLAX
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Each card shifts vertically at a slightly different rate based on its index
  const yOffset = useTransform(scrollYProgress, [0, 1], [index * 20, index * -20]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      style={{ 
        y: yOffset,
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d" 
      }}
      className="group relative"
    >
      {/* SOLID BACKGROUND NUMBER */}
      <div className="absolute -top-10 -left-6 text-7xl font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500 text-white">
        0{project.id}
      </div>

      {/* IMAGE WRAPPER */}
      <div 
        className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-gray-900"
        style={{ transform: "translateZ(30px)" }}
      >
        <img 
          src={project.img} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
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
      <div className="relative z-30" style={{ transform: "translateZ(50px)" }}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-[#10b981] transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="text-white/20 group-hover:text-[#10b981] transition-all duration-300" size={20} />
        </div>
        
        <p className="text-white/40 text-sm leading-relaxed mb-6 font-normal line-clamp-2 group-hover:text-white/60 transition-colors">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[9px] font-mono uppercase tracking-[2px] text-white/30 group-hover:text-[#10b981] transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#10b981] group-hover:w-full transition-all duration-700 opacity-50" />
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 3. BACKGROUND PARALLAX
  const bgMove = useTransform(scrollYProgress, [0, 1], [-100, 100]);

 const projectData = [
  {
    id: 1,
    title: "CodeWild LearningHub Website",
    desc: "A modern and responsive company website designed to showcase services, training programs, and digital solutions with a clean user experience and professional branding.",
    tech: ["React.js", "Tailwind CSS", "Firebase"],
    img: "/image.png"
  },

  {
    id: 2,
    title: "Privielle Online Shopping Website",
    desc: "An elegant e-commerce platform built for seamless online shopping with attractive product displays, smooth navigation, and a user-friendly purchasing experience.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    img: "/privielle.png"
  },

  {
    id: 3,
    title: "SMR Holidays Tourism Website",
    desc: "A visually engaging tourism website created to promote travel packages, destinations, and holiday experiences with interactive design and responsive layouts.",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    img: "/smr.png"
  },
];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section ref={sectionRef} className="bg-[#050a0a] text-white py-24 px-6 overflow-hidden relative" id="projects">
      {/* BACKGROUND AMBIENCE: Moves with scroll */}
      <motion.div 
        style={{ x: bgMove }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="text-[#10b981] font-mono text-[10px] tracking-[6px] mb-4 uppercase flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#10b981]"></span> Portfolio
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Selected <span className="text-[#10b981]">Works.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-xs font-mono uppercase tracking-widest">
            // Building digital <br /> ecosystems that scale.
          </p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;