import React from 'react';
import Feature from './Feature';

import oneIcon from '../assets/one.png';
import twoIcon from '../assets/two.png';
import threeIcon from '../assets/three.png';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Expert Admission Guidance for Your Dream College!',
      description:
        'Navigate the complex landscape of college admissions with our expert guidance. Discover the perfect college that offers your desired courses, taking into consideration crucial factors such as location, fees, placements, and more. Let us help you make informed decisions and secure your future.',
      icon: oneIcon,
    },
    {
      title: 'Streamlined, Hassle-Free Admission Process',
      description:
        'Say goodbye to the paperwork nightmare! Our experienced team takes charge of processing your applications and documentation for the college of your choice. Enjoy discounted fees and let us handle the intricate paperwork, ensuring a smooth journey towards your desired college admission.',
      icon: twoIcon,
    },
    {
      title: 'Secure Admission to Your Dream College!',
      description:
        'No more uncertainty or waiting anxiously for college acceptance! We guarantee a secure admission process, ensuring you have the admission letter in your hand for your dream college. Trust our expertise to navigate the complexities of the application process and provide you with the confidence to embark on your educational journey.',
      icon: threeIcon,
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>What We Offer</h2>
      <div className="features-container" style={containerStyle}>
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  textAlign: 'center',
};

const headingStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '24px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

export default FeaturesSection;
