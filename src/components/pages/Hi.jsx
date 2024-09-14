import React from "react";
import "./Hi.css";
import profileImage from "../../../assets/profile8bit.png";

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
        </div>

        {/* Polaroid for the About Me */}
        <div className="polaroid2 about-me">
          <div className="about-me-content">
            <h2 className="about">About Me</h2>
            <p>
              Hi, I’m Stephan (pronounced Steh-fahn). If you’ve ever looked at a
              website and thought, “This needs to be prettier and smarter,” then
              you and I are on the same page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
