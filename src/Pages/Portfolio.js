import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Prewedding Event",
      description:
        "Make your prewedding moments unforgettable with our stunning photography.",
      category: "prewedding",
      icon: "fa-solid fa-heart", // Font Awesome icon for prewedding
    },
    {
      title: "Wedding Photography",
      description: "Capture your precious moments with elegance.",
      category: "wedding",
      icon: "fa-solid fa-ring", // Font Awesome icon for wedding
    },
    {
      title: "Birthday Shoots",
      description: "Make birthdays more memorable with stunning shots.",
      category: "birthday",
      icon: "fa-solid fa-cake-candles", // Font Awesome icon for birthday
    },
    {
      title: "Travel Photography",
      description: "Beautifully document your adventures.",
      category: "travel",
      icon: "fa-solid fa-plane", // Font Awesome icon for travel
    },
    {
      title: "Landscapes",
      description:
        "Immortalize nature's beauty with stunning landscape photography.",
      category: "landscapes",
      icon: "fa-solid fa-mountain", // Font Awesome icon for landscapes
    },
  ];

  const handleCardClick = (category) => {
    navigate(`/gallery/${category}`);
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-description">
        Explore my work and discover the beauty captured through my lens.
      </p>

      <div className="portfolio-gallery">
        {projects.map((project, index) => (
          <div
            className="portfolio-card"
            key={index}
            onClick={() => handleCardClick(project.category)} // Navigate on click
          >
            <div className="portfolio-icon-container">
              <i className={project.icon}></i> {/* Font Awesome Icon */}
            </div>
            <div className="card-overlay">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
