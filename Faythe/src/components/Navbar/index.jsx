import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
                setHidden(window.scrollY > lastScrollY);
            } else {
                setScrolling(false);
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolling ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
            <div className="logo">
                <img src={""} alt="Logo" />
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <button className="cta">Download the App</button>
            <div className="hamburger" onClick={toggleMenu}>
                <Menu size={24} />
            </div>
        </nav>
    );
}

export default Navbar;
