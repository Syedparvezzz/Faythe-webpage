import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/index.jsx';
import FeaturesSection from './components/FeaturesSection'; 
import Customizable from './components/Customize/index.jsx';
import ElegantDesign from './components/ElegantDesign/index.jsx';
import Footer from './components/Footer';
import DownloadSection from './components/DownloadSection/index.jsx';
import Hero from './components/Hero/index.jsx';
import ScreenshotCarousel from './components/ScreenshotCarousel/index.jsx';
import FaqSection from './components/FaqSection/index.jsx';
import ContactSection from './components/ContactSection/index.jsx';
import ScrollToTopButton from './components/ScrollToTopButton/index.jsx';

function App() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Refresh AOS after mount
    setTimeout(() => {
      AOS.refresh();
    }, 500);

    // Handle resize and layout recalculation on page load and image load
    const handleResize = () => {
      window.dispatchEvent(new Event('resize')); // Trigger layout recalculation
    };

    // Fire on mount
    handleResize();

    // Fire again when all images are loaded
    window.addEventListener('load', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Customizable />
      <ElegantDesign />
      <ScreenshotCarousel />
      <FaqSection />
      <DownloadSection />
      <ContactSection />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
