import React, { useState, useEffect } from 'react';
import '../styles/Nav.css';
import NavImg from "../assets/NavImg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-image">
            <img 
              src={NavImg}
              alt="CritiCare Logo"
              className="logo-img"
            />
          </div>
          <div className="logo-text">
            <span className="logo-brand">CritiCare</span>
            <span className="logo-reg">®</span>
          </div>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About Us
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('products')}
          >
            Our Products
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('process')}
          >
            Our Process
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('partners')}
          >
            Partners
          </button>
          <button 
            className="nav-link nav-cta"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;