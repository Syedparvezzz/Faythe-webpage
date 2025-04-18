import React from "react";
import "./ElegantDesign.css";
import CustomizeImage from '../../assets/customize.png';
import { Check, ArrowRight } from "lucide-react";

const ElegantDesign = () => {
  return (
    <section className="elegant-container">
      <div className="elegant-left">
        <p className="elegant-subtitle">ELEGANT DESIGN</p>
        <h2 className="elegant-title">Share your photos with friends easily</h2>
        <p className="elegant-description">
          Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
        </p>
        <ul className="elegant-list">
          <li><Check className="check-icon" /> Digital Marketing Solutions for Tomorrow</li>
          <li><Check className="check-icon" /> Our Talented & Experienced Marketing Agency</li>
          <li><Check className="check-icon" /> Create your own skin to match your brand</li>
        </ul>
        <a href="#" className="elegant-link">
          Learn More <ArrowRight className="arrow-icon" />
        </a>
      </div>
      <div className="elegant-right">
        <img src={CustomizeImage} alt="Elegant Design" />
      </div>
    </section>
  );
};

export default ElegantDesign;
