import React from 'react';
import './ContactSection.css';
import ContactImage from '../../assets/ContactUs.svg';

const ContactSection = () => {
  return (
    <div id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container">
        <div className="contact-image" data-aos="fade-right">
          <img src={ContactImage} alt="Contact Illustration" loading="lazy" />
        </div>

        <div className="contact-info" data-aos="fade-left">
          {/* <span className="contact-tag">Contact Us</span> */}
          <h2 className="contact-title">We Love to Hear from You!</h2>

          <div className="contact-details" data-aos="fade-up" data-aos-delay="100">
            <p className="contact-phone">+1 833 670 1200</p>
            <p className="contact-hours">Mon–Fri: 8am–5pm CT</p>
            <p className="contact-address"><strong>RETURN ADDRESS:</strong></p>
            <p className="contact-address">5208 Tennyson Pkwy Ste 110 Plano, TX 75024</p>
            <p className="contact-email">Press Inquiries: <a href="mailto:press@nataliemills.com">press@nataliemills.com</a></p>
            <p className="contact-email">Stockist & Wholesale Inquiries: <a href="mailto:sales@nataliemills.com">sales@nataliemills.com</a></p>
            <p className="contact-email">Customer Services: <a href="mailto:info@nataliemills.com">info@nataliemills.com</a></p>
            <p className="contact-email">Ambassador Inquiries: <a href="mailto:ambassador@nataliemills.com">ambassador@nataliemills.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
