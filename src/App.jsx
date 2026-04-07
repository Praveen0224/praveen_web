import React from 'react'
import Hero from './pages/heroSection'
import Projects from './pages/project'
import GallerySection from './pages/gallerySection'
import About from './pages/About'
import Services from './pages/Services'
import Footer from './pages/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <GallerySection/>
      <Footer/>
      

      
    </div>
  )
}

export default App