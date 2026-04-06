import React from "react";
import { motion } from "framer-motion";
import "./gallerySection.css";

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
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-row-wrapper">
        <motion.div
          className="gallery-row"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...imagesRow1, ...imagesRow1].map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`work-${index}`} />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="gallery-row reverse"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...imagesRow2, ...imagesRow2].map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`work-${index}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
