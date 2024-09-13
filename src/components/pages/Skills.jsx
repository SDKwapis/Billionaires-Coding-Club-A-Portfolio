import React from "react";
import "./Skills.css";
// import PlaceholderImage from './path-to-placeholder-image.jpg'; //

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML", description: "Skill description" },
    { id: 2, name: "CSS", description: "Skill description" },
    { id: 3, name: "JavaScript", description: "Skill description" },
    { id: 4, name: "React", description: "Skill description" },
    { id: 5, name: "Node.js", description: "Skill description" },
    { id: 6, name: "Express.js", description: "Skill description" },
    { id: 7, name: "MongoDB", description: "Skill description" },
    { id: 8, name: "Git", description: "Skill description" },
    { id: 9, name: "Illustrator", description: "Skill description" },
    { id: 10, name: "Photoshop", description: "Skill description" },
    { id: 11, name: "InDesign", description: "Skill description" },
    { id: 12, name: "Premiere", description: "Skill description" },

    // { id: 8, name: 'Git', description: 'Skill description', image: PlaceholderImage },
  ];

  return (
    <div className="skills-page-new">
      <div className="skills-container-new">
        <div className="polaroid-grid-new">
          {skills.map((skill) => (
            <div className="polaroid-new" key={skill.id}>
              {/* <img src={skill.image} alt={skill.name} className="polaroid-image-new" /> */}
              <p className="caption-new">{skill.name}</p>
              <p className="description-new">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
