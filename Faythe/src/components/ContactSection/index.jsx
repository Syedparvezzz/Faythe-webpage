import React from 'react';
import './ContactSection.css';
import ContactImage from '../../assets/ContactUs.svg';

const ContactSection = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src={ContactImage} alt="Contact Illustration" />
        </div>

        <div className="contact-info">
          <span className="contact-tag">Contact Us</span>
          <h2 className="contact-title">We Love to Hear from You!</h2>

          <div className="contact-details">
            <p className="contact-phone">+1 833 670 1200</p>
            <p className="contact-hours">Mon–Fri: 8am–5pm CT</p>
            <a href="mailto:info@nataliemills.com" className="contact-email">
              info@nataliemills.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
