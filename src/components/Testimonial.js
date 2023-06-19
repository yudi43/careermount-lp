import React from 'react';

const Testimonial = ({ name, message }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Testimonial;