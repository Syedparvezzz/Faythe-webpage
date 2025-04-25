import React from 'react';
import { Flame, Notebook } from 'lucide-react';
import CustomizeImage from '../../assets/Features.png';
import './Customize.css';

const Customizable = () => {
  return (
    <section className="customizable-section" data-aos="fade-up">
      <div className="customizable-container">
        <div className="customizable-image" data-aos="fade-up">
          <img src={CustomizeImage} alt="Customize" loading="lazy" />
        </div>
        <div className="customizable-content" data-aos="fade-up">
          {/* <p className="customizable-label">CUSTOMIZABLE</p> */}
          <h2 className="customizable-title">
          How the App Strengthens <br/>Faith Daily
          </h2>
          <p className="customizable-description">
          Your walk with God is personal — but it doesn’t have to be lonely. This app helps you stay consistent, encouraged, and connected in your spiritual journey.
          </p>

          <div className="customizable-cards">
            <div className="customizable-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon red"><Notebook size={32} /></div>
              <div>
                <h4>Reflect with Purpose</h4>
                <p>Begin each day with meaningful devotionals and journaling prompts that nourish your soul</p>
              </div>
            </div>
            <div className="customizable-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon red"><Flame size={32} /></div>
              <div>
                <h4>Build Holy Habits</h4>
                <p>Stay on track with a streak tracker that encourages daily prayer, reflection, and spiritual growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customizable;
