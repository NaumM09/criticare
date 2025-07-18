import React from 'react';
import '../styles/Footer.css';
import NavImg from '../assets/NavImg.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Our Process', href: '#process' },
    { name: 'Partners', href: '#partners' }
  ];

  const productCategories = [
    { name: 'Medical Devices', href: '#products' },
    { name: 'Medical Disposals', href: '#products' },
    { name: 'EMS JumpBags', href: '#products' },
    { name: 'First Aid Bags', href: '#products' },
    { name: 'Custom Solutions', href: '#products' }
  ];

  const supportLinks = [
    { name: 'Technical Support', href: '#contact' },
    { name: 'Training Programs', href: '#contact' },
    { name: 'Documentation', href: '#contact' },
    { name: 'Warranty Info', href: '#contact' },
    { name: 'Request Quote', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
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
            
            <p className="company-description">
              Proudly South African manufacturer of affordable emergency medical equipment. 
              Because one life lost due to lack of access is one too many.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Cape Town, South Africa</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+27 21 123 4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@criticare.co.za</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>24/7 Emergency Support</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(category.href)}
                    className="footer-link"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="newsletter-description">
              Get the latest news on emergency medical innovations and product updates.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            <p className="newsletter-note">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 CritiCare® - Be Safe Paramedical. All rights reserved.</p>
              <p>Proudly manufactured in South Africa</p>
            </div>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;