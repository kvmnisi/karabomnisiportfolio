import React, { useState } from 'react';
import './DesignGallery.css';

const DesignGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const designs = [
    {
      id: 1,
      title: "Mobile App UI Design",
      category: "mobile",
      description: "Clean and intuitive mobile application interface design",
      image: "/images/designs/mobile-app-1.jpg",
      tags: ["Mobile", "UI Design", "Figma"]
    },
    {
      id: 2,
      title: "Website Landing Page",
      category: "web",
      description: "Modern landing page design with attention to conversion",
      image: "/images/designs/web-landing.jpg",
      tags: ["Web", "Landing Page", "UI/UX"]
    },
    {
      id: 3,
      title: "Dashboard Design",
      category: "dashboard",
      description: "Data visualization dashboard with user-friendly interface",
      image: "/images/designs/dashboard.jpg",
      tags: ["Dashboard", "Data Viz", "UI Design"]
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "branding",
      description: "Complete brand identity design including logo and guidelines",
      image: "/images/designs/branding.jpg",
      tags: ["Branding", "Logo", "Identity"]
    },
    {
      id: 5,
      title: "Mobile App Prototype",
      category: "mobile",
      description: "Interactive prototype for fitness tracking application",
      image: "/images/designs/mobile-app-2.jpg",
      tags: ["Mobile", "Prototype", "Figma"]
    },
    {
      id: 6,
      title: "E-commerce Website",
      category: "web",
      description: "Complete e-commerce website design with product showcase",
      image: "/images/designs/ecommerce.jpg",
      tags: ["E-commerce", "Web Design", "UI/UX"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Design' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <section id="designs" className="design-gallery">
      <div className="container">
        <h2 className="text-center">Design Portfolio</h2>
        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          A collection of my UI/UX design work showcasing different styles and projects
        </p>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Design Grid */}
        <div className="designs-grid">
          {filteredDesigns.map(design => (
            <div key={design.id} className="design-card">
              <div className="design-image-container">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="design-image"
                />
                <div className="design-overlay">
                  <button className="view-details-btn">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
              </div>
              <div className="design-info">
                <h3>{design.title}</h3>
                <p>{design.description}</p>
                <div className="design-tags">
                  {design.tags.map((tag, index) => (
                    <span key={index} className="design-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;