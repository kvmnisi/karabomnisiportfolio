import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './navbar.css';

const Navbar = () => {
const [activeLink, setActiveLink] = useState('home');
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const { isDarkMode, toggleTheme } = useTheme();
const location = useLocation();
const navigate = useNavigate();

const navLinks = [
{ id: 'home', label: 'Home', icon: 'fas fa-home', isHash: true },
{ id: 'about', label: 'About', icon: 'fas fa-user', isHash: true },
{ id: 'designs', label: 'Designs', icon: 'fas fa-paint-brush', isHash: false, path: '/designs' },
{
id: 'youtube-thumbnails',
label: 'YouTube Thumbnails',
icon: 'fab fa-youtube',
isHash: false, // This goes to separate page
path: '/youtube-thumbnails'
},
{ id: 'contact', label: 'Contact', icon: 'fas fa-envelope', isHash: true }
];

// Update active link based on current route/location
useEffect(() => {
  const path = location.pathname;

  if (path === '/youtube-thumbnails') {
    setActiveLink('youtube-thumbnails');
  } else if (path === '/designs') {
    setActiveLink('designs');
  } else {
    setActiveLink('home');
  }
}, [location.pathname]);


const handleHashLinkClick = (linkId) => {
  setActiveLink(linkId);
  setIsMobileMenuOpen(false);

  if (location.pathname === '/') {
    // Already on home → scroll immediately
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate first, then scroll AFTER route change
    navigate('/', { replace: false });

    setTimeout(() => {
      const element = document.getElementById(linkId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};


const handlePageLinkClick = (linkId) => {
setActiveLink(linkId);
setIsMobileMenuOpen(false);
// For separate page links, navigate will be handled by Link component
};

const toggleMobileMenu = () => {
setIsMobileMenuOpen(!isMobileMenuOpen);
};

// Function to handle link clicks based on type
const handleLinkClick = (link) => {
if (link.isHash) {
handleHashLinkClick(link.id);
} else {
handlePageLinkClick(link.id);
}
};

return (
<>
<nav className="navbar">
<div className="container nav-container">
{/* Logo - Always goes to home */}
<Link
to="/"
className="nav-logo"
onClick={() => {
setActiveLink('home');
setIsMobileMenuOpen(false);
}}
>
<span>K</span>arabo <span>M</span>nisi
</Link>
      {/* Desktop Navigation */}
      <div className="nav-links">
        {navLinks.map((link) => (
          link.isHash ? (
            // Hash links for sections on home page
            <a
              key={link.id}
              href="#"
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link);
              }}
            >
              <i className={link.icon} style={{ marginRight: '8px' }}></i>
              {link.label}
            </a>
          ) : (
            // Page link for YouTube Thumbnails
            <Link
              key={link.id}
              to={link.path}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              <i className={link.icon} style={{ marginRight: '8px' }}></i>
              {link.label}
            </Link>
          )
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
      link.isHash ? (
        // Hash links for mobile
        <a
          key={link.id}
          href={`/#${link.id}`}
          className={`mobile-nav-link ${activeLink === link.id ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(link);
          }}
        >
          <i className={link.icon}></i>
          {link.label}
        </a>
      ) : (
        // Page links for mobile
        <Link
          key={link.id}
          to={link.path}
          className={`mobile-nav-link ${activeLink === link.id ? 'active' : ''}`}
          onClick={() => handleLinkClick(link)}
        >
          <i className={link.icon}></i>
          {link.label}
        </Link>
      )
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