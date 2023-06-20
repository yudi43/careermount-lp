import React from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem', // Adjust the padding to your preference
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" style={styles.input} />
      <input type="text" placeholder="City" style={styles.input} />
      <input type="text" placeholder="Phone Number" style={styles.input} />
      <input type="email" placeholder="Email Address" style={styles.input} />
      <select style={styles.select}>
        <option value="" disabled selected>
          Select Stream
        </option>
        <option value="medical">Medical</option>
        <option value="engineering">Engineering</option>
        <option value="management">Management</option>
      </select>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
