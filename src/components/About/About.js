import React from 'react';
import './About.css';

const About = () => {
  const person = {
    firstName: "Karabo",
    lastName: "Mnisi",
    name: "Karabo Mnisi",
    role: "Computer Science Graduate",
    location: "Africa/Johannesburg",
    email: "karabo1306@gmail.com",
    languages: ["English", "Afrikaans"]
  };

  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/kvmnisi", essential: true },
    { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/karabomnisi/", essential: true },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/kmnisi_/", essential: false },
    { name: "Email", icon: "fas fa-envelope", url: "mailto:karabo1306@gmail.com", essential: true }
  ];

  const workExperiences = [
    {
      company: "University Projects",
      timeframe: "2020 - Present",
      role: "Student Developer & Designer",
      achievements: [
        "Developed multiple web applications using React, Node.js, and modern JavaScript frameworks",
        "Designed and implemented responsive UI/UX solutions for various academic projects",
        "Collaborated on team projects using Agile methodologies and version control systems"
      ],
      images: []
    },
    {
      company: "Freelance Work",
      timeframe: "2021 - Present",
      role: "Web Developer & UI/UX Designer",
      achievements: [
        "Created responsive portfolio websites for clients using modern web technologies",
        "Implemented design systems and component libraries for consistent user experiences",
        "Optimized website performance and accessibility standards"
      ],
      images: []
    }
  ];

  const studies = [
    {
      name: "Computer Science Degree",
      description: "Studied software development, algorithms, data structures, and web technologies with focus on full-stack development."
    },
    {
      name: "UX/UI Design Courses",
      description: "Completed specialized courses in user experience design, interface design, and human-computer interaction."
    }
  ];

  const technicalSkills = [
    {
      title: "Frontend Development",
      description: "Building responsive and accessible web applications using React, JavaScript, and modern CSS frameworks.",
      tags: [
        { name: "React", icon: "fab fa-react" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "CSS3", icon: "fab fa-css3" },
        { name: "HTML5", icon: "fab fa-html5" }
      ]
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and experiences using design principles and prototyping tools.",
      tags: [
        { name: "Figma", icon: "fas fa-pen-nib" },
        { name: "Adobe XD", icon: "fas fa-paint-brush" },
        { name: "Prototyping", icon: "fas fa-mouse-pointer" }
      ]
    },
    {
      title: "Digital Media",
      description: "Content creation and digital media production for esports and gaming communities.",
      tags: [
        { name: "Video Editing", icon: "fas fa-video" },
        { name: "Graphics", icon: "fas fa-image" },
        { name: "Social Media", icon: "fas fa-share-alt" }
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <div className="about-avatar">
            <div className="avatar-image">
              <img src = "https://res.cloudinary.com/dcfvhjvff/image/upload/w_500,h_500,c_fill,g_face,f_auto,q_80,r_max/IMG_1841_wmv2yi.jpg" alt = "Karabo Mnisi" className = "avatar-img" />
            </div>
          </div>
          <div className="about-intro">
            <h1>About – {person.name}</h1>
            <p className="role-location">
              <i className="fas fa-briefcase"></i> {person.role}
              <span className="separator">•</span>
              <i className="fas fa-map-marker-alt"></i> {person.location.split('/')[1]}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="about-social">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className={social.icon}></i>
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Introduction */}
        <div className="about-content">
          <div className="content-section intro-section">
            <h2>Introduction</h2>
            <p>
              I'm Karabo, a Computer Science graduate from Johannesburg with a passion for creating 
              digital experiences at the intersection of technology, design, and esports. My journey 
              combines technical expertise with creative problem-solving to build solutions that are 
              both functional and visually compelling.
            </p>
            <p>
              With a strong foundation in both development and design, I focus on creating seamless 
              user experiences that bridge the gap between technical implementation and user needs. 
              Whether it's developing web applications or designing intuitive interfaces, I strive to 
              deliver solutions that make a real impact.
            </p>
          </div>

          {/* Work Experience */}
          <div className="content-section work-section">
            <h2>Work Experience</h2>
            <div className="experiences-grid">
              {workExperiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h3>{exp.role}</h3>
                      <p className="company-timeframe">
                        <strong>{exp.company}</strong> • {exp.timeframe}
                      </p>
                    </div>
                  </div>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Studies */}
          <div className="content-section studies-section">
            <h2>Education</h2>
            <div className="studies-grid">
              {studies.map((study, index) => (
                <div key={index} className="study-card">
                  <h3>{study.name}</h3>
                  <p>{study.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="content-section skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-tags">
                    {skill.tags.map((tag, i) => (
                      <span key={i} className="skill-tag">
                        <i className={tag.icon}></i>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="content-section languages-section">
            <h2>Languages</h2>
            <div className="languages-list">
              {person.languages.map((language, index) => (
                <div key={index} className="language-item">
                  <i className="fas fa-language"></i>
                  <span>{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;