import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AppStore from "../../assets/AppStore.webp";
import Playstore from "../../assets/Playstore.webp";
import { Menu, X } from "lucide-react";

const sectionIds = ["home", "features", "application", "faqs", "download", "contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    const handleLoad = () => {
      setScrolled(window.scrollY > 10);
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); 
      }
    }
  }, [location]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const isActive = (id) => (activeSection === id ? "active-link" : "");

  const getDisplayName = (id) => {
    if (id === "contact") return "Contact Us";
    if (id === "faqs") return "FAQs";
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
      <div className="logo" onClick={(e) => handleNavClick(e, "home")} style={{ cursor: "pointer" }}>
  <img src={logo} alt="Logo" />
</div>


        <ul className="nav-links">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={isActive(id)}
                onClick={(e) => handleNavClick(e, id)}
              >
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
                <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
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
