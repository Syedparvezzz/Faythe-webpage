import React from 'react';
import './Footer.css';
import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Faythe Logo" className="footer-logo" loading="lazy" />
        </div>

        <div className="footer-center">
          <p>
            © 2025 Faythe.media - All rights reserved. 
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
