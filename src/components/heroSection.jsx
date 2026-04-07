import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const logos = ["React", "JavaScript", "Node", "Express", "PostgreSQL", "Ps", "Figma", "Git", "Tailwind", "Next.js"];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section style={styles.heroWrapper}>
      <div style={styles.vignette} />

      <div className="container-fluid" style={styles.contentContainer}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '85vh' }}>

          {/* LEFT: Title Section */}
          <div className="col-lg-3 col-12 order-2 order-lg-1 text-center text-lg-start mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={styles.greenDivider} className="mx-auto mx-lg-0" />
              <h2 style={styles.sideTitle}>Designer<br />& Full Stack Developer</h2>
            </motion.div>
          </div>

          {/* CENTER: 3D Avatar & Main Name */}
          <div className="col-lg-5 col-12 order-1 order-lg-2 position-relative d-flex flex-column align-items-center">
            <motion.div
              style={styles.avatarWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/hero.png" 
                alt="Praveen's 3D Avatar"
                style={styles.avatarImg}
              />

              <div style={styles.nameOverlay}>
                <motion.span 
                  style={styles.namePrefix}
                  animate={{ letterSpacing: ['2px', '8px'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                >
                  MPK
                </motion.span>
                <h1 style={styles.hugeName}>PRAVEEN</h1>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Bio Section - Now Centered on Mobile */}
          <div className="col-lg-3 col-12 order-3 text-center text-lg-start mt-4 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <p style={styles.bioText}>
                Hi, I’m Praveen, a Full-Stack Developer and Designer focused on creating high-performance web applications with intuitive design and real-world impact.
              </p>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM: TOOLS SCROLL WITH BACKGROUND BOX */}
        <div style={styles.marqueeWrapper}>
          <div style={styles.marqueeBox}>
            <motion.div 
              style={styles.marqueeInner}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                ease: "linear", 
                duration: 25, 
                repeat: Infinity 
              }}
            >
              {duplicatedLogos.map((logo, i) => (
                <span key={i} style={styles.logoItem}>
                  {logo}
                </span>
              ))}
            </motion.div>
            
            {/* Edge Fades for the Box */}
            <div style={styles.boxFadeLeft} />
            <div style={styles.boxFadeRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroWrapper: {
    backgroundColor: '#050a0a',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    paddingTop: '60px'
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
    zIndex: 0
  },
  contentContainer: { position: 'relative', zIndex: 1, width: '100%' },
  greenDivider: { width: '40px', height: '2px', backgroundColor: '#10b981', marginBottom: '15px' },
  sideTitle: { fontSize: '20px', fontWeight: '600', lineHeight: '1.3', color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '1px' },
  avatarWrapper: { position: 'relative', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  avatarImg: { 
    width: '100%', 
    height: 'auto', 
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  },
  nameOverlay: { position: 'absolute', bottom: '5%', textAlign: 'center', width: '100%', pointerEvents: 'none' },
  namePrefix: { color: '#10b981', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '-10px' },
  hugeName: { fontSize: 'clamp(45px, 12vw, 85px)', fontWeight: '800', margin: 0, color: '#fff', letterSpacing: '-3px' },
  
  // Mobile Paragraph Alignment Fix
  bioText: { 
    fontSize: '14px', 
    lineHeight: '1.6', 
    color: '#94a3b8', 
    maxWidth: '300px',
    margin: '0 auto' // Centers the text block itself
  },

  // MARQUEE WITH BACKGROUND BOX
  marqueeWrapper: {
    width: '100%',
    padding: '0 20px',
    marginTop: '50px'
  },
  marqueeBox: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.03)', // Subtle Box Background
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '20px 0',
    overflow: 'hidden',
    borderRadius: '4px'
  },
  marqueeInner: {
    display: 'flex',
    width: 'max-content',
    gap: '50px',
    alignItems: 'center'
  },
  logoItem: { 
    fontSize: '12px', 
    fontWeight: '700', 
    color: '#10b981', 
    opacity: 0.6,
    textTransform: 'uppercase',
    letterSpacing: '4px',
    whiteSpace: 'nowrap'
  },
  boxFadeLeft: {
    position: 'absolute', top: 0, left: 0, bottom: 0, width: '60px',
    background: 'linear-gradient(to right, #050a0a, transparent)', zIndex: 2
  },
  boxFadeRight: {
    position: 'absolute', top: 0, right: 0, bottom: 0, width: '60px',
    background: 'linear-gradient(to left, #050a0a, transparent)', zIndex: 2
  }
};

export default Hero;