import React from "react";
import "./Home.css";
import offerImage1 from "../Images/Homebg5.jpg"; // Offer images
import offerImage2 from "../Images/Homebg4.jpg";
import offerImage3 from "../Images/Homebg5.jpg"; // New Offer image
import offerImage4 from "../Images/Man.jpg"; // New Offer image
import containerImage1 from "../Images/Homebg1.jpg";
import containerImage2 from "../Images/Homebg2.jpg";
import containerImage3 from "../Images/Homebg3.jpg";
import containerImage4 from "../Images/Homebg4.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>HELLO THERE!</h2>
            <h1>I'm Yuvraj Isapure</h1>
            <p>
              I became passionate about landscape photography five years ago
              when I moved to the United States. Let me help you preserve your
              precious moments.
            </p>
            <div className="hero-buttons">
              <Link to="/Packages">
                <button className="btn-primary">Our Packages</button>
              </Link>
              <Link to="/contact">
                <button className="btn-secondary">Contact Me</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={containerImage4} alt="Photographer" />
          </div>
        </div>
      </header>

      {/* Best Moments Section */}
      <section className="best-moments">
        <h2>Our Best Moments</h2>
        <div className="image-row">
          <div className="image-card">
            <Link to="/gallery/landscapes">
              <img src={containerImage1} alt="Gallery 1" />
              <p>Memorable Landscapes</p>
            </Link>
          </div>
          <div className="image-card">
            <Link to="/gallery/weddings">
              <img src={containerImage2} alt="Gallery 2" />
              <p>Unforgettable Weddings</p>
            </Link>
          </div>
          <div className="image-card">
            <Link to="/gallery/pre-weddings">
              <img src={containerImage3} alt="Gallery 3" />
              <p>Magical Pre-Weddings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Discount Offers Section */}
      <section className="discount-offers">
        <h2>Special Discounts</h2>
        <div className="offers-row">
          <div className="offer-card">
            <img src={offerImage1} alt="Offer 1" />
            <div className="offer-details">
              <h3>50% Off on Wedding Shoots</h3>
              <p>Book now and save big on your special moments!</p>
            </div>
          </div>
          <div className="offer-card">
            <img src={offerImage2} alt="Offer 2" />
            <div className="offer-details">
              <h3>30% Off on Pre-Wedding Shoots</h3>
              <p>Capture your love story at an unbeatable price!</p>
            </div>
          </div>
          {/* Additional Offer Cards */}
          <div className="offer-card">
            <img src={offerImage3} alt="Offer 3" />
            <div className="offer-details">
              <h3>40% Off on Family Portraits</h3>
              <p>Create lasting memories with your loved ones!</p>
            </div>
          </div>
          <div className="offer-card">
            <img src={offerImage4} alt="Offer 4" />
            <div className="offer-details">
              <h3>25% Off on Event Photography</h3>
              <p>Capture every important moment at your event!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
