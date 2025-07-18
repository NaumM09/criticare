import React, { useState } from 'react';
import '../styles/Product.css';

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Criticare Head Immobiliser',
      image: 'https://i.ibb.co/DfFBxBkZ/Universal-Head-Immobilisation-Device-Head-Imm.png',
      features: ['SAHPRA Approved', 'Universal Fit', 'Lightweight Design'],
      description: 'Universal head immobilisation device designed to provide secure cervical spine stabilization during emergency transport and medical procedures.',
      badge: 'Top Pick'
    },
    {
      id: 2,
      name: 'Medice Instant Ice Pack Disposable',
      image: 'https://i.ibb.co/XrTgd5dT/Medice-Instant-Ice-Pack-Disposable-REF-MI.png',
      features: ['Instant Activation', 'Single Use', 'Portable'],
      description: 'Disposable instant ice pack that provides immediate cold therapy for injuries, sprains, and pain relief in emergency situations.',
      badge: 'Essential'
    },
    {
      id: 3,
      name: 'CritiPack Intraosseous Access Pack',
      image: 'https://i.ibb.co/MkKr2BbC/CRITI-P-IVA.png',
      features: ['Sterile Packed', 'Complete Set', 'Emergency Ready'],
      description: 'Complete intraosseous access procedure pack containing all essential components for rapid vascular access in critical emergency situations.',
      badge: 'Life Saver'
    },
    {
      id: 4,
      name: 'Burn-Eaz Dressings',
      image: 'https://i.ibb.co/mVHPtxyS/Dressings-Together.png',
      features: ['Pain Relief', 'Non-Adherent', 'Cooling Effect'],
      description: 'Specialized burn care dressings that provide immediate pain relief and cooling effect for various degrees of burns and thermal injuries.',
      badge: 'Trusted Choice'
    },
    {
      id: 5,
      name: 'Criticare CrashPAC',
      image: 'https://i.ibb.co/YGVv0LR/CrashPAC.png',
      features: ['Emergency Ready', 'Comprehensive Kit', 'Organized Storage'],
      description: 'Complete emergency crash cart solution containing essential life-saving equipment and medications for rapid response situations.',
      badge: 'New'
    },
    {
      id: 6,
      name: 'CritiCare AmpPAC Pro Micro Drug Bag',
      image: 'https://i.ibb.co/PshL5bsj/1-Pro.png',
      features: ['Temperature Control', 'Secure Storage', 'Compact Design'],
      description: 'Professional micro drug bag designed for secure medication storage and transport with temperature control for emergency medical services.',
      badge: null
    },
    {
      id: 7,
      name: 'Hikers First Aid Kit',
      image: 'https://i.ibb.co/FLMqSDM4/Hikers-FAK-Refill-REF-410-R.png',
      features: ['Outdoor Ready', 'Lightweight', 'Weather Resistant'],
      description: 'Compact first aid kit specifically designed for outdoor activities, hiking, and adventure sports with essential emergency supplies.',
      badge: 'Popular'
    }
  ];

  // Show only first 4 products unless "View More" is clicked
  const displayedProducts = showMore ? products : products.slice(0, 4);
  const hasMoreProducts = products.length > 4;

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Top Picks of the Month</h2>
          <p className="products-subtitle">
            Our most trusted emergency medical solutions - handpicked by medical professionals 
            and proven in the field to save lives when it matters most.
          </p>
        </div>

        <div className="products-grid">
          {displayedProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <div className={`product-badge ${product.badge.toLowerCase()}`}>
                  {product.badge}
                </div>
              )}
              
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>

              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="product-footer">
                  <div className="product-actions">
                    <button className="btn-secondary-small">Learn More</button>
                    <button className="btn-primary-small">Enquire</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProducts && (
          <div className="view-more-section">
            <button 
              className="view-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
                            {showMore ? 'View Less Products' : 'View More Products'}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className={`view-more-icon ${showMore ? 'rotated' : ''}`}
              >
                <path d="M12 15.5l-6-6h12l-6 6z"/>
              </svg>
            </button>
          </div>
        )}

        <div className="products-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Upgrade Your Emergency Response?</h3>
            <p className="cta-description">
              Join hundreds of emergency services across South Africa who trust CritiCare® products. 
              Get expert recommendations and custom solutions for your specific needs.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Expert Consultation</button>
              <button className="btn-secondary">Download Product Catalog</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;