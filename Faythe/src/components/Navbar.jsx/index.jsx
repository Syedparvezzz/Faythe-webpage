import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AppStore from "../../assets/AppStore.png";
import Playstore from "../../assets/Playstore.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#application">Application</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="right-section">
          <div className="store-buttons">
            <img src={AppStore} alt="App Store" className="store-icon" />
            <img src={Playstore} alt="Play Store" className="store-icon" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? (
              <X size={24} color={scrolled ? "#000" : "#000"} />
            ) : (
              <Menu size={24} color={scrolled ? "#000" : "#000"} />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#features" onClick={toggleMenu}>Features</a></li>
            <li><a href="#application" onClick={toggleMenu}>Application</a></li>
            <li><a href="#faqs" onClick={toggleMenu}>FAQs</a></li>
            <li><a href="#download" onClick={toggleMenu}>Download</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;