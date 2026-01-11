import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code' },
    {id: 'designs', label: 'Designs', icon: 'fas fa-paint-brush'},
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={() => setActiveLink('home')}>
          <span style={{ color: '#ffcc33' }}>K</span>arabo <span style={{ color: '#ffcc33' }}>M</span>nisi
        </a>
        
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={() => setActiveLink(link.id)}
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
      </div>
    </nav>
  );
};

export default Navbar;