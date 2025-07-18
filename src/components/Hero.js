import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Life-Saving Emergency Care Products
              <span className="hero-highlight"> for Every Service</span>
            </h1>
            <p className="hero-subtitle">
              CritiCare® develops and manufactures affordable emergency medical solutions 
              that ensure every emergency service can save lives - because one life lost 
              due to lack of access is one too many.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Emergency Services</span>
              </div>
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Lives Impacted</span>
              </div>
              <div className="stat">
                <span className="stat-number">9</span>
                <span className="stat-label">Provinces Served</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn-primary">
                View Our Products
              </button>
              <button className="btn-secondary">
                Request a Quote
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-video">
              <iframe 
                className="hero-video-element"
                src="https://www.youtube.com/embed/IuEpMPcy1oQ?autoplay=1&mute=1&loop=1&playlist=IuEpMPcy1oQ&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="CritiCare Emergency Medical Equipment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Fallback image overlay for loading */}
              <div className="video-loading-overlay">
                <img 
                  src="https://i.ibb.co/jZWTh4fp/hero-Img-1.png" 
                  alt="Emergency medical professionals using CritiCare products"
                  className="hero-video-fallback"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;