import React from 'react';
import './ContactSection.css';
import ContactImage from '../../assets/ContactUs.svg';
import { Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src={ContactImage} alt="Contact Illustration" />
        </div>

        <div className="contact-form">
          <span className="contact-tag">Contact Us</span>
          <h2 className="contact-title">Get in touch !</h2>

          <form>
            <div className="contact-row">
              <div className="input-group">
                <label>Your Name:</label>
                <input type="text" placeholder="Name :" />
              </div>
              <div className="input-group">
                <label>Your Email:</label>
                <input type="email" placeholder="Email :" />
              </div>
            </div>

            <div className="input-group-full">
              <label>Your Question:</label>
              <input type="text" placeholder="Subject :" />
            </div>

            <div className="input-group-full">
              <label>Your Comment:</label>
              <textarea rows="4" placeholder="Message :"></textarea>
            </div>

            <button type="submit" className="send-button">
              {/* <Send size={16} style={{ marginRight: '8px' }} /> */}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
