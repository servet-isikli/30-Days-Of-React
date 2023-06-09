import React from "react";
import './TechList.css'

const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

  return <div className="tech-list">{techsFormatted}</div>;
};

export default TechList;
