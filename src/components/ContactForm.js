import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [stream, setStream] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleStreamChange = (e) => {
    setStream(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any further actions with the form data (e.g., submit to backend)
    // Reset the form fields
    setName('');
    setPhone('');
    setEmail('');
    setStream('');
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f2f2f2',
  };

  const rightSectionStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '4px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const cardStyle = {
    maxWidth: '500px',
    width: '100%',
  };

  const headingStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '28px',
    fontWeight: '300',
    margin: '0 0 20px',
    color: '#333',
    textAlign: 'center',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  const inputContainerStyle = {
    margin: '10px 0',
  };

  const labelStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    marginBottom: '5px',
    color: '#555',
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const submitButtonStyle = {
    padding: '10px',
    backgroundColor: '#6c94cc',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <section style={sectionStyle}>
      <div style={rightSectionStyle}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Connect with us today!</h2>
          <form onSubmit={handleSubmit} style={formStyle}>
            <div style={inputContainerStyle}>
              <label htmlFor="name" style={labelStyle}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label htmlFor="phone" style={labelStyle}>
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label htmlFor="stream" style={labelStyle}>
                Stream
              </label>
              <select
                id="stream"
                value={stream}
                onChange={handleStreamChange}
                required
                style={selectStyle}
              >
                <option value="">Select Stream</option>
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
                <option value="Management">Management</option>
              </select>
            </div>
            <button type="submit" style={submitButtonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
