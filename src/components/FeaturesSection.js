import React from 'react';
import Feature from './Feature';

const FeaturesSection = () => {
  const features = [
    { title: 'Feature 1', description: 'Description 1' },
    { title: 'Feature 2', description: 'Description 2' },
    { title: 'Feature 3', description: 'Description 3' },
  ];

  return (
    <section>
      <h2>Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <Feature key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;