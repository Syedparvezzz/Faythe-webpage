import React from 'react';
import { Shield, Gauge, ArrowRight } from 'lucide-react';
import CustomizeImage from '../../assets/customize.png';
import './Customize.css';

const Customizable = () => {
  return (
    <section className="customizable-section">
      <div className="customizable-container">
        <div className="customizable-image">
          <img src={CustomizeImage} alt="Customize" />
        </div>
        <div className="customizable-content">
          <p className="customizable-label">CUSTOMIZABLE</p>
          <h2 className="customizable-title">
            Work Faster With <br /> Powerful Tools
          </h2>
          <p className="customizable-description">
            Unleash the power of our platform with a multitude of powerful features,
            empowering you to achieve your goals.
          </p>

          <div className="customizable-cards">
            <div className="customizable-card">
              <div className="icon red"><Shield size={32} /></div>
              <div>
                <h4>Enhance Security</h4>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
            <div className="customizable-card">
              <div className="icon red"><Gauge size={32} /></div>
              <div>
                <h4>High Performance</h4>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>

          <a href="/" className="customizable-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
  Learn More <ArrowRight size={20} />
</a>
        </div>
      </div>
    </section>
  );
};

export default Customizable;
