import React from 'react';
import '../styles/Hero.css';
import CriticareVideo from '../assets/videos/Criticare.mp4';

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
              <video 
                className="hero-video-element"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://i.ibb.co/jZWTh4fp/hero-Img-1.png"
              >
                <source src={CriticareVideo} type="video/mp4" />
                {/* Fallback to your existing image if video doesn't load */}
                <img 
                  src="https://i.ibb.co/jZWTh4fp/hero-Img-1.png" 
                  alt="Emergency medical professionals using CritiCare products"
                  className="hero-video-fallback"
                />
              </video>
              
              {/* Optional video controls */}
              <div className="video-controls">
                <button className="video-play-pause" aria-label="Play/Pause video">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;