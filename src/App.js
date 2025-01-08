import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import styles
import logo from "./Images/Logo_white1.png"; // Import the logo
import Home from "./Pages/Home";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Portfolio from "./Pages/Portfolio";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaBars } from "react-icons/fa"; // Import FaBars icon for the hamburger menu
import ScrollToTop from "./Pages/ScrollToTop"; // Import the ScrollToTop component
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import SpeedInsights for performance

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false); // Additional state for adjusted body padding

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    // Add or remove the adjusted padding class based on menu state
    setIsMenuActive(!isMenuActive);
  
    if (!isMenuActive) {
      document.body.classList.add('main-content-adjusted');
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    } else {
      document.body.classList.remove('main-content-adjusted');
      document.body.style.overflow = 'auto'; // Re-enable scrolling when the menu is closed
    }
  };
  

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <SpeedInsights />
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-toggle" onClick={toggleMobileMenu}>
              <FaBars size={30} />
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-menu active" : "mobile-menu"}`}>
              <li>
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
              </li>
              <li>
                <Link to="/Packages" onClick={closeMobileMenu}>Packages</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery/:category" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Section */}
        <footer className="App-footer">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>Email: yuvrajisapure@gmail.com</p>
              <p>Phone: +91 8623977711</p>
              <p>Address: Whispering Woods, MIDC Road, Miraj</p>
            </div>

            {/* Social Media Section */}
            <div className="footer-section social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/8623977711" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-section quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMobileMenu}>About</Link>
                </li>
                <li>
                  <Link to="/packages" onClick={closeMobileMenu}>Packages</Link>
                </li>
                <li>
                  <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer-bottom">
            <p>&copy; UV Photo And Films. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
