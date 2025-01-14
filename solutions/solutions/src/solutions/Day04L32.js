import React, { useState } from "react";
import logoImage from "../solutions-assets/logo-image.png";
import "./Day04L32.css";

const Day04L32 = () => {
  const [backgroundColor, setBackgroundColor] = useState("orange");

  const changeBackground = () => {
    const newColor = backgroundColor === "orange" ? "pink" : "orange";
    setBackgroundColor(newColor);
  };

  return (
    <div style={{ backgroundColor }}>
      <button onClick={changeBackground}>Change Background</button>

      <img className="logo" src={logoImage} alt="logoImage" />
      <h3>SOLFA ART</h3>
      <p>Digital Solutions</p>
      <h4>SKILLS</h4>

      <div className="skills">
        <p>HTML</p>
        <p>CSS</p>
        <p>Sass</p>
        <p>JS</p>
        <p>React</p>
        <p>Redux</p>
        <p>Node</p>
        <p>MongoDB</p>
        <p>Python</p>
        <p>Flask</p>
        <p>Django</p>
        <p>NumPy</p>
        <p>Pandas</p>
        <p>Data Analysis</p>
        <p>MYSQL</p>
        <p>GraphQL</p>
        <p>D3.js</p>
        <p>Gatsby</p>
        <p>Docker</p>
        <p>Heroku</p>
        <p>Git</p>
      </div>
      <div>
        <p>Joined on June 30, 2023</p>
      </div>
    </div>
  );
};

export default Day04L32;
