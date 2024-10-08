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
import norImage from "../../../assets/noreastr2024logosingle.jpg";
import norImage1 from "../../../assets/noreastr2024logo.jpg";
import norImage2 from "../../../assets/noreastrPoster.jpg";
import norImage3 from "../../../assets/noreastrTee.jpg";
import squatchdaisy from "../../../assets/squatchdaisy.jpg";
import gumseat from "../../../assets/gumseat.jpg";
import misc from "../../../assets/misc.png";
import misc1 from "../../../assets/misc1.jpg";
import misc2 from "../../../assets/misc2.jpg";
import misc3 from "../../../assets/misc3.jpg";
import misc4 from "../../../assets/misc4.jpg";
import misc5 from "../../../assets/misc5.jpg";
import basic from "../../../assets/basic.jpg";

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
      name: "Basic Business",
      description: "Business site template.",
      image: basic,
      link: "https://basicbusiness.netlify.app/",
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
    {
      id: 5,
      name: "Nor-East'r Festival",
      description: "Graphic design for music festival.",
      image: norImage,
      gallery: [norImage1, norImage2, norImage3],
    },
    {
      id: 6,
      name: "Squatch Daisy",
      description: "A webcomic.",
      image: squatchdaisy,
      link: "https://www.instagram.com/squatchdaisy/",
    },
    {
      id: 7,
      name: "Gumseat Productions",
      description: "Screen printing & embroidery.",
      image: gumseat,
      link: "https://www.instagram.com/gumseatproductions/",
    },
    {
      id: 8,
      name: "Misc",
      description: "Miscellaneous designs.",
      image: misc,
      gallery: [misc2, misc1, misc3, misc4, misc5],
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
