import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="City" />
      <input type="tel" placeholder="Phone Number" />
      <input type="email" placeholder="Email Address" />
      <select>
        <option value="Medical">Medical</option>
        <option value="Engineering">Engineering</option>
        <option value="Management">Management</option>
        <option value="Law">Law</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;