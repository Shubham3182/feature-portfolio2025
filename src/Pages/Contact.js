import React from "react";
import "./Contact.css"; // Create and link a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-item">
          <h3>Email</h3>
          <p>yourname@example.com</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>+1 123-456-7890</p>
        </div>
        <div className="info-item">
          <h3>Address</h3>
          <p>123, Your Street, Your City, Your Country</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
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
