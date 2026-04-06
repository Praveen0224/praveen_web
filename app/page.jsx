"use client";

import Hero from "../src/components/heroSection";
import About from "../src/components/About";
import Projects from "../src/components/project";
import GallerySection from "../src/components/gallerySection";
import Footer from "../src/components/Footer";

export default function Home() {
    return (
        <main>
            {/* Tailwind Test Banner */}
            <div className="bg-orange-500 text-white text-center py-2 font-bold animate-pulse">
                Tailwind CSS 4 is now ACTIVE! 🚀
            </div>
            <Hero />
            <About />
            <Projects />
            <GallerySection />
            <Footer />  
        </main>
    );
}
