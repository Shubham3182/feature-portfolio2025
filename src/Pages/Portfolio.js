import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Prewedding Event",
      description: "Make your prewedding moments unforgettable with our stunning photography.",
      category: "prewedding",
      image: "https://example.com/path-to-your-prewedding-image.jpg", // Update this path as needed
    },
    {
      title: "Wedding Photography",
      description: "Capture your precious moments with elegance.",
      category: "wedding",
      image: "https://example.com/path-to-your-wedding-image.jpg", // Update this path as needed
    },
    {
      title: "Birthday Shoots",
      description: "Make birthdays more memorable with stunning shots.",
      category: "birthday",
      image: "https://example.com/path-to-your-birthday-image.jpg", // Update this path as needed
    },
    {
      title: "Travel Photography",
      description: "Beautifully document your adventures.",
      category: "travel",
      image: "https://example.com/path-to-your-travel-image.jpg", // Update this path as needed
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
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
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
