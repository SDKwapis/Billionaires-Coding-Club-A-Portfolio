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

    // { id: 8, name: 'Git', description: 'Skill description', image: PlaceholderImage },
  ];

  return (
    <div className="skills-page">
      <div className="polaroid-grid">
        {skills.map((skill) => (
          <div className="polaroid2" key={skill.id}>
            {/* <img src={skill.image} alt={skill.name} className="polaroid-image" /> */}
            <p className="caption">{skill.name}</p>
            <p className="description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
