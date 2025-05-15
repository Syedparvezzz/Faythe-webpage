// App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection'; 
import Customizable from './components/Customize';
import ElegantDesign from './components/ElegantDesign';
import Footer from './components/Footer';
import DownloadSection from './components/DownloadSection';
import Hero from './components/Hero';
import ScreenshotCarousel from './components/ScreenshotCarousel';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    const handleResize = () => {
      window.dispatchEvent(new Event('resize'));
    };

    handleResize();
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="features"><FeaturesSection /></section>
      <section id="custom"><Customizable /></section>
      <section id="design"><ElegantDesign /></section>
      <section id="screenshots"><ScreenshotCarousel /></section>
      <section id="faq"><FaqSection /></section>
      <section id="download"><DownloadSection /></section>
      <section id="contact"><ContactSection /></section>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
