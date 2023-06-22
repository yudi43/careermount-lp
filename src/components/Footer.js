import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={textStyle}>© 2023 CareerMount. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '20px',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const textStyle = {
  fontSize: '14px',
  textAlign: 'center',
  color: '#999',
};

export default Footer;
