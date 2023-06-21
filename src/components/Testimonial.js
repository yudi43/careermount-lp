import React from 'react';

const Testimonial = ({ testimonial, name }) => {
  const testimonialCardStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const testimonialStyle = {
    fontSize: '16px',
    marginBottom: '8px',
  };

  const nameStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return (
    <div style={testimonialCardStyle}>
      <p style={testimonialStyle}>{testimonial}</p>
      <p style={nameStyle}>- {name}</p>
    </div>
  );
};

export default Testimonial;
