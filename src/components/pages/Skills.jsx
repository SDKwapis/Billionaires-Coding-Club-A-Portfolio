import React from "react";
import "./Skills.css";
import htmlImage from '../../../assets/html.png';
import cssImage from '../../../assets/css.png';
import jsImage from '../../../assets/js.png';
import reactImage from '../../../assets/react.png';
import nodejsImage from '../../../assets/node.png';
import expressImage from '../../../assets/express.png';
import mongodbImage from '../../../assets/mongoDB.png';
import gitImage from '../../../assets/github.png';
import illustratorImage from '../../../assets/ai.png';
import photoshopImage from '../../../assets/ps.png';
import indesignImage from '../../../assets/id.png';
import premiereImage from '../../../assets/premiere.png';

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML", description: "5 Years Experience", image: htmlImage },
    { id: 2, name: "CSS", description: "5 Years Experience", image: cssImage },
    { id: 3, name: "JavaScript", description: "2 Years Experience", image: jsImage },
    { id: 4, name: "React", description: "2 Years Experience", image: reactImage },
    { id: 5, name: "Node.js", description: "2 Years Experience", image: nodejsImage },
    { id: 6, name: "Express.js", description: "2 Years Experience", image: expressImage },
    { id: 7, name: "MongoDB", description: "2 Years Experience", image: mongodbImage },
    { id: 8, name: "Git", description: "3 Years Experience", image: gitImage },
    { id: 9, name: "Illustrator", description: "14 Years Experience", image: illustratorImage },
    { id: 10, name: "Photoshop", description: "14 Years Experience", image: photoshopImage },
    { id: 11, name: "InDesign", description: "6 Years Experience", image: indesignImage },
    { id: 12, name: "Premiere", description: "10 Years Experience", image: premiereImage },
  ];

  return (
    <div className="skills-page-new">
      <div className="skills-container-new">
        <div className="polaroid-grid-new">
          {skills.map((skill) => (
            <div className="polaroid-new" key={skill.id}>
              <img src={skill.image} alt={skill.name} className="polaroid-image-new" />
              <p className="caption-new">{skill.name}</p>
              <p className="description-new">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
