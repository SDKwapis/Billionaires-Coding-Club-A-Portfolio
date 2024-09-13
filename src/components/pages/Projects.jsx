import React from "react";
import "./Projects.css";
import bookbuddiesImage from '../../../assets/bookbuddies.png';
import weatherImage from '../../../assets/weather.png';
// import PlaceholderImage from './path-to-placeholder-image.jpg';

export default function Projects() {
  const projects = [
    { id: 1, name: "Book Buddies", description: "A book club application.", image: bookbuddiesImage, link: "https://group-8-project.onrender.com/ " },
    { id: 2, name: "Weather Tracker", description: "A 5-Day forecast application.", image: weatherImage, link: "https://sdkwapis.github.io/Danger-Zone-Weather-Tracker/" },
    { id: 3, name: "Childrens Ballet Theatre", description: "Description of Project 3" },
    { id: 4, name: "Project 4", description: "Description of Project 4" },
    // { id: 4, name: 'Project 4', description: 'Description of Project 4', image: PlaceholderImage },
  ];

  return (
    <div className="projects-page-new">
      <div className="projects-container-new">
        <div className="polaroid-grid-projects-new">
          {projects.map((project) => (
            // Wrap the entire polaroid inside an <a> tag
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="polaroid-link-project-new" 
              key={project.id}
            >
              <div className="polaroid-project-new">
                <img src={project.image} alt={project.name} className="polaroid-image-project-new" />
                <p className="caption-project-new">{project.name}</p>
                <p className="description-project-new">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}