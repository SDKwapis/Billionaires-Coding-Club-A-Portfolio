import React from "react";
import "./Hi.css";
// import image './path-to-image.jpg'; //

export default function Hi() {
  return (
    <div className="hi-page">
      <h1>About Me</h1>
      <div className="polaroid-container">
        {/* Polaroid for the image */}
        <div className="polaroid">
          {/* <img src={YourImage} alt="Stephan Kwapis" className="polaroid-image" /> */}
          <p className="caption">Stephan Kwapis</p>
        </div>

        {/* Polaroid for the About Me */}
        <div className="polaroid2 about-me">
          <div className="about-me-content">
            <h2>About Me</h2>
            <p>
              Hi, I’m Stephan Kwapis! I’m a web developer and graphic designer with a passion for creating beautiful and functional digital experiences. 
              I love all things tech and design and am constantly learning and evolving in the fast-paced world of development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}