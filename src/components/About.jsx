import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useTransform as useMotionTransform, animate, useInView } from 'framer-motion';
// Added Instagram, Linkedin, and MessageCircle (for WhatsApp)
import { FileText, Send, Terminal, Sparkles, Instagram, Linkedin, MessageCircle } from 'lucide-react';

// Custom CountUp Component to handle dynamic animation smoothly
const StatCounter = ({ value, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);

  // Extract number from string (e.g., "5+" -> 5, "UI/UX" -> 0)
  const numericValue = parseInt(value, 10);
  const isNumber = !isNaN(numericValue);

  // Animate from 0 to target number when in view
  const rounded = useMotionTransform(count, (latest) => {
    if (!isNumber) return value; // If text like "UI/UX", return as is
    const suffix = value.replace(/[0-9]/g, ''); // Extract "+" or other symbols
    return `${Math.floor(latest)}${suffix}`;
  });

  useEffect(() => {
    if (isInView && isNumber) {
      animate(count, numericValue, {
        duration: 2, // Animation duration in seconds
        delay: index * 0.1, // Stagger effect
        ease: "easeOut"
      });
    }
  }, [isInView, count, numericValue, isNumber, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-default"
    >
      <motion.div className="text-5xl md:text-7xl font-bold tracking-tighter text-[#10b981] group-hover:text-white transition-all duration-500">
        {isNumber ? rounded : value}
      </motion.div>
      {/* FIXED: Changed {stat.label} to {label} */}
      <div className="text-[10px] uppercase tracking-[4px] leading-tight font-mono text-white/30 group-hover:text-[#10b981] transition-colors mt-3">
        {label}
      </div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);

  // 1. SCROLL LOGIC
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yBio = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const xWatermark = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { value: "5+", label: "Project Done" },
    { value: "20+", label: "Students Mentored" },
    { value: "2+", label: "Year Experience" },
    { value: "UI/UX", label: "Design Strategy" },
  ];

  // Social Data Array
  const socials = [
    { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/praveen-kumar-b07662219/", label: "LinkedIn" },
    { icon: <Instagram size={18} />, link: "https://www.instagram.com/praveen.uiux/", label: "Instagram" },
    { icon: <MessageCircle size={18} />, link: "https://wa.me/919486366437", label: "WhatsApp" },
  ];

  const linkReset = "no-underline !no-underline !decoration-transparent border-none outline-none shadow-none";

  return (
    <div
      ref={containerRef}
      className="bg-[#050a0a] text-white font-sans min-h-screen flex items-center overflow-hidden relative"
      id="about"
    >
      {/* THEME AMBIENCE */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[50%] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none"
      />

      <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start mb-20 md:mb-32">

          {/* COLUMN 1: IMAGE */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group max-w-[400px] lg:max-w-none mx-auto lg:mx-0 w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#10b981]/20 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative aspect-[4/5] bg-[#0a0f0f] rounded-lg overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/about2.png"
                alt="Praveen"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          {/* COLUMN 2: BIO & SOCIALS */}
          <motion.div
            style={{ y: yBio }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col pt-0 lg:pt-4"
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              <span className="block text-white text-lg md:text-xl font-semibold mb-2">
                I design experiences. I build products.
              </span>
              A UI/UX designer and full-stack developer with 2+ years of hands-on experience, I craft digital solutions that are not just functional—but meaningful.
            </p>

            <motion.div
              whileHover={{ x: 10 }}
              className="border-l-2 border-[#10b981] pl-6 py-1 italic text-white/40 text-xs md:text-sm bg-white/[0.02] rounded-r-lg transition-colors hover:bg-white/[0.05]"
            >
              "Transforming complex problems into elegant, functional digital solutions."
            </motion.div>

            {/* SOCIAL ICONS ROW */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3 text-[#10b981] text-[10px] font-mono tracking-[4px] uppercase opacity-80">
                <div className="w-8 h-[1px] bg-[#10b981]/30"></div>
                <Terminal size={14} />
              </div>

              <div className="flex items-center gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#10b981', y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/40 hover:text-[#10b981] transition-colors p-1"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: HEADLINE & PREMIUM BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pt-0 lg:pt-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles size={14} className="text-[#10b981]" />
              </motion.div>
              <span className={`text-[#10b981] font-mono text-[10px] tracking-[6px] uppercase ${linkReset}`}>
                Profile
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tighter relative z-10 mb-8 md:mb-12">
              Guiding you <br className="hidden md:block" /> through the <br />
              <span className="text-[#10b981]">Digital World.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <motion.a
                href="https://wa.me/919486366437"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-3 px-8 py-4 bg-[#10b981] !text-[#050a0a] font-bold text-[11px] uppercase tracking-[2px] rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.15)] ${linkReset}`}
              >
                Contact Me <Send size={14} />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/10 !text-white font-bold text-[11px] uppercase tracking-[2px] rounded-full ${linkReset}`}
              >
                Resume <FileText size={14} />
              </motion.a>
            </div>

            {/* WATERMARK */}
            <motion.div
              style={{ x: xWatermark, WebkitTextStroke: '1px white', color: 'transparent' }}
              className="absolute -bottom-16 -right-12 text-[120px] md:text-[180px] font-black select-none pointer-events-none opacity-[0.02] leading-none tracking-tighter hidden sm:block"
            >
              About
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/5 pt-16 md:pt-20">
          {stats.map((stat, i) => (
            <StatCounter
              key={i}
              index={i}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;