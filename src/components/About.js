import React from 'react';
import '../styles/About.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About CritiCare®</h2>
            <div className="about-description">
              <p>
                CritiCare®, a registered trademark in South Africa owned by Be Safe Paramedical, 
                incorporates all the emergency care products we develop and manufacture, to help you save lives.
              </p>
              <p>
                Brand CritiCare® is about finding simple solutions to historically complicated patient care challenges. 
                CritiCare® focuses on efficacy, affordability and equal access. We want every single emergency service 
                to be able to afford to use our products on every patient, and not just those who are privileged enough 
                to be able to afford private healthcare.
              </p>
              <p className="about-mission">
                CritiCare® speaks to our belief, that even one life lost, because of the lack of access to a 
                life-saving medical device, is one life too many.
              </p>
            </div>
            
            <div className="about-cta">
              <button className="btn-primary">Learn More About Us</button>
              <button className="btn-secondary">Our Story</button>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <img 
                src="https://i.ibb.co/jZWTh4fp/hero-Img-1.png" 
                alt="CritiCare team and facilities"
                className="about-img"
              />
            </div>
          </div>
        </div>

        <div className="mission-statement">
          <div className="mission-content">
            <h3 className="mission-title">Our Mission</h3>
            <blockquote className="mission-quote">
              "To democratize access to life-saving emergency medical equipment across South Africa, 
              ensuring that every emergency service - regardless of budget - can provide the highest 
              standard of care to every patient."
            </blockquote>
            <div className="mission-signature">
              <strong>— The CritiCare® Team</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;