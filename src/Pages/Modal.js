import React from "react";
import "./Modal.css";

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close symbol in the top-right corner */}
        <span className="close-btn" onClick={onClose}>
          &times; {/* HTML entity for the "X" symbol */}
        </span>
        <img src={image} alt="Selected" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
