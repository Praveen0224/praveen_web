import React from "react";
import { motion } from "framer-motion";

const imagesRow1 = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
];

// NEW: Review Data for the second row
const reviews = [
  {
    name: "Alex Rivera",
    role: "Digital Artist",
    text: "The creative direction here is unmatched. Truly a transformative experience for my project."
  },
  {
    name: "Sarah Chen",
    role: "Student",
    text: "Learning here opened my eyes to new design possibilities. The mentors are incredible!"
  },
  {
    name: "Marcus Thorne",
    role: "Project Manager",
    text: "Professional, sleek, and highly efficient. They delivered exactly what we envisioned."
  },
  {
    name: "Elena G.",
    role: "Freelance Designer",
    text: "A perfect space for collaboration. The environment alone boosts your creativity."
  },
  {
    name: "Jordan Smith",
    role: "UI/UX Student",
    text: "The best hands-on coding and design training I have ever received. 10/10!"
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[#050a0a] py-24 overflow-hidden relative">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-10 -left-10 text-[180px] font-bold select-none pointer-events-none opacity-[0.02] leading-none tracking-tighter"
           style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
        Studio
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#10b981] font-mono text-[10px] tracking-[6px] mb-4 uppercase"
        >
          // Visuals & Feedback
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tighter leading-none text-white">
          Creative <span className="opacity-20 font-light">Space.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* ROW 1: IMAGES (Moving Left) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...imagesRow1, ...imagesRow1].map((img, index) => (
              <div key={index} className="w-[300px] md:w-[450px] aspect-video flex-shrink-0 overflow-hidden rounded-sm relative group">
                <img 
                  src={img} 
                  alt="gallery-work" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-xl tracking-tight uppercase leading-none">
                      Project Visual
                    </h3>
                    <p className="text-[#10b981] font-mono text-[10px] tracking-[2px] uppercase mt-2">
                      Digital Interaction // 2024
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: REVIEWS (Moving Right) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index} 
                className="w-[300px] md:w-[400px] p-8 bg-white/5  rounded-sm flex-shrink-0 flex flex-col justify-between"
              >
                <p className="text-white/80 italic text-sm md:text-base whitespace-normal leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-6">
                  <h4 className="text-white font-bold tracking-tight uppercase text-sm">
                    {review.name}
                  </h4>
                  <p className="text-[#10b981] font-mono text-[10px] tracking-[2px] uppercase">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}