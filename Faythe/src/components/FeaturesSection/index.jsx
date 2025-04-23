// components/FeaturesSection/index.jsx

import React from 'react';
import {
  Monitor,
  Feather,
  Eye,
  UserCheck,
  Smartphone as ResponsiveIcon,
  Heart
} from 'lucide-react';
import FeaturesImage from '../../assets/Features.png';
import './Features.css';
import Customizable from '../Customize';
import ElegantDesign from '../ElegantDesign';

const FeaturesSection = () => {
  const leftFeatures = [
    {
      title: "Use On Any Device",
      description: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <Monitor size={32} />
    },
    {
      title: "Feather Icons",
      description: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <Feather size={32} />
    },
    {
      title: "Retina Ready",
      description: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <Eye size={32} />
    }
  ];

  const rightFeatures = [
    {
      title: "W3c Valid Code",
      description: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <UserCheck size={32} />
    },
    {
      title: "Fully Responsive",
      description: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <ResponsiveIcon size={32} />
    },
    {
      title: "Browser Compatibility",
      description: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <Heart size={32} />
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Discover Powerful Features</h1>
          <p className="section-description">
            Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
          </p>
        </div>

        <div className="features-layout">
          <div className="features-column left-column">
            {leftFeatures.map((feature, index) => (
              <div className="feature-card align-left" key={index}>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="icon-box">{feature.icon}</div>
              </div>
            ))}
          </div>

          <div className="features-image-centered">
            <img src={FeaturesImage} alt="Features" />
          </div>

          <div className="features-column">
            {rightFeatures.map((feature, index) => (
              <div className="feature-card align-left" key={index}>
                <div className="icon-box">{feature.icon}</div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Customizable />
      <ElegantDesign />
    </section>
  );
};

export default FeaturesSection;
