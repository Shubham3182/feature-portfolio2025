import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Gallery.css";

import Homebg1 from "../Images/Homebg1.jpg";
import Homebg2 from "../Images/Homebg2.jpg";
import Homebg3 from "../Images/Homebg3.jpg";
import Homebg4 from "../Images/Homebg4.jpg";
import Homebg5 from "../Images/Homebg5.jpg";

const Gallery = () => {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);  // Reference to the loader

  // Simulate fetching images based on category
  const fetchImages = () => {
    const newImages = [
      Homebg1, Homebg2, Homebg3, Homebg4, Homebg5,
    ];

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    fetchImages(); // Initial images loading

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);  // Set loading state
          fetchImages();  // Fetch more images
          setLoading(false);  // Reset loading state
        }
      },
      { rootMargin: "100px" }  // Start loading when the loader is 100px from view
    );

    const loaderCurrent = loaderRef.current; // Store ref value in a variable

    if (loaderCurrent) {
      observer.observe(loaderCurrent);
    }

    return () => {
      if (loaderCurrent) {
        observer.unobserve(loaderCurrent);
      }
    };
  }, [loading]);  // Re-run when loading state changes

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">{category.charAt(0).toUpperCase() + category.slice(1)} Photography</h1>
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image}
                alt={`${category} ${index + 1}`}  // Simplified alt text
                className="gallery-image"
              />
            </div>
          ))
        ) : (
          <p>No images available for this category.</p>
        )}
      </div>
      <div ref={loaderRef} className="loader">
        {loading && <p>Loading more images...</p>}
      </div>
    </div>
  );
};

export default Gallery;
