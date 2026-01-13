import React from 'react';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import ProjectSlider from './components/ProjectSlider/ProjectSlider';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import DesignGallery from './components/DesignGallery/DesignGallery';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DesignGallery />
      <Footer />
    </div>
  );
}

export default App;