import React from 'react';
import Navbar from '../components/Navbar/navbar';
import YouTubeThumbnails from '../components/YouTubeThumbnails/YouTubeThumbnails';
import Footer from '../components/Footer/Footer';
import './YouTubeThumbnailsPage.css';

const YouTubeThumbnailsPage = () => {
return (
<div className="youtube-thumbnails-page">
<Navbar />

text
  <main className="youtube-thumbnails-main">
    <div className="page-header">
      <div className="container">
        <h1>YouTube Thumbnail Portfolio</h1>
        <p className="page-subtitle">
          A showcase of YouTube thumbnail designs I've created for various channels
        </p>
        <div className="page-meta">
          <span className="meta-item">
            <i className="fas fa-paint-brush"></i>
            Graphic Design
          </span>
          <span className="meta-item">
            <i className="fab fa-youtube"></i>
            YouTube Thumbnails
          </span>
          <span className="meta-item">
            <i className="fas fa-layer-group"></i>
            {10}+ Projects
          </span>
        </div>
      </div>
    </div>

    <YouTubeThumbnails />

    <div className="page-cta">
      <div className="container">
        <h2>Need Custom YouTube Thumbnails?</h2>
        <p>I create eye-catching thumbnails that increase click-through rates and engagement.</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Contact Me
          </a>
          <a href="/" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>
);
};

export default YouTubeThumbnailsPage;