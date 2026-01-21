import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import DesignGallery from './components/DesignGallery/DesignGallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import YouTubeThumbnailsPage from './pages/YouTubeThumbnailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/youtube-thumbnails" element={<YouTubeThumbnailsPage />} />
          <Route path="/designs" element={<DesignGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;