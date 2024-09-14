import React, { useState } from "react";
import "./Projects.css";
import bookbuddiesImage from "../../../assets/bookbuddies.png";
import weatherImage from "../../../assets/weather.png";
import cbtImage from "../../../assets/cbt.png";
import cbtImage1 from "../../../assets/Nutcracker-2022-Poster-Master.jpg";
import cbtImage2 from "../../../assets/Nutcracker-2023-Poster-Master.jpg";
import cbtImage3 from "../../../assets/2023-nutcracker.jpg";
import cbtImage4 from "../../../assets/Robin-Hood-2024-Poster-Final.jpg";
import cbtImage5 from "../../../assets/robinhoodhoodie.jpg";
import cbtImage6 from "../../../assets/Nutcracker-2024-Poster-Master.jpg";
import raveImage from "../../../assets/rave.png";
import raveImage1 from "../../../assets/rave1.jpg";
import raveImage2 from "../../../assets/rave2.jpg";
import raveImage3 from "../../../assets/rave3.jpg";
import raveImage4 from "../../../assets/rave4.jpg";

import Modal from "./Modal";

export default function Projects() {
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of projects with a `gallery` for graphic design projects
  const projects = [
    {
      id: 1,
      name: "Book Buddies",
      description: "A book club application.",
      image: bookbuddiesImage,
      link: "https://group-8-project.onrender.com/",
    },
    {
      id: 2,
      name: "Weather Tracker",
      description: "A 5-Day forecast application.",
      image: weatherImage,
      link: "https://sdkwapis.github.io/Danger-Zone-Weather-Tracker/",
    },
    {
      id: 3,
      name: "CBT",
      description: "Graphic design for CBT.",
      image: cbtImage,
      gallery: [cbtImage1, cbtImage2, cbtImage3, cbtImage4, cbtImage5, cbtImage6],
    },
    {
      id: 4,
      name: "Rave Dance",
      description: "Graphic design for Rave Dance.",
      image: raveImage,
      gallery: [raveImage1, raveImage2, raveImage3, raveImage4],
    },
  ];

  // Handle opening the modal
  const openModal = (gallery) => {
    setCurrentProjectImages(gallery);
    setCurrentImageIndex(0); // Start from the first image
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => setIsModalOpen(false);

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentProjectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProjectImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-page-new">
      <div className="projects-container-new">
        <div className="polaroid-grid-projects-new">
          {projects.map((project) =>
            project.gallery ? (
              <div
                key={project.id}
                className="polaroid-project-new"
                onClick={() => openModal(project.gallery)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="polaroid-image-project-new"
                />
                <p className="caption-project-new">{project.name}</p>
                <p className="description-project-new">{project.description}</p>
              </div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="polaroid-link-project-new"
                key={project.id}
              >
                <div className="polaroid-project-new">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="polaroid-image-project-new"
                  />
                  <p className="caption-project-new">{project.name}</p>
                  <p className="description-project-new">
                    {project.description}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </div>

      {/* Render modal only when needed */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        images={currentProjectImages}
        currentImageIndex={currentImageIndex}
        nextImage={nextImage}
        prevImage={prevImage}
      />
    </div>
  );
}
