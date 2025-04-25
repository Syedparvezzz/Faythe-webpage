import React from 'react';
import {
  Heart,
  Users,
  Notebook,
  Bot,
  ShoppingCart,
  Flame
} from 'lucide-react';
import FeaturesImage from '../../assets/Customizable.svg';
import './Features.css';
import Customizable from '../Customize';
import ElegantDesign from '../ElegantDesign';

const FeaturesSection = () => {
  const leftFeatures = [
    {
      title: "Prayer Wall",
      description: "Post prayer requests and receive support from the community through prayers",
      icon: <Heart size={32} />
    },
    {
      title: "Community Groups",
      description: "Join groups based on interests or needs to foster deeper faith and connections",
      icon: <Users size={32} />
    },
    {
      title: "Journal & Reflection",
      description: "A private space to reflect, document, and share your personal spiritual journey.",
      icon: <Notebook size={32} />
    }
  ];

  const rightFeatures = [
    {
      title: "KOOMBA Support",
      description: "An AI chatbot offering quick answers and prayer support for users anytime.",
      icon: <Bot size={32} />
    },
    {
      title: "E-commerce Store",
      description: "A marketplace for Christian resources to strengthen your faith.",
      icon: <ShoppingCart size={32} />
    },
    {
      title: "Streak Tracker",
      description: "Track your daily prayer, Bible reading, and spiritual growth with motivational streaks.",
      icon: <Flame size={32} />
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h1 className="section-title">Explore Faythe Features</h1>
          <p className="section-description">
            Explore Features Rooted in Grace. <br />
            Designed to Elevate Your Faith Journey with us.
          </p>
        </div>

        <div className="features-layout">
          <div className="features-column left-column">
            {leftFeatures.map((feature, index) => (
              <div
                className="feature-card align-left"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="icon-box">{feature.icon}</div>
              </div>
            ))}
          </div>

          <div className="features-image-centered" data-aos="fade-up" data-aos-delay="200">
            <img src={FeaturesImage} alt="Features" loading="lazy" />
          </div>

          <div className="features-column">
            {rightFeatures.map((feature, index) => (
              <div
                className="feature-card align-left"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
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
    </section>
  );
};

export default FeaturesSection;
