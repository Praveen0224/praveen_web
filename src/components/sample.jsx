import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeOrb, setActiveOrb] = useState(0);
  const [userName, setUserName] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrb((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const words = ['CREATE', 'INNOVATE', 'INSPIRE'];

  const captions = [
    { text: "Designing", top: "10%", left: "-10%" },
    { text: "Developing", top: "25%", right: "-10%" },
    { text: "Mentoring", bottom: "35%", left: "-10%" },
    { text: "UI/UX", bottom: "50%", right: "-5%" },
  ];

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
      {/* Embedded Media Queries for responsiveness */}
      <style>{`
        @media (max-width: 991px) {
          .hero-row { padding-top: 80px; text-align: center; }
          .left-col { display: flex; flex-direction: column; align-items: center; margin-bottom: 50px; }
          .stats-container { flex-wrap: wrap; gap: 30px !important; }
          .stat-box { flex: 0 0 40%; }
          .image-container-res { width: 260px !important; height: 330px !important; }
          .caption-res { display: none; } /* Hide floating captions on small mobile to save space */
        }
        @media (max-width: 576px) {
          .stat-value-res { font-size: 32px !important; }
          .main-heading-res { font-size: 3.5rem !important; }
        }
      `}</style>
      
      <div ref={containerRef} style={styles.heroContainer}>
        <div style={styles.bgOverlay}>
          <motion.div style={styles.gradientOrb1} animate={{ x: [0, 80, 0], y: [0, -40, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div style={styles.gradientOrb2} animate={{ x: [0, -80, 0], y: [0, 40, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        </div>
        <motion.div style={{...styles.cursorFollower, x, y}} />
        <div style={styles.gridPattern} />

        <div className="container position-relative" style={{zIndex: 10}}>
          <div className="row align-items-center hero-row" style={{minHeight: '80vh'}}>
            
            {/* LEFT COLUMN */}
            <motion.div 
                className="col-lg-6 col-12 left-col"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
               <div style={styles.badge} className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4">
                <Sparkles size={16} color="#facc15" />
                <span style={styles.badgeText}>Available for projects</span>
              </div>

              <div className="mb-4">
                <h1 className="main-heading-res" style={styles.mainHeading}>LET'S</h1>
                <div style={styles.rotatingWordContainer}>
                  {words.map((word, index) => (
                    <motion.h1 key={word} className="main-heading-res" style={{...styles.rotatingWord, ...styles.gradientText}} animate={{ y: activeOrb === index ? 0 : index < activeOrb ? -100 : 100, opacity: activeOrb === index ? 1 : 0 }} transition={{ duration: 0.6 }}>{word}</motion.h1>
                  ))}
                </div>
                <h1 className="main-heading-res" style={styles.mainHeading}>TOGETHER</h1>
              </div>

              <p style={styles.description} className="mb-4">
                Transforming ideas into exceptional digital experiences. Specializing in modern web development.
              </p>

              <motion.button className="btn" style={styles.primaryBtn} whileHover={{ scale: 1.05 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                <span style={{position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px'}}>Start a Project <ArrowRight size={20} /></span>
                <motion.div style={styles.btnGradientOverlay} animate={{ x: isHovered ? 0 : '-100%' }} />
              </motion.button>
            </motion.div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
              <div style={styles.visualWrapper}>
                <motion.div className="image-container-res" style={styles.imageContainer} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                  <div style={styles.imageFader}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=600" alt="Praveen" style={styles.profileImg} />
                    <div style={styles.imageNameOverlay}>
                        <h2 style={styles.nameText}>Praveen</h2>
                        <span style={styles.titleText}>Fullstack Developer</span>
                    </div>
                  </div>
                  {captions.map((cap, i) => (
                    <motion.div key={i} className="caption-res" style={{ ...styles.glassyCaption, ...cap }} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}>
                      {cap.text}
                    </motion.div>
                  ))}
                </motion.div>

                <div style={styles.interactionArea}>
                  <AnimatePresence>
                    {userName && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={styles.messageBox}>
                        <div style={styles.messageTriangle} />
                        <span style={{color: '#333'}}>Hi, </span><span style={{fontWeight: 'bold', color: '#9333ea'}}>{userName}</span>!
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div style={styles.inputWrapper}>
                    <MessageSquare size={18} style={styles.inputIcon} />
                    <input type="text" placeholder="Who are you?" style={styles.customInput} onChange={(e) => setUserName(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div style={styles.statsSection}>
            <div className="container d-flex align-items-center justify-content-center gap-lg-5 gap-3 stats-container">
                <div className="stat-box" style={styles.statBox}>
                    <div className="stat-value-res" style={styles.statValue}>50+</div>
                    <div style={styles.statLabel}>Projects</div>
                </div>
                <div className="stat-box" style={styles.statBox}>
                    <div className="stat-value-res" style={styles.statValue}>2+</div>
                    <div style={styles.statLabel}>Years Exp</div>
                </div>
                <div className="stat-box" style={styles.statBox}>
                    <div className="stat-value-res" style={styles.statValue}>20+</div>
                    <div style={styles.statLabel}>Students</div>
                </div>
                <div className="stat-box" style={styles.statBox}>
                    <div className="stat-value-res" style={styles.statValue}>15+</div>
                    <div style={styles.statLabel}>Awards</div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  heroContainer: { position: 'relative', minHeight: '100vh', background: '#000', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  bgOverlay: { position: 'absolute', inset: 0 },
  gradientOrb1: { position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '50%', filter: 'blur(100px)' },
  gradientOrb2: { position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', filter: 'blur(100px)' },
  gridPattern: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)', backgroundSize: '40px 40px' },
  cursorFollower: { pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '20px', height: '20px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', filter: 'blur(10px)', zIndex: 50 },
  badge: { background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '50px' },
  badgeText: { fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)' },
  mainHeading: { fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '900', color: 'white', lineHeight: 1.1, margin: 0 },
  rotatingWordContainer: { position: 'relative', height: '80px', overflow: 'hidden' },
  rotatingWord: { fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: '900', lineHeight: 1.1, position: 'absolute', width: '100%' },
  gradientText: { background: 'linear-gradient(90deg, #a78bfa, #ec4899, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  description: { fontSize: '16px', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '400px' },
  primaryBtn: { position: 'relative', padding: '12px 24px', background: 'white', color: 'black', fontWeight: 'bold', borderRadius: '50px', overflow: 'hidden', border: 'none' },
  btnGradientOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #9333ea, #ec4899)' },
  visualWrapper: { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' },
  imageContainer: { position: 'relative', width: '300px', height: '380px' },
  imageFader: { position: 'relative', width: '100%', height: '100%', borderRadius: '20px', overflow: 'hidden', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' },
  profileImg: { width: '100%', height: '100%', objectFit: 'cover' },
  imageNameOverlay: { position: 'absolute', bottom: '25px', left: '15px', zIndex: 10 },
  nameText: { color: 'white', fontSize: '1.8rem', fontWeight: '900', margin: 0 },
  titleText: { color: '#a78bfa', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' },
  glassyCaption: { position: 'absolute', padding: '8px 15px', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '12px', zIndex: 20 },
  interactionArea: { width: '100%', maxWidth: '280px', position: 'relative', marginTop: '30px' },
  messageBox: { position: 'absolute', bottom: '130%', left: '0', right: '0', background: '#ffffff', padding: '10px 15px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', zIndex: 30, textAlign: 'center' },
  messageTriangle: { position: 'absolute', bottom: '-5px', left: '50%', marginLeft: '-6px', width: '10px', height: '10px', background: '#ffffff', transform: 'rotate(45deg)' },
  inputWrapper: { position: 'relative', width: '100%' },
  customInput: { width: '100%', padding: '10px 15px 10px 40px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', color: 'white', outline: 'none' },
  inputIcon: { position: 'absolute', left: '12px', top: '12px', color: 'rgba(255,255,255,0.3)' },
  statsSection: { width: '100%', padding: '50px 0', marginTop: 'auto' },
  statBox: { textAlign: 'center' },
  statValue: { fontSize: '42px', fontWeight: '700', color: 'white', lineHeight: 1 },
  statLabel: { fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '5px', textTransform: 'uppercase' },
};

export default Hero;