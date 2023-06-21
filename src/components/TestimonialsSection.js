import React from 'react';
import Testimonial from './Testimonial';
import quoteIcon from '../assets/quoteIcon.png';

const testimonials = [
    {
      "rating": 4.8,
      "testimonial": "The college admission process was seamless. I received excellent guidance and support throughout. Thank you!",
      "name": "Aarav Sharma"
    },
    {
      "rating": 4.5,
      "testimonial": "I'm grateful for the assistance I received. The counselors provided valuable insights and helped me secure admission.",
      "name": "Anaya Patel"
    },
    {
      "rating": 4.2,
      "testimonial": "The college application process was simplified and stress-free. The team helped me find the best fit for my goals.",
      "name": "Arjun Gupta"
    },
    {
      "rating": 4.9,
      "testimonial": "I couldn't have asked for better support. The consultants were knowledgeable and guided me towards success.",
      "name": "Aanya Reddy"
    },
    {
      "rating": 4.7,
      "testimonial": "The college admission services exceeded my expectations. They helped me stand out and secure admission to my dream college.",
      "name": "Advait Kumar"
    },
    {
      "rating": 4.5,
      "testimonial": "I'm thrilled with my college admission. The team provided personalized guidance that made all the difference.",
      "name": "Aishwarya Singh"
    },
    {
      "rating": 4.3,
      "testimonial": "The counselors were supportive and knowledgeable. They helped me navigate the complex college admission process.",
      "name": "Aryan Verma"
    },
    {
      "rating": 4.9,
      "testimonial": "Thanks to the college admission consultants, I secured admission to my dream college. I couldn't be happier!",
      "name": "Diya Desai"
    },
    {
      "rating": 4.6,
      "testimonial": "The college admission assistance was invaluable. They helped me choose the right college and guided me at every step.",
      "name": "Ishaan Joshi"
    },
    {
      "rating": 4.4,
      "testimonial": "I'm grateful for the expert guidance I received. They helped me craft a compelling application and get accepted.",
      "name": "Kavya Sharma"
    },
    {
      "rating": 4.7,
      "testimonial": "The college admission team was efficient and supportive. They helped me present my best self and secure admission.",
      "name": "Manvi Kapoor"
    },
    {
      "rating": 4.2,
      "testimonial": "I appreciate the personalized attention I received. The consultants helped me find the best college fit for my aspirations.",
      "name": "Neha Patel"
    },
    {
      "rating": 4.8,
      "testimonial": "The college admission process was made easier with their expert guidance. I'm thrilled with the outcome.",
      "name": "Rohan Gupta"
    },
    {
      "rating": 4.5,
      "testimonial": "I'm thankful for the support I received. They helped me navigate the competitive college admission process successfully.",
      "name": "Sara Khan"
    },
    {
      "rating": 4.3,
      "testimonial": "The college admission consultants were knowledgeable and helpful. They guided me towards making the right choices.",
      "name": "Shaurya Singh"
    },
    {
      "rating": 4.9,
      "testimonial": "I highly recommend their college admission services. They provided personalized guidance and helped me get admitted to a top college.",
      "name": "Shreya Sharma"
    },
    {
      "rating": 4.4,
      "testimonial": "I'm thankful for the college admission assistance I received. They helped me present my profile effectively.",
      "name": "Vedant Patel"
    },
    {
      "rating": 4.7,
      "testimonial": "The college admission team was efficient and supportive. They helped me present my best self and secure admission.",
      "name": "Zara Ahmed"
    },
    {
      "rating": 4.6,
      "testimonial": "Thanks to the college admission consultants, I got accepted into my dream college. Their guidance was invaluable.",
      "name": "Ravi Kapoor"
    },
    {
      "rating": 4.8,
      "testimonial": "The college admission process was made stress-free with their expertise. I'm grateful for their support.",
      "name": "Priya Sharma"
    }
  ]
  

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
      fontSize: '28px',
      fontWeight: '300',
      margin: '40px 0',
      color: '#333',
    };
  
    const quoteIconStyle = {
      width: '24px',
      height: '24px',
      marginBottom: '10px',
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
          <img src={quoteIcon} alt="Quote Icon" style={quoteIconStyle} />
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