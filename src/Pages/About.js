import React, { useEffect, useState } from "react";
import "./About.css"; // Importing CSS for styling
import aboutImage from "../Images/Homebg5.jpg"; // Add your image
import { Link } from "react-router-dom";

function About() {
  // State to track visibility of elements
  const [visible, setVisible] = useState({
    header: false,
    image: false,
    experience: false,
    contact: false,
  });

  // Function to handle visibility changes when element enters the viewport
  const handleVisibilityChange = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target.classList[0]; // Get the class name of the element
        setVisible((prev) => ({
          ...prev,
          [target]: true,
        }));
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.5, // Trigger when at least 50% of the element is in view
    });

    // Observing elements
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    document.querySelectorAll(".slide-in-from-left").forEach((el) => observer.observe(el));
    document.querySelectorAll(".slide-in-from-top").forEach((el) => observer.observe(el));
    document.querySelectorAll(".scale-up").forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      {/* About Section */}
      <header className={`about-header fade-in ${visible.header ? "visible" : ""}`}>
        <h1>About Me</h1>
        <p>
          I’m a passionate photographer with a deep love for landscape and
          portrait photography. I believe in capturing moments that tell unique
          stories. With over 5 years of experience in the industry, I’m
          dedicated to providing clients with unforgettable photos that bring
          their memories to life.
        </p>
      </header>

      {/* Image Section */}
      <section className={`about-image fade-in ${visible.image ? "visible" : ""}`}>
        <img src={aboutImage} alt="About Me" className="scale-up" />
      </section>

      {/* Experience Section */}
      <section className={`about-experience slide-in-from-left ${visible.experience ? "visible" : ""}`}>
        <h2>My Experience</h2>
        <ul>
          <li>5+ Years of Experience in Photography</li>
          <li>Worked with Various Brands for Product Photography</li>
          <li>Specialized in Wedding and Landscape Photography</li>
          <li>Experienced in Photo Editing and Retouching</li>
        </ul>
      </section>

      {/* Contact/Call to Action Section */}
      <section className={`about-contact slide-in-from-bottom ${visible.contact ? "visible" : ""}`}>
        <h2>Let’s Work Together</h2>
        <p>
          If you’re looking for professional photography services, feel free to
          reach out. I’m excited to capture your special moments!
        </p>
        <Link to="/Contact">
          <button className="contact-button">Contact Me</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
