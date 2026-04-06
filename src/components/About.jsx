import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section style={styles.wrapper}>
      <motion.div 
        style={styles.gridContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* TOP LEFT: Label & Progress */}
        <motion.div variants={itemVariants} style={{ ...styles.box, ...styles.gridArea1 }}>
          <span style={styles.boxLabel}>Developer Platform</span>
          <div style={styles.pagination}>
            <span style={styles.activeDot} />
            {[...Array(3)].map((_, i) => <span key={i} style={styles.dot} />)}
          </div>
        </motion.div>

        {/* BOTTOM LEFT: Bio */}
        <motion.div variants={itemVariants} style={{ ...styles.box, ...styles.gridArea2 }}>
          <h1 style={styles.name}>Praveen</h1>
          <p style={styles.role}>Full-Stack Developer</p>
          <p style={styles.bio}>
            I'm focused on building high-end digital products. I don't just write code;
            I engineer experiences that are <span style={{color: '#fff'}}>fast, accessible, and visually stunning.</span>
          </p>
        </motion.div>

        {/* CENTER: Image */}
        <motion.div 
          variants={itemVariants} 
          whileHover={{ scale: 1.02 }}
          style={{ ...styles.imageBox, ...styles.gridArea3 }}
        >
          <img
            src="/about1.jpg" // Replace with your actual path
            alt="Praveen Portrait"
            style={styles.portrait}
          />
          <div style={styles.imageOverlay} />
        </motion.div>

        {/* TOP RIGHT: Navigation */}
        <motion.div variants={itemVariants} style={{ ...styles.box, ...styles.gridArea4 }}>
          <div style={styles.navGroup}>
            <motion.div whileHover={{ x: -5 }}><ArrowLeft style={styles.navIcon} size={24} /></motion.div>
            <motion.div whileHover={{ x: 5 }}><ArrowRight style={{ ...styles.navIcon, color: '#ff6b35' }} size={24} /></motion.div>
          </div>
        </motion.div>

        {/* BOTTOM RIGHT: Socials */}
        <motion.div variants={itemVariants} style={{ ...styles.box, ...styles.gridArea5 }}>
          <div style={styles.socialGroup}>
            {[Linkedin, Twitter, Instagram, Github].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                whileHover={{ scale: 1.2, color: '#ff6b35' }}
                style={styles.socialIcon}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#0a0a0b',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Inter', sans-serif",
  },
  gridContainer: {
    display: 'grid',
    // Responsive Grid Logic
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridAutoRows: 'minmax(100px, auto)',
    gap: '16px',
    maxWidth: '1100px',
    width: '100%',
  },
  box: {
    backgroundColor: '#161618',
    borderRadius: '24px',
    padding: '32px',
    border: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  // Grid Area Assignments for Desktop (using Media Queries in real CSS is better, but here we define logic)
  gridArea1: { gridColumn: 'span 1' },
  gridArea2: { gridColumn: 'span 1', minHeight: '300px' },
  gridArea3: { gridColumn: 'span 1', gridRow: 'span 2', height: '100%', minHeight: '400px' },
  
  imageBox: {
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#161618',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  portrait: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8))',
  },
  boxLabel: {
    color: '#888',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '12px'
  },
  pagination: { display: 'flex', gap: '8px', alignItems: 'center' },
  activeDot: { width: '30px', height: '4px', backgroundColor: '#ff6b35', borderRadius: '2px' },
  dot: { width: '4px', height: '4px', backgroundColor: '#333', borderRadius: '50%' },
  name: { fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', color: '#fff', margin: '0 0 10px 0' },
  role: { fontSize: '18px', color: '#ff6b35', marginBottom: '24px', fontWeight: '500' },
  bio: { fontSize: '16px', color: '#a1a1a1', lineHeight: '1.6' },
  navGroup: { display: 'flex', gap: '24px', justifyContent: 'center' },
  navIcon: { cursor: 'pointer', color: '#fff' },
  socialGroup: { 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    height: '100%' 
  },
  socialIcon: { color: '#666', transition: 'color 0.2s' },
};

export default About;