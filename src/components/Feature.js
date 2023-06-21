import React from 'react';

const Feature = ({ title, description, icon }) => {
  return (
    <div style={featureStyle}>
      <img src={icon} alt="Feature Icon" style={iconStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const featureStyle = {
  maxWidth: '400px',
};

const iconStyle = {
  width: '50px',
  height: '50px',
};

export default Feature;
