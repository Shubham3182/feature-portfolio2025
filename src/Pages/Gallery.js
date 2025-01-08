import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Gallery.css";
import Homebg1 from "../Images/Homebg1.jpg";
import Homebg2 from "../Images/Homebg2.jpg";
import Homebg3 from "../Images/Homebg3.jpg";
import Homebg4 from "../Images/Homebg4.jpg";
import Homebg5 from "../Images/Homebg5.jpg";
import Modal from "./Modal"; // Correct path to Modal

const Gallery = () => {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const loaderRef = useRef(null);

  const fetchImages = () => {
    const newImages = [Homebg1, Homebg2, Homebg3, Homebg4, Homebg5];
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    fetchImages(); 

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true); 
          fetchImages(); 
          setLoading(false); 
        }
      },
      { rootMargin: "100px" }
    );

    const loaderCurrent = loaderRef.current;

    if (loaderCurrent) {
      observer.observe(loaderCurrent);
    }

    return () => {
      if (loaderCurrent) {
        observer.unobserve(loaderCurrent);
      }
    };
  }, [loading]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">{category.charAt(0).toUpperCase() + category.slice(1)} Photography</h1>
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image}
                alt={`${category} ${index + 1}`}
                className="gallery-image"
                onClick={() => openModal(image)}  // onClick added here
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

      {/* Modal */}
      {modalOpen && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Gallery;
