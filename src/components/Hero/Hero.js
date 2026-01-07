import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀</span>
            <span>Featured Work</span>
          </div>
          
          <h1 className="text-balance">Designing, building, and communicating digital experiences</h1>
          
          <p className="text-balance">
            I'm Karabo, a Computer Science graduate with a strong interest in 
            <strong> UX/UI, software, and digital media</strong>. I work at the intersection of tech, design, and esports.
          </p>
          
          <div className="flex gap-md justify-center" style={{ marginTop: '2rem' }}>
            <a href="#about" className="btn btn-primary">
              <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
              About Me
            </a>
            <a href="#projects" className="btn btn-secondary">
              <i className="fas fa-code" style={{ marginRight: '8px' }}></i>
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;