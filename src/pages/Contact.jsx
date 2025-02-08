import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form Submitted', formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">Contact Us</h2>
        {submitted ? (
          <p className="contact-success">Thank you for your message, we'll get back to you!</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-fields">
            <div>
              <label className="contact-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            <div>
              <label className="contact-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            <div>
              <label className="contact-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Embedded Google Map on the right side */}
      <div className="contact-map">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127640.1228131004!2d36.746475611954466!3d-1.3235488528194703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f107238384bf9%3A0xae995986beacda74!2sUhuru%20Gardens!5e0!3m2!1sen!2ske!4v1739047529749!5m2!1sen!2ske"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
