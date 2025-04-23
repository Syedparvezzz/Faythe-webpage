import React from "react";
import "./DownloadSection.css";
import featuresImg from "../../assets/Customize.png";
import { Smartphone, ArrowRight } from "lucide-react";
import AppStore from "../../assets/DownloadAppStore.png";
import PlayStore from "../../assets/DownloadPlayStore.png";

const DownloadSection = () => {
  return (
    <section id="download" className="download-section">
      <div className="download-container">
        <div className="download-mockup">
          <div className="mockup-frame">
            <img src={featuresImg} alt="App Preview" />
          </div>
        </div>

        <div className="download-text-content">
          <p className="download-tag">MOBILE APPS</p>
          <h2 className="download-title">Available for your <br/>Smartphones</h2>
          <p className="download-subtitle">
            Unleash the power of our platform with a multitude of powerful features,
            empowering you to achieve your goals.
          </p>

          <div className="store-buttons1">
            <img
              src={AppStore}
              alt="Download on App Store"
              className="store-btn"
            />
            <img
              src={PlayStore} 
              alt="Get it on Google Play"
              className="store-btn"
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
