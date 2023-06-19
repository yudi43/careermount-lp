import React from 'react';
import Testimonial from './Testimonial';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'John Doe', message: 'Great service, highly recommended!' },
    { name: 'Jane Smith', message: 'I found exactly what I was looking for.' },
    // Add more testimonials as needed
  ];

  return (
    <section>
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} name={testimonial.name} message={testimonial.message} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;