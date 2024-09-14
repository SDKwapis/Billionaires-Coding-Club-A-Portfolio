import React from "react";
import "./Modal.css";

export default function Modal({
  isOpen,
  closeModal,
  images,
  currentImageIndex,
  nextImage,
  prevImage,
}) {
  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Gallery"
          className="modal-image"
        />
        <div className="modal-controls">
          <button onClick={prevImage} className="nav-button prev-button">
            ◀️
          </button>
          <button onClick={nextImage} className="nav-button next-button">
            ▶️
          </button>
        </div>
      </div>
    </div>
  );
}
