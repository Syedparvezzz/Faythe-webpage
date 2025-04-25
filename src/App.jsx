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
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Optional: Refresh AOS after mount
    setTimeout(() => {
      AOS.refresh();
    }, 500);
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
