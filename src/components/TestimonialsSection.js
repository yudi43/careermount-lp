import React from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    rating: 4.8,
    testimonial: 'The college admission process was seamless. I received excellent guidance and support throughout. Thank you!',
    name: 'Aarav Sharma',
  },
  {
    rating: 4.5,
    testimonial: "I'm grateful for the assistance I received. The counselors provided valuable insights and helped me secure admission.",
    name: 'Anaya Patel',
  },
  {
    rating: 4.2,
    testimonial: 'The college application process was simplified and stress-free. The team helped me find the best fit for my goals.',
    name: 'Arjun Gupta',
  },
  {
    rating: 4.9,
    testimonial: "I couldn't have asked for better support. The consultants were knowledgeable and guided me towards success.",
    name: 'Aanya Reddy',
  },
  {
    rating: 4.7,
    testimonial: 'The college admission services exceeded my expectations. They helped me stand out and secure admission to my dream college.',
    name: 'Advait Kumar',
  },
];

const TestimonialsSection = () => {
  const testimonialContainerStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
  };

  const testimonialWrapperStyle = {
    display: 'flex',
    animation: 'scrollText 20s linear infinite',
    width: `${testimonials.length * 100}%`,
  };

  const testimonialCardStyle = {
    flex: `0 0 ${100 / testimonials.length}%`,
    margin: '0 10px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
  };
  const keyframes = `
    @keyframes scrollText {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-${100 / testimonials.length}%);
      }
    }
  `;

  const renderTestimonials = () => {
    return testimonials.map((testimonial, index) => (
      <div key={index} style={testimonialCardStyle}>
        <Testimonial
          rating={testimonial.rating}
          testimonial={testimonial.testimonial}
          name={testimonial.name}
        />
      </div>
    ));
  };

  return (
    <section>
      <h2 style={headingStyle}>What People Say About Us</h2>
      <style>{keyframes}</style>
      <div style={testimonialContainerStyle}>
        <div style={testimonialWrapperStyle}>
          {renderTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
