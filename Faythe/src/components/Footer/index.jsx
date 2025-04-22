import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.svg";
import {
  ShoppingCart,
  Dribbble,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Faythe Logo" className="footer-logo" />
        </div>

        <div className="footer-center">
          <p>
            © 2025 Faythe.media - All rights reserved. 
          </p>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a href="#"><ShoppingCart size={16} /></a>
            <a href="#"><Dribbble size={16} /></a>
            <a href="#"><Linkedin size={16} /></a>
            <a href="#"><Facebook size={16} /></a>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Twitter size={16} /></a>
            <a href="#"><Mail size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
