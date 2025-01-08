import React, { useState } from "react";
import "./Contact.css"; // Create and link a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the message to be sent on WhatsApp
    const { name, email, message } = formData;
    const whatsappMessage = `Hello Admin,\n\nI received a new message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // URL encode the message to make it safe for use in the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp Click to Chat URL
    const whatsappURL = `https://wa.me/yourAdminPhoneNumber?text=${encodedMessage}`;

    // Redirect to WhatsApp (opens in WhatsApp)
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-item">
          <h3>Email</h3>
          <p>yuvrajisapure@gmail.com</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>+91 8623977711</p>
        </div>
        <div className="info-item">
          <h3>Address</h3>
          <p>Whispering Woods, MIDC Road, Miraj</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <h3>Connect with Us</h3>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/8623977711"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="location">
        <h3>Our Location</h3>
        <div className="map-container">
          <iframe
            title="Our Location on Google Maps" // Add a descriptive title
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d215.98151824432816!2d74.63475248511463!3d16.842345302251907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1734259423445!5m2!1sen!2sin"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
