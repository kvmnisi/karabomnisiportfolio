import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/kvmnisi' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/karabomnisi/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/kmnisi_/' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:karabo1306@gmail.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} / Karabo Mnisi / 
            <span style={{ color: '#ffcc33', marginLeft: '8px' }}>
              Computer Science Student | UX/UI & Digital Media
            </span>
          </p>
          
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;