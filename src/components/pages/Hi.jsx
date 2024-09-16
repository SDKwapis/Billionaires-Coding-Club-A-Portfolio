import React from "react";
import "./Hi.css";
import profileImage from "../../../assets/profile8bit.png";
import  gitHub from "../../../assets/github.png";
import linkedIn from "../../../assets/Lin.jpg";

export default function Hi() {
  return (
    <div className="hi-page">
      <div className="polaroid-container">
        <div className="polaroid">
          <img
            src={profileImage}
            alt="Stephan Kwapis"
            className="polaroid-image"
          />
          <p className="caption">Stephan Kwapis</p>
          <p className="caption2">(a digital representation)</p>
          <div className="links">
        <a href="https://github.com/sdkwapis" target="_blank" rel="noopener noreferrer">
          <img src={gitHub} alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/stephankwapis/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn"/>
        </a>
   </div>
    </div>

        {/* Polaroid for the About Me */}
        <div className="polaroid2 about-me">
          <div className="about-me-content">
            <h2 className="about">About Me</h2>
            <p>
              Hi, I’m Stephan (pronounced Steh-fahn). If you’ve ever looked at a
              website and thought, “This needs to be prettier and smarter,” then
              you and I are on the same page. With 15 years of professional
              graphic design experience under my belt and a passion for building
              things that live on the web, I’m here to make the internet a more
              stylish, functional place—one pixel at a time. Whether it's
              crafting visuals that pop or developing sleek web apps, I’ve got
              you covered. Just don’t ask me to fix your printer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
