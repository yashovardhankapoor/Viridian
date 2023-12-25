// ContactUsPage.js

import React, {useState} from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
    const recipientEmail = 'shantanu.pandhre@gmail.com'; // Replace with the actual email address

    const handleClick = () => {
      const subject = encodeURIComponent('Inquiry from Contact Form');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
  
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    };

  // Define formData state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with formData, e.g., send an email
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-us-container">
      <div className=' title'>CONTACT US</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" onClick={handleClick}>SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
