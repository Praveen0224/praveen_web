import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Layout, Cpu, Globe, Layers } from 'lucide-react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Scroll Progress for Typography Animation
  const { scrollYProgress } = useScroll();
  const textFillWidth = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectData = [
    {
      id: 1,
      title: "E-Commerce Marketplace",
      desc: "Fullstack platform with Stripe & Admin Dashboard. Optimized for high-speed transactions.",
      tech: ["Next.js", "MongoDB", "Stripe"],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      gridArea: '1 / 1 / 3 / 3',
      icon: <Layout size={18} />
    },
    {
      id: 2,
      title: "AI Chat App",
      desc: "Socket.io real-time encryption and neural network integration.",
      tech: ["Socket.io", "Tailwind", "OpenAI"],
      img: "https://images.unsplash.com/photo-1618005182382-a4d449d16b2f?w=800&q=80",
      gridArea: '1 / 3 / 2 / 4',
      icon: <Globe size={18} />
    },
    {
      id: 3,
      title: "Job Analytics",
      desc: "AI matching & resume parsing with data visualization.",
      tech: ["TypeScript", "Firebase", "D3.js"],
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      gridArea: '2 / 3 / 3 / 4',
      icon: <Cpu size={18} />
    },
    {
      id: 4,
      title: "Task SaaS",
      desc: "Collaborative Kanban with real-time sync and enterprise security.",
      tech: ["React", "PostgreSQL", "Redis"],
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      gridArea: '3 / 1 / 4 / 4',
      icon: <Layers size={18} />
    }
  ];

  return (
    <section style={styles.sectionWrapper} id="projects">
      <div style={styles.container}>
        
        {/* Advanced Interactive Header */}
        <header style={styles.header}>
          <div style={{ position: 'relative' }}>
            <span style={styles.subHeader}>Portfolio</span>
            <h2 style={styles.mainTitle}>
              Selected <br />
              <span style={styles.accentTextContainer}>
                Works
                <motion.span 
                    style={{ ...styles.accentTextFill, width: textFillWidth }}
                >
                    Works
                </motion.span>
              </span>
            </h2>
          </div>
          
          <div style={styles.headerRight}>
             <motion.div 
                animate={{ width: [0, 60, 40] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                style={styles.divider} 
             />
             <p style={styles.headerDesc}>
               Creating digital experiences where <br /> 
               <span style={{ color: '#fff' }}>logic meets artistry.</span>
             </p>
          </div>
        </header>

        {/* 3D-Tilt Bento Grid */}
        <div style={styles.bentoGrid}>
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              style={{
                ...styles.card,
                gridArea: isDesktop ? project.gridArea : 'auto'
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10, 
                rotateX: 2, 
                rotateY: -2,
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div style={styles.imageContainer}>
                <motion.img 
                  src={project.img} 
                  alt={project.title} 
                  animate={{ 
                    scale: hoveredIndex === index ? 1.15 : 1,
                    filter: hoveredIndex === index ? 'grayscale(0%) brightness(1)' : 'grayscale(60%) brightness(0.6)'
                  }}
                  transition={{ duration: 0.6 }}
                  style={styles.image} 
                />
                
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                      style={styles.imageOverlay}
                    >
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={styles.overlayIcons}
                      >
                        <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href="#" style={styles.iconCircle}><Github size={20} /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" style={styles.iconCircle}><ExternalLink size={20} /></motion.a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={styles.content}>
                <div style={styles.cardHeader}>
                  <motion.div 
                    animate={{ x: hoveredIndex === index ? 5 : 0 }}
                    style={styles.categoryBadge}
                  >
                    {project.icon}
                    <span style={{ marginLeft: '10px' }}>PROJECT / 0{project.id}</span>
                  </motion.div>
                  <motion.div animate={{ rotate: hoveredIndex === index ? 45 : 0 }}>
                    <ArrowUpRight size={24} style={{ color: '#ff4500' }} />
                  </motion.div>
                </div>

                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardDesc}>{project.desc}</p>

                <div style={styles.tagContainer}>
                  {project.tech.map(t => (
                    <span key={t} style={styles.tag}>{t}</span>
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

const styles = {
  sectionWrapper: {
    backgroundColor: '#030303',
    padding: '120px 20px',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    perspective: '1000px', // Crucial for 3D tilt
  },
  container: { maxWidth: '1300px', margin: '0 auto' },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '80px',
    flexWrap: 'wrap',
  },
  subHeader: {
    color: '#ff4500',
    textTransform: 'uppercase',
    letterSpacing: '6px',
    fontSize: '12px',
    fontWeight: '900',
    marginBottom: '10px',
    display: 'block'
  },
  mainTitle: {
    fontSize: 'clamp(50px, 10vw, 100px)',
    fontWeight: '900',
    lineHeight: '0.8',
    margin: 0,
    letterSpacing: '-5px'
  },
  accentTextContainer: {
    position: 'relative',
    color: 'transparent',
    WebkitTextStroke: '1px rgba(255,255,255,0.2)',
    display: 'inline-block'
  },
  accentTextFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#ff4500',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'width 0.1s ease-out'
  },
  headerRight: { textAlign: 'right', maxWidth: '300px' },
  divider: { height: '3px', backgroundColor: '#ff4500', marginLeft: 'auto', marginBottom: '15px' },
  headerDesc: { fontSize: '15px', color: '#666', lineHeight: '1.6' },
  
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'minmax(300px, auto)',
    gap: '30px',
  },
  card: {
    backgroundColor: '#0a0a0a',
    borderRadius: '32px',
    border: '1px solid rgba(255,255,255,0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transformStyle: 'preserve-3d',
  },
  imageContainer: { position: 'relative', height: '260px', overflow: 'hidden' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(255, 69, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
  },
  content: { padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  categoryBadge: { display: 'flex', alignItems: 'center', fontSize: '11px', color: '#666', fontWeight: '800', letterSpacing: '1px' },
  cardTitle: { fontSize: '26px', fontWeight: '700', marginBottom: '12px', letterSpacing: '-1px' },
  cardDesc: { color: '#888', fontSize: '15px', marginBottom: '25px', lineHeight: '1.6' },
  tagContainer: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' },
  tag: {
    fontSize: '11px',
    padding: '6px 14px',
    borderRadius: '100px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#aaa',
  }
};

export default Projects;