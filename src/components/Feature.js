import React from 'react';

const Feature = ({ title, description }) => {
  return (
    <div style={featureStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const featureStyle = {
  maxWidth: '400px',
};

export default Feature;
