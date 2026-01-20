import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import './DesignGallery.css';

const DesignGallery = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  // Your design data - replace with your actual designs
  const designs = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete brand identity for a tech startup",
      image: "https://res.cloudinary.com/dcfvhjvff/image/upload/c_fill,g_auto,w_432,h_540,q_80/game_and_frames_exkslz.png",
      dataColor: "#ffb91c",
      category: "Branding",
      year: "2023",
      client: "TechCorp Inc."
    },
    {
      id: 2,
      title: "Mobile App UI/UX",
      description: "User interface design for a fitness tracking app",
      image: "https://res.cloudinary.com/dcfvhjvff/image/upload/c_fill,g_auto,w_432,h_540,q_80/MATCHDAY1_idegys.png",
      dataColor: "#208167",
      category: "UI/UX",
      year: "2023",
      client: "FitTrack",
    },
    {
      id: 3,
      title: "Packaging Design",
      description: "Eco-friendly packaging for a skincare brand",
      image: "https://res.cloudinary.com/dcfvhjvff/image/upload/c_fill,g_auto,w_432,h_540,q_80/lyle_MOTM_hxf95t.png",
      dataColor: "#dbdfcf",
      category: "Packaging",
      year: "2022",
      client: "NatureGlow"
    },
    {
      id: 4,
      title: "Website Redesign",
      description: "Complete overhaul of an e-commerce platform",
      image: "https://res.cloudinary.com/dcfvhjvff/image/upload/c_fill,g_auto,w_432,h_540,q_80/commannouncement_dpv46e.png",
      dataColor: "#002d72",
      category: "Web Design",
      year: "2023",
      client: "StyleStore"
    },
    {
      id: 5,
      title: "Typography Design",
      description: "Custom typeface for a publication",
      image: "https://res.cloudinary.com/dcfvhjvff/image/upload/c_fill,g_auto,w_432,h_840,q_80/IMG_2503_p3du1k.png",
      dataColor: "#b0e6db",
      category: "Typography",
      year: "2023",
      client: "TypeMag",
      pdfUrl: "https://res.cloudinary.com/dcfvhjvff/raw/upload/v1768341366/typography-case-study.pdf",
      fileName: "Typography-Case-Study.pdf"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const images = imagesRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            
            // Change background color based on data-color attribute
            const color = entry.target.getAttribute("data-color");
            if (color && section) {
              section.style.backgroundColor = color;
            }
            
            // Show design info
          //   const designId = entry.target.getAttribute("data-id");
          //   const designInfo = document.querySelector(`.design-info-${designId}`);
          //   if (designInfo) {
          //     designInfo.classList.add("show");
          //   }
          // } else {
          //   entry.target.classList.remove("animate");
          //   const designId = entry.target.getAttribute("data-id");
          //   const designInfo = document.querySelector(`.design-info-${designId}`);
          //   if (designInfo) {
          //     designInfo.classList.remove("show");
          //   }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -50% 0px"
      }
    );

    // Observe all images
    images.forEach((img) => {
      if (img) observer.observe(img);
    });

    // Cleanup
    return () => {
      images.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className="designs-page">
      <Navbar />
      
      <div className="designs-header">
          <h1>Design Portfolio</h1>
          <p className="subtitle">Skilled in Figma, Adobe Creative Cloud, and Canva for creating engaging designs, short and long form content across all social media platforms.

</p>
      </div>

      <main className="designs-main">
        {/* Instructions
        <div className="instructions">
          <div className="container">
            <p><i className="fas fa-mouse-pointer"></i> Scroll horizontally to view designs</p>
            <p><i className="fas fa-palette"></i> Background changes with each design</p>
          </div>
        </div> */}

        {/* Horizontal Gallery */}
        <div className="gallery-container">
          <section 
            ref={sectionRef} 
            className="designs-gallery"
            style={{ backgroundColor: designs[0]?.dataColor }}
          >
            {designs.map((design, index) => (
              <div key={design.id} className="design-item">
                <img
                  ref={el => imagesRef.current[index] = el}
                  src={design.image}
                  data-color={design.dataColor}
                  data-id={design.id}
                  alt={design.title}
                  className="design-image"
                />
                
                {/* Design Info Overlay */}
                {/* <div className={`design-info design-info-${design.id}`}>
                  <div className="design-category">{design.category}</div>
                  <h3 className="design-title">{design.title}</h3>
                  <p className="design-description">{design.description}</p>
                  <div className="design-meta">
                    <span className="design-year">{design.year}</span>
                    <span className="design-client">{design.client}</span>
                  </div>
                </div> */}
              </div>
            ))}
          </section>
        </div>

      <div className="page-cta">
        <h2>Need Custom YouTube Thumbnails?</h2>
        <p>I create eye-catching thumbnails that increase click-through rates and engagement.</p>
        <div className="cta-buttons">
          <a href="https://behance.net/karabomnisi" className="btn btn-ter">
            <i className="fab fa-behance"></i>
            Full Behance Portfolio
          </a>
          <a href="/" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </a>
        </div>
    </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignGallery;