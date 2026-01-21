import React from 'react';
import Navbar from '../components/Navbar/navbar';
import YouTubeThumbnails from '../components/YouTubeThumbnails/YouTubeThumbnails';
import Footer from '../components/Footer/Footer';
import './YouTubeThumbnailsPage.css';

const YouTubeThumbnailsPage = () => {
return (
<div className="youtube-thumbnails-page">
<Navbar />
  <main className="youtube-thumbnails-main">
    <div className="hero-content">
    <h1 className="hero-title">
      YOUTUBE<br />
      <span>THUMBNAILS</span><br />
    </h1>
  </div>

    <YouTubeThumbnails />

    <div className="page-cta">
      <div className="container">
        <h2>Need Custom YouTube Thumbnails?</h2>
        <p>I create eye-catching thumbnails that increase click-through rates and engagement.</p>
        <div className="cta-buttons">
          <a href="mailto:mnisimediahouse@gmail.com" key = 'contact' className="btn btn-ter">
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