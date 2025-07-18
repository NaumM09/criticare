import React from 'react';
import '../styles/Partner.css';

const Partners = () => {
  const partners = [
    {
      name: "Western Cape Government Health",
      logo: "https://i.ibb.co/QjnrQjgz/criticare-logos-4.png"
    
    },
    {
      name: "Gauteng Emergency Medical Services",
      logo: "https://i.ibb.co/9mbtDW9P/criticare-logos-2.png"
    },
    {
      name: "ER24",
      logo: "https://i.ibb.co/W4g7zbF5/criticare-logos-5.png"
    },
    {
      name: "Netcare 911",
      logo: "https://i.ibb.co/YTQFG321/criticare-logos-6.png"
    },
    {
      name: "University of Cape Town",
      logo: "https://i.ibb.co/gLkrX4p6/criticare-logos-3.png"
    }
  ];

  return (
    <section id="partners" className="partners">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">Trusted Partners</h2>
        </div>

        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="partner-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;