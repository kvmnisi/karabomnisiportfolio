import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code' },
    { id: 'designs', label: 'Designs', icon: 'fas fa-paint-brush' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <a 
            href="#home" 
            className="nav-logo" 
            onClick={() => handleLinkClick('home')}
          >
            <span style={{ color: '#ffcc33' }}>K</span>arabo <span style={{ color: '#ffcc33' }}>M</span>nisi
          </a>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                <i className={link.icon} style={{ marginRight: '8px' }}></i>
                {link.label}
              </a>
            ))}
            
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-close-btn"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`mobile-nav-link ${activeLink === link.id ? 'active' : ''}`}
            onClick={() => handleLinkClick(link.id)}
          >
            <i className={link.icon}></i>
            {link.label}
          </a>
        ))}

        <button 
          className="mobile-theme-toggle"
          onClick={() => {
            toggleTheme();
            setIsMobileMenuOpen(false);
          }}
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </>
  );
};

export default Navbar;