"use client";

import Hero from "../src/components/heroSection";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Projects from "../src/components/project";
import GallerySection from "../src/components/gallerySection";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Experience from "../src/components/Experience";

export default function Home() {
    const openContactForm = () => {
        window.open("https://wa.me/919486366437", "_blank", "noopener,noreferrer");
    };

    return (
        <main>
            <Navbar onOpenContactForm={openContactForm} />
            <Hero />
            
            <About />
            <Experience />
            <Services onOpenContactForm={openContactForm} />
            <Projects />
            <GallerySection />
            <Footer />  
        </main>
    );
}
