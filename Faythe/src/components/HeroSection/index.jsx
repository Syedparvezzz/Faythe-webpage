import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Faith. Connect. Grow.</h1>
        <p>A community for believers. A place for spiritual growth.</p>
        <button className="hero-cta">Download Now</button>
      </div>
      <div className="scroll-icon">&#x2193;</div>
    </section>
  );
};

export default HeroSection;
