"use client";

import Hero from "../src/components/heroSection";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Projects from "../src/components/project";
import GallerySection from "../src/components/gallerySection";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            
            <About />
            <Services />
            <Projects />
            <GallerySection />
            <Footer />  
        </main>
    );
}
