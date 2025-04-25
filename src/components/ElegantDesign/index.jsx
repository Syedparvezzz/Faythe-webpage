import React from "react";
import "./ElegantDesign.css";
import Elegantdesign from '../../assets/Elegantdesign.png';
import { Check } from "lucide-react";

const ElegantDesign = () => {
  return (
    <section className="elegant-container" data-aos="fade-up">
      <div className="elegant-left" data-aos="fade-up">
        {/* <p className="elegant-subtitle">ELEGANT DESIGN</p> */}
        <h2 className="elegant-title">Share your Faith as every post is your Prayer</h2>
        <p className="elegant-description">
        In this sacred space, your words carry weight — not just likes and reactions, but real prayers and heavenly attention.
        </p>
        <ul className="elegant-list">
          <li data-aos="fade-up" data-aos-delay="100">
            <Check className="check-icon" /> Hearts unite to pray for you
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <Check className="check-icon" /> People are reminded they're not alone
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <Check className="check-icon" /> Heaven hears what you write
          </li>
        </ul>
      </div>

      <div className="elegant-right" data-aos="fade-up">
        <img src={Elegantdesign} alt="Elegant Design" loading="lazy" />
      </div>
    </section>
  );
};

export default ElegantDesign;
