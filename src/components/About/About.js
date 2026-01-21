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
    languages: ["English", "isiZulu", "SeTswana", "Afrikaans"]
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
      company: "University of the Witwatersrand E-Sport Game Club",
      timeframe: "2023 - 2025",
      role: "Social Media Manager and Vice Chairperson",
      achievements: [
        "Managed social media for Wits University E-Sports Club since 2023, creating content that engages gamers, introduces esports to South African university students, and positions esports as a competitive sport. Brought over 400% social media growth and 200,000+ accounts reached through community engagement and algorithm analysis. Responsible for generating content ideas (Instagram Reels, TikToks, posters, and photo-shoots), executing content creation (designing, capturing, editing, posting at algorithm-efficient times), and analysing performance metrics (engagement rates, views, platform analytics). Responsible for account management (engaging with other pages that are relevant in the space, answering DM's and FAQ's, keeping up with social media trends). ",
        "Organised METROFM, VOWFM, SABC1 and Wits Vuvuzela guest appearances.",
        "Led esports awareness campaigns in Wits University female residences, resulting in 20% new female members."
 ],
      images: ['https://res.cloudinary.com/dcfvhjvff/image/upload/v1768341669/IMG_2805_koahtu.jpg']
 },
 {
      company: "Freelance Work",
      timeframe: "2024 - Present",
      role: "Web Developer & UI/UX Designer",
      achievements: [
        "Created responsive portfolio websites for clients using modern web technologies.",
        "Implemented design systems and component libraries for consistent user experiences.",
        "Optimised website performance and accessibility standards."
 ],
      images: []
 }
 ];

  const studies = [
 {
      name: "BSc in Computer Science Degree | University of the Witwatersrand",
      description: "Through my Bachelor of Science studies at the University of the Witwatersrand, I developed a strong interdisciplinary foundation spanning computer science, mathematics, and psychology, with an emphasis on analytical thinking, problem-solving, and structured reasoning."
 },
 {
      name: "Generative AI Course For Software Engineers",
      description: ": Practical training in AI prompt engineering for code comprehension, debugging, refactoring, and documentation. Developed skills in AI-assisted software development, learning new technologies efficiently, and improving code quality, maintainability, and developer productivity. "
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
  title: "Algorithm Design & Data Structures",
  description: "Designing, implementing, and analysing efficient algorithms and core data structures with a focus on correctness and performance.",
  tags: [
 { name: "Algorithms", icon: "fas fa-project-diagram" },
 { name: "Data Structures", icon: "fas fa-sitemap" },
 { name: "Complexity Analysis", icon: "fas fa-chart-line" },
 { name: "Problem Solving", icon: "fas fa-brain" }
 ]
},
{
  title: "Software Design & Engineering",
  description: "Applying structured software design principles, modular architecture, and collaborative development practices.",
  tags: [
 { name: "Software Design", icon: "fas fa-drafting-compass" },
 { name: "System Architecture", icon: "fas fa-layer-group" },
 { name: "Code Modularity", icon: "fas fa-cubes" },
 { name: "Software Projects", icon: "fas fa-code-branch" }
 ]
},
{
  title: "Computer Systems & Networks",
  description: "Understanding how software interacts with hardware, operating systems, and networked environments.",
  tags: [
 { name: "Computer Organisation", icon: "fas fa-microchip" },
 { name: "Computer Networks", icon: "fas fa-network-wired" },
 { name: "Parallel Computing", icon: "fas fa-tasks" },
 { name: "Performance Reasoning", icon: "fas fa-tachometer-alt" }
 ]
},
{
  title: "Databases & Data Management",
  description: "Working with structured data concepts, relational modelling, and foundational database systems.",
  tags: [
 { name: "Database Fundamentals", icon: "fas fa-database" },
 { name: "Relational Modelling", icon: "fas fa-table" },
 { name: "Data Structuring", icon: "fas fa-layer-group" }
 ]
},
{
  title: "Graphics & Visual Computing",
  description: "Developing visual representations and understanding graphical pipelines for interactive and visual systems.",
  tags: [
 { name: "Computer Graphics", icon: "fas fa-cube" },
 { name: "Visualisation", icon: "fas fa-chart-area" },
 { name: "Visual Computing", icon: "fas fa-eye" }
 ]
},
{
  title: "Mathematics & Quantitative Analysis",
  description: "Applying mathematical reasoning, abstraction, and statistical thinking to technical and analytical problems.",
  tags: [
 { name: "Calculus", icon: "fas fa-square-root-alt" },
 { name: "Linear Algebra", icon: "fas fa-vector-square" },
 { name: "Applied Mathematics", icon: "fas fa-calculator" },
 { name: "Statistics", icon: "fas fa-chart-bar" },
 { name: "Abstract Reasoning", icon: "fas fa-infinity" }
 ]
},
{
  title: "Human-Centred & Cognitive Analysis",
  description: "Understanding human behaviour, cognition, and decision-making in the workplace to inform better systems that boost organisational culture and intrinsic motivation among employees.",
  tags: [
 { name: "Industrial Psychology", icon: "fas fa-brain" },
 { name: "Human Behaviour Analysis", icon: "fas fa-users" },
 { name: "Decision-Making Theory", icon: "fas fa-balance-scale" }
 ]
},
{
  title: "Analytical & Research Skills",
  description: "Approaching complex problems with structured reasoning, abstraction, and independent technical learning.",
  tags: [
 { name: "Analytical Thinking", icon: "fas fa-search" },
 { name: "Formal Reasoning", icon: "fas fa-shapes" },
 { name: "Proof Techniques", icon: "fas fa-check-double" },
 { name: "Technical Writing", icon: "fas fa-file-alt" }
 ]
},

 {
      title: "Digital Media",
      description: "Skilled in Figma, Adobe Creative Cloud, and Canva for creating engaging designs, short and long form content across all social media platforms.",
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
              <img src = "https://res.cloudinary.com/dcfvhjvff/image/upload/v1768341365/IMG_1841_wmv2yi.jpg" alt = "Karabo Mnisi" className = "avatar-img" />
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
        <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
 ))}
          </div>

        {/* Introduction */}
        <div className="about-content">
          <div className="content-section intro-section">
            <h2>Introduction</h2>
            <p>
 I'm Karabo, a Wits University Computer Science graduate from Johannesburg with a passion for creating 
 digital experiences at the intersection of technology, design, and sports. My journey 
 combines technical expertise with creative problem-solving to build solutions that are 
 both functional and visually compelling.
            </p>
            <p>
 For team leaders and hiring managers seeking young, motivated team members, I am a candidate who aligns technical ability with organisational culture by combining disciplined learning, real-world digital execution, and a proven willingness to grow, contribute, and add value beyond my role.
 With a strong foundation in both development and design, I focus on creating seamless 
 user experiences that bridge the gap between technical implementation and user needs. 
 Whether it's working as an intern/understudy or assigned to a leadership role, I strive to 
 deliver solutions that bring positive impact to our team goals.
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