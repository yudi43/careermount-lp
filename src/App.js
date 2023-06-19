// App.js

import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ContactForm />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
