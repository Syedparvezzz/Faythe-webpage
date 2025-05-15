import React from 'react';
import './Footer.css';
import logo from "../../assets/logo1.webp";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const Footer = () => {
  const navigate = useNavigate();

  // const handleNavigation = (path) => {
  //   navigate(path);
  //   const scrollTimeout = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);

  //   // Cleanup to prevent memory leak
  //   return () => clearTimeout(scrollTimeout);
    
  // };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Faythe Logo" className="footer-logo" loading="lazy" />
        </div>

        <div className="footer-center">
          <p>© 2025 Faythe.media - All rights reserved.</p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          {/* <Link to="/terms">Terms & Conditions</Link> */}
          {/* <Link to="/privacy">Privacy Policy</Link> */}
            {/* <span onClick={() => handleNavigation('/terms')}>Terms & Conditions</span>
            <span onClick={() => handleNavigation('/privacy')}>Privacy Policy</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
