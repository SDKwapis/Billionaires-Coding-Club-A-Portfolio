import React from "react";
import "./Projects.css";
// import PlaceholderImage from './path-to-placeholder-image.jpg';

export default function Projects() {
  const projects = [
    { id: 1, name: "Project 1", description: "Description of Project 1" },
    { id: 2, name: "Project 2", description: "Description of Project 2" },
    { id: 3, name: "Project 3", description: "Description of Project 3" },
    { id: 4, name: "Project 4", description: "Description of Project 4" },
    // { id: 4, name: 'Project 4', description: 'Description of Project 4', image: PlaceholderImage },
  ];

  return (
    <div className="projects-page-new">
      <h1>My Projects</h1>
      <div className="projects-container-new">
        <div className="polaroid-grid-projects-new">
          {projects.map(project => (
            <div className="polaroid-project-new" key={project.id}>
              {/* <img src={project.image} alt={project.name} className="polaroid-image-project-new" /> */}
              <p className="caption-project-new">{project.name}</p>
              <p className="description-project-new">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
