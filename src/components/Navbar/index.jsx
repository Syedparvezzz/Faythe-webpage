import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AppStore from "../../assets/AppStore.png";
import Playstore from "../../assets/Playstore.png";
import { Menu, X } from "lucide-react";

const sectionIds = ["home", "features", "application", "faqs", "download", "contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const isActive = (id) => (activeSection === id ? "active-link" : "");

  // ✅ Custom names
  const getDisplayName = (id) => {
    if (id === "contact") return "Contact Us";
    if (id === "faqs") return "FAQs";
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="nav-links">
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={isActive(id)}>
                {getDisplayName(id)}
              </a>
            </li>
          ))}
        </ul>

        <div className="right-section">
          <div className="store-buttons">
            <img src={AppStore} alt="App Store" className="store-icon" />
            <img src={Playstore} alt="Play Store" className="store-icon" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={toggleMenu}>
                  {getDisplayName(id)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
