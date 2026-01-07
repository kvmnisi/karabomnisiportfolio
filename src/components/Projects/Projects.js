import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Once UI Design System",
      description: "Development of a flexible and highly customizable design system using React and Figma for design collaboration.",
      tags: ["React", "Figma", "Design System", "UI/UX"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Figma to Code Pipeline",
      description: "Automated design handover process converting Figma designs directly into clean, production-ready code.",
      tags: ["Automation", "Figma API", "React", "CI/CD"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "A responsive portfolio template with customizable themes and components for developers.",
      tags: ["Next.js", "Tailwind", "Responsive", "Web Development"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center">Featured Projects</h2>
        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
          Selected work showcasing my expertise in web development, UI/UX design, and digital solutions.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                View Case Study <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;