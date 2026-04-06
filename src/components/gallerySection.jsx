import React from "react";
import { motion } from "framer-motion";

const imagesRow1 = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
];

const imagesRow2 = [
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
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
          // Visuals
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tighter leading-none text-white">
          Creative <span className="opacity-20 font-light">Space.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* ROW 1 */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...imagesRow1, ...imagesRow1].map((img, index) => (
              <div key={index} className="w-[300px] md:w-[450px] aspect-video flex-shrink-0 overflow-hidden rounded-sm relative group">
                {/* IMAGE */}
                <img 
                  src={img} 
                  alt="gallery-work" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                {/* OVERLAY: This is what you were missing */}
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

        {/* ROW 2 */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...imagesRow2, ...imagesRow2].map((img, index) => (
              <div key={index} className="w-[300px] md:w-[450px] aspect-video flex-shrink-0 overflow-hidden rounded-sm relative group">
                <img 
                  src={img} 
                  alt="gallery-work" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-xl tracking-tight uppercase leading-none">
                      Studio Work
                    </h3>
                    <p className="text-[#10b981] font-mono text-[10px] tracking-[2px] uppercase mt-2">
                      Creative Direction // Visual
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}