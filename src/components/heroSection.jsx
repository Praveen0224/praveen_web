import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const logos = ["React", "JavaScript", "Node", "Express", "PostgreSQL", "Ps", "Figma", "Git"];

  return (
    <section style={styles.heroWrapper}>
      <div style={styles.vignette} />

      <div className="container-fluid" style={styles.contentContainer}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '80vh' }}>

          {/* LEFT: Title Section */}
          <div className="col-lg-3 col-12 mb-4 mb-lg-0 text-lg-start text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={styles.greenDivider} />
              <h2 style={styles.sideTitle}>Designer<br />& Full Stack Developer</h2>
            </motion.div>
          </div>

          {/* CENTER: 3D Avatar & Main Name */}
          <div className="col-lg-5 col-12 position-relative d-flex flex-column align-items-center">
            <motion.div
              style={styles.avatarWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ y: -5 }} // Slight lift on hover
            >
              <img
                src="/hero.png" 
                alt="Praveen's 3D Avatar"
                style={styles.avatarImg}
              />

              <div style={styles.nameOverlay}>
                <motion.span 
                  style={styles.namePrefix}
                  initial={{ letterSpacing: '0px' }}
                  animate={{ letterSpacing: '8px' }}
                  transition={{ duration: 1.5 }}
                >
                  MPK
                </motion.span>
                <h1 style={styles.hugeName}>PRAVEEN</h1>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Bio Section */}
          <div className="col-lg-3 col-12 mt-4 mt-lg-0 text-lg-start text-center">
            <motion.p
              style={styles.bioText}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I’m Praveen, a Full-Stack Developer and Designer focused on creating high-performance web applications with intuitive design and real-world impact.
            </motion.p>
          </div>
        </div>

        {/* BOTTOM: Tools/Logos Strip */}
        <motion.div 
          className="row mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="col-12 d-flex justify-content-center align-items-center gap-4 flex-wrap" style={styles.logoStrip}>
            {logos.map((logo, i) => (
              <motion.span
                key={i}
                style={styles.logoItem}
                whileHover={{ color: '#10b981', scale: 1.1, opacity: 1 }}
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ... styles remain mostly the same, updated logoItem for hover ...
const styles = {
  // ... (previous styles)
  heroWrapper: {
    backgroundColor: '#050a0a',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 75%)',
    zIndex: 0
  },
  contentContainer: { position: 'relative', zIndex: 1, padding: '5% 5%' }, // Adjusted padding
  greenDivider: { width: '40px', height: '2px', backgroundColor: '#10b981', marginBottom: '20px' },
  sideTitle: { fontSize: '24px', fontWeight: '600', lineHeight: '1.2', color: '#e2e8f0' },
  avatarWrapper: { position: 'relative', width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  avatarImg: { 
    width: '100%', 
    height: 'auto', 
    maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
  },
  nameOverlay: { position: 'absolute', bottom: '10%', textAlign: 'center', width: '100%', pointerEvents: 'none' },
  namePrefix: { color: '#10b981', fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '-15px' },
  hugeName: { fontSize: 'clamp(50px, 9vw, 90px)', fontWeight: '700', margin: 0, color: 'rgba(255,255,255,0.9)', letterSpacing: '-2px' },
  bioText: { fontSize: '15px', lineHeight: '1.6', color: '#94a3b8', maxWidth: '320px' },
  logoStrip: { padding: '40px 0' },
  logoItem: { fontSize: '16px', fontWeight: '700', color: '#94a3b8', cursor: 'pointer', transition: '0.3s', opacity: 0.5 }
};

export default Hero;