import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
