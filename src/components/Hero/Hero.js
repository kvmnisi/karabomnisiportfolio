import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const Hero = () => {
const projects = [
{
id: 1,
title: "Plug Into Dave's World Interview",
description: "Tune into my interview on MetroFM, talking about varsity esports in South Africa!",
tags: ["Varsity Esports", "Public Relations", "Digital Media"],
image: "https://res.cloudinary.com/dcfvhjvff/image/upload/c_fill,g_north,w_1200,h_675,q_80/IMG_1483_uxd8zx.jpg",
category: "Esports Media",
color: "#FF6B6B",
liveLink: "https://omny.fm/shows/the-touchdown/plug-into-daves-world-10",
},
{
id: 2,
title: "Design Thumbnails That Prove They Perform",
description: "Choosing the wrong designer costs views. I show proven YouTube thumbnails so creators can hire with confidence.",
tags: ["youtube design", "thumbnails", "content creators", "visual branding"],
image: "https://res.cloudinary.com/dcfvhjvff/image/upload/v1768857325/IMG_0054_hjtzju.png",
category: "Graphic Design",
color: "#4ECDC4",
liveLink: "/youtube-thumbnails"
},
{
id: 3,
title: "Github University Projects",
description: "Github repository of major projects such as a multi-agent football simulation (Robocup 3D Soccer Simulation League) featuring autonomous agents, basic physics, and team-based decision-making. Built on top of FC Portugal Database, with custom agent logic, role assignment, and tactical behaviours implemented by me.",
tags: ["Python", "C++", "Data Analysis", "React"],
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
category: "Computer Science",
color: "#45B7D1",
liveLink: "https://github.com/kvmnisi"
},
{
id: 4,
title: "I Showcase My Drive and Skills in One Portfolio",
description: "My downloadable portfolio highlights not just my work but my dedication, eagerness to learn, and commitment to contributing meaningfully to any team.",
tags: [],
image: "https://res.cloudinary.com/dcfvhjvff/image/upload/v1768856015/portfolio_xkyppe.png",
category: "Mobile App",
color: "#96CEB4",
liveLink: "https://drive.google.com/file/d/1L4LJRydWWE1ZTxxeckzsOH9s8Ky6cjrw/view?usp=drive_link"
}
];

const [currentSlide, setCurrentSlide] = useState(0);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);

const nextSlide = useCallback(() => {
setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
}, [projects.length]);

// Auto-advance slides every 5 seconds
useEffect(() => {
let interval;
if (isAutoPlaying) {
interval = setInterval(() => {
nextSlide();
}, 5000);
}
return () => clearInterval(interval);
}, [currentSlide, isAutoPlaying, nextSlide]);



const prevSlide = () => {
setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
};

const goToSlide = (index) => {
setCurrentSlide(index);
setIsAutoPlaying(false);
// Resume auto-play after 8 seconds
setTimeout(() => setIsAutoPlaying(true), 8000);
};

return (
<section id="home" className="hero">
<div className="hero-content">
<span className="hero-eyebrow">Karabo Mnisi's Portfolio</span>
    <h1 className="hero-title">
      Designing, building,<br />
      <span>and communicating</span><br />
      digital experiences
    </h1>

    <p className="hero-subtitle">
      I'm <strong>Karabo</strong>, a Computer Science graduate focused on
      <strong> UX/UI, software, and digital media</strong> — working at the
      intersection of tech, design, and esports.
    </p>

    <div className="hero-actions">
      <a href="#about" className="btn btn-secondary">
        About Me
      </a>
    </div>
  </div>

  {/* Project Slider */}
  <div className="slider-container">
    {/* Navigation Buttons */}
    <button 
      className="slider-nav-btn prev-btn"
      onClick={prevSlide}
      aria-label="Previous project"
    >
      <i className="fas fa-chevron-left"></i>
    </button>

    {/* Slider Content */}
    <div className="slider-content">
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-content">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-category" style={{ backgroundColor: project.color }}>
                    {project.category}
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-total">/0{projects.length}</span>
                </div>
                
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Check it out!
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Navigation Buttons */}
    <button 
      className="slider-nav-btn next-btn"
      onClick={nextSlide}
      aria-label="Next project"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  </div>

  {/* Slider Indicators */}
  <div className="slider-indicators">
    {projects.map((_, index) => (
      <button
        key={index}
        className={`indicator ${index === currentSlide ? 'active' : ''}`}
        onClick={() => goToSlide(index)}
        aria-label={`Go to project ${index + 1}`}
      >
        <div className="indicator-progress">
          <div 
            className="indicator-fill"
            style={{
              width: index === currentSlide && isAutoPlaying ? '100%' : '0%',
              animation: index === currentSlide && isAutoPlaying ? 'progressFill 5s linear' : 'none'
            }}
          ></div>
        </div>
        <span>0{index + 1}</span>
      </button>
    ))}
  </div>

  {/* Auto-play Toggle */}
  <div className="autoplay-control">
    <button 
      className={`autoplay-btn ${isAutoPlaying ? 'active' : ''}`}
      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
    >
      <i className={`fas fa-${isAutoPlaying ? 'pause' : 'play'}`}></i>
      Auto-play {isAutoPlaying ? 'On' : 'Off'}
    </button>
  </div>

</section>
);
};

export default Hero;