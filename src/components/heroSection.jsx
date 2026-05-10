import React, { useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue 
} from 'framer-motion';

const Hero = () => {
  const logos = ["React", "JavaScript", "Node", "Express", "PostgreSQL", "Ps", "Figma", "Git", "Tailwind", "Next.js"];
  const duplicatedLogos = [...logos, ...logos];

  // 1. Setup Scroll Reference
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // 2. Parallel Scrolling (Parallax) Offsets
  // Side title moves up slowly, Bio moves up faster
  const ySideTitle = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBio = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 3. Mouse Interaction Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate rotation/movement values based on mouse position
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  // Mapping mouse movement to avatar rotation
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <section 
      ref={targetRef}
      onMouseMove={handleMouseMove}
      style={styles.heroWrapper}
    >
      {/* Interactive Vignette: Moves slightly with mouse */}
      <motion.div 
        style={{
          ...styles.vignette,
          x: useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]),
          y: useTransform(smoothMouseY, [-0.5, 0.5], [-50, 50]),
        }} 
      />

      <div className="container-fluid" style={styles.contentContainer}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '85vh' }}>

          {/* LEFT: Title Section (Parallel Scroll: Slow) */}
          <div className="col-lg-3 col-12 order-2 order-lg-1 text-center text-lg-start mt-5 mt-lg-0">
            <motion.div
              style={{ y: ySideTitle, opacity: opacityFade }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={styles.greenDivider} className="mx-auto mx-lg-0" />
              <h2 style={styles.sideTitle}>Designer<br />& Full Stack Developer</h2>
            </motion.div>
          </div>

          {/* CENTER: 3D Avatar (Interactive Mouse Tilt) */}
          <div className="col-lg-5 col-12 order-1 order-lg-2 position-relative d-flex flex-column align-items-center">
            <motion.div
              style={{ 
                ...styles.avatarWrapper,
                rotateX,
                rotateY,
                perspective: 1000
              }}
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
                  animate={{ letterSpacing: ['2px', '10px'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                >
                  MPK
                </motion.span>
                <motion.h1 
                  style={styles.hugeName}
                  whileHover={{ scale: 1.05, color: '#10b981' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  PRAVEEN
                </motion.h1>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Bio Section (Parallel Scroll: Fast) */}
          <div className="col-lg-3 col-12 order-3 text-center text-lg-start mt-4 mt-lg-0">
            <motion.div
              style={{ y: yBio, opacity: opacityFade }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <p style={styles.bioText}>
                Hi, I’m Praveen, a Full-Stack Developer and Designer focused on creating high-performance web applications with intuitive design and real-world impact.
              </p>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM: TOOLS SCROLL */}
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
                <motion.span 
                  key={i} 
                  style={styles.logoItem}
                  whileHover={{ opacity: 1, color: '#fff', scale: 1.2 }}
                >
                  {logo}
                </motion.span>
              ))}
            </motion.div>
            
            <div style={styles.boxFadeLeft} />
            <div style={styles.boxFadeRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ... keep your existing styles object here ...
const styles = {
  // Styles remain largely the same, except we ensure heroWrapper 
  // allows mouse tracking via relative/overflow properties.
  heroWrapper: {
    backgroundColor: '#050a0a',
    minHeight: '120vh', // Increased slightly to allow for scroll room
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    paddingTop: '60px',
    perspective: '1000px' // Added for 3D effect
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    zIndex: 0
  },
  contentContainer: { position: 'relative', zIndex: 1, width: '100%' },
  greenDivider: { width: '40px', height: '2px', backgroundColor: '#10b981', marginBottom: '15px' },
  sideTitle: { fontSize: '20px', fontWeight: '600', lineHeight: '1.3', color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '1px' },
  avatarWrapper: { position: 'relative', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center', transformStyle: 'preserve-3d' },
  avatarImg: { 
    width: '100%', 
    height: 'auto', 
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  },
  nameOverlay: { position: 'absolute', bottom: '5%', textAlign: 'center', width: '100%', pointerEvents: 'none', transform: 'translateZ(50px)' },
  namePrefix: { color: '#10b981', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '-10px' },
  hugeName: { fontSize: 'clamp(45px, 12vw, 85px)', fontWeight: '800', margin: 0, color: '#fff', letterSpacing: '-3px', pointerEvents: 'auto' },
  bioText: { fontSize: '14px', lineHeight: '1.6', color: '#94a3b8', maxWidth: '300px', margin: '0 auto' },
  marqueeWrapper: { width: '100%', padding: '0 20px', marginTop: '50px' },
  marqueeBox: { position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', padding: '20px 0', overflow: 'hidden', borderRadius: '4px' },
  marqueeInner: { display: 'flex', width: 'max-content', gap: '50px', alignItems: 'center' },
  logoItem: { fontSize: '12px', fontWeight: '700', color: '#10b981', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '4px', whiteSpace: 'nowrap', cursor: 'default', transition: 'color 0.3s' },
  boxFadeLeft: { position: 'absolute', top: 0, left: 0, bottom: 0, width: '60px', background: 'linear-gradient(to right, #050a0a, transparent)', zIndex: 2 },
  boxFadeRight: { position: 'absolute', top: 0, right: 0, bottom: 0, width: '60px', background: 'linear-gradient(to left, #050a0a, transparent)', zIndex: 2 }
};

export default Hero;