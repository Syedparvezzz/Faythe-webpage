import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/Hero/index.jsx';
import Features from './components/FeaturesSection/index.jsx';
import Footer from './components/Footer';
import About from './components/AboutSection';
import Download from './components/DownloadSection';
import Hero from './components/Hero/index.jsx';
import ScreenshotCarousel from './components/ScreenshotCarousel/index.jsx';
import FaqSection from './components/FaqSection/index.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ScreenshotCarousel />
      {/* <FaqSection /> */}
    </div>
  );
}

export default App;
