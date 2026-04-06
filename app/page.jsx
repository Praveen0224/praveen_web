"use client";

import Hero from "../src/components/heroSection";
import About from "../src/components/About";
import Projects from "../src/components/project";
import GallerySection from "../src/components/gallerySection";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <GallerySection />
        </main>
    );
}
