"use client";

import { useState } from "react";
import Hero from "../src/components/heroSection";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Projects from "../src/components/project";
import GallerySection from "../src/components/gallerySection";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import ContactRequestModal from "../src/components/ContactRequestModal";
import Experience from "../src/components/Experience";
export default function Home() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactForm = () => setIsContactModalOpen(true);
    const closeContactForm = () => setIsContactModalOpen(false);

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
            <ContactRequestModal isOpen={isContactModalOpen} onClose={closeContactForm} />
        </main>
    );
}
