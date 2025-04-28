import React from "react";
import "./DownloadSection.css";
import featuresImg from "../../assets/Download.webp";
import { Smartphone, ArrowRight } from "lucide-react";
import AppStore from "../../assets/DownloadAppStore.webp";
import PlayStore from "../../assets/DownloadPlayStore.webp";

const DownloadSection = () => {
  return (
    <section id="download" className="download-section" data-aos="fade-up">
      <div className="download-container">
        <div className="download-mockup" data-aos="fade-up">
          <div className="mockup-frame">
            <img src={featuresImg} alt="App Preview" loading="lazy" />
          </div>
        </div>

        <div className="download-text-content" data-aos="fade-up">
          {/* <p className="download-tag">MOBILE APPS</p> */}
          <h2 className="download-title">Available for your <br/>Smartphones</h2>
          <p className="download-subtitle">
            Unleash the power of our platform with a multitude of powerful features,
            empowering your spritual goals.
          </p>

          <div className="store-buttons1">
            <img
              src={AppStore}
              alt="Download on App Store"
              className="store-btn"
              loading="lazy"
            />
            <img
              src={PlayStore} 
              alt="Get it on Google Play"
              className="store-btn"
              loading="lazy"
            />
          </div>

          <div className="install-now">
            <Smartphone size={42} color="#de6f00" />
            <span className="install-text">
              Install app now on your cellphones <br /> <a href="/" className="install-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Install Now <ArrowRight size={20} />
              </a>
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
