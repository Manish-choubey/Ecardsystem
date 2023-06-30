import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import HeroSection from './component/herosection/HeroSection';
import FeaturesSection from './component/FeatureSection/FeaturesSection';
import TestimonialsSection from './component/Testominal/TestimonialsSection';
import PartnersSection from './component/PartnersSection/PartnersSection';
import CallToActionSection from './component/CallToActionSection.js/CallToActionSection';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div className='backgrond'>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default App;
