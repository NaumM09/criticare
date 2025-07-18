import React from 'react';
import '../styles/Process.css';

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Design to Development',
      description: 'We take ideas and concepts and convert them into practical devices that save lives',
      image: 'https://i.ibb.co/KxmKbJmW/home-2-1536x716.jpg',
      icon: '🔧' // Will be replaced with CSS icon
    },
    {
      id: 2,
      title: 'A Skilled Workforce',
      description: 'Passionate about manufacturing products that help you save lives',
      image: 'https://i.ibb.co/HfDbgXHy/home-1-1536x716.jpg',
      icon: '✂️' // Will be replaced with CSS icon
    },
    {
      id: 3,
      title: 'Quality Assurance',
      description: 'Being both ISO 9001 and ISO 13485 certified, means that Quality Management is an integral part of CritiCare® culture',
      image: 'https://i.ibb.co/Gv4RSj15/home-4-1536x716.jpg',
      icon: '🎯' // Will be replaced with CSS icon
    }
  ];

  return (
    <section id="process" className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">Our Process</h2>
          <p className="process-subtitle">
            From concept to deployment, our proven methodology ensures every product 
            meets the highest standards of quality and effectiveness.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-card">
              <div className="process-image">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="process-img"
                />
              </div>
              
              <div className="process-content">
                <div className="process-divider">
                  <div className="divider-line"></div>
                  <div className="process-icon">
                    <div className={`icon-${step.id}`}></div>
                  </div>
                  <div className="divider-line"></div>
                </div>
                
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;