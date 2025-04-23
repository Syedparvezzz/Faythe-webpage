import React from 'react';
import Navbar from './components/Navbar/index.jsx';
import HeroSection from './components/Hero/index.jsx';
import FeaturesSection from './components/FeaturesSection'; // Adjust the import to match the folder name
import Footer from './components/Footer';
import About from './components/AboutSection';
import DownloadSection from './components/DownloadSection/index.jsx';
import Hero from './components/Hero/index.jsx';
import ScreenshotCarousel from './components/ScreenshotCarousel/index.jsx';
import FaqSection from './components/FaqSection/index.jsx';
import ContactSection from './components/ContactSection/index.jsx';
import ContactUs from './components/ContactUs/index.jsx';
import ScrollToTopButton from './components/ScrollToTopButton/index.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ScreenshotCarousel />
      <FaqSection />
      <DownloadSection />
      {/* <ContactUs /> */}
      <ContactSection />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
