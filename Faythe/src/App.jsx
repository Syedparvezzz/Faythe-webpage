import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/FeaturesSection';
import Footer from './components/Footer';
import Overview from './components/OverviewSection';
import About from './components/AboutSection';
import Download from './components/DownloadSection';

function App() {
  return (
    <div>
      <Navbar /> 
      <HeroSection />
      <Features />
    </div>
  );
}

export default App;
