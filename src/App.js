import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import styles
import logo from "./Images/Logo_white1.png"; // Import the logo
import Home from "./Pages/Home";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Portfolio from "./Pages/Portfolio";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ScrollToTop from "./Pages/ScrollToTop"; // Import the ScrollToTop component
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <div className="App">
        {/* Add SpeedInsights component for performance tracking */}
        <SpeedInsights />

        {/* Navbar Section */}
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Packages">Packages</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              {/* Removed the Gallery link */}
              <li>
                <Link to="/contact">Contact</Link>
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
          {/* Gallery route kept here */}
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
              <p>Address: Whispering Woods,MIDC Road,Miraj</p>
            </div>

            {/* Social Media Section */}
            <div className="footer-section social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-section quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                {/* Removed the Gallery link */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer-bottom">
            <p>&copy; 2025 Your Website Name. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
