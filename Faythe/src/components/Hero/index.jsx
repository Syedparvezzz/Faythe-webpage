import React from 'react';
import './Hero.css';
import bgImage from '../../assets/Jesus2.jpg';
import appStore from '../../assets/DownloadAppStore.png';
import playStore from '../../assets/DownloadPlayStore.png';
import phone from '../../assets/Phone01.svg'; 

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div id="home" className="hero-content">
        <h1>Faith. Connect. Grow.</h1>
        <p>A community for believers. Share Your Prayers, Strengthen Your Faith.</p>
        <div className="download-buttons">
          <img src={appStore} alt="Download on App Store" loading="lazy" />
          <img src={playStore} alt="Get it on Google Play" loading="lazy" />
        </div>
      </div>

      <div className="graphic-section">
        <div className="red-circle">
          <img src={phone} alt="Phone mockup" className="single-phone" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
