import React from "react";

const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

  return <div >{techsFormatted}</div>;
};

export default TechList;
