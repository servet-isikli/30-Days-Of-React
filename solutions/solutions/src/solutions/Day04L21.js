import React from "react";
import "./Day04L21.css";

import htmlImage from "../solutions-assets/html.png";
import cssImage from "../solutions-assets/css.png";
import jsImage from "../solutions-assets/js.png";
import reactImage from "../solutions-assets/react.png";
import Day05L21 from "./Day05L21";

const Day04L21 = () => {
  const data = "sended props";

  return (
    <div className="day-04-l21">
      <img className="day-04-l21" src={htmlImage} alt="html" />
      <img src={cssImage} alt="css" />
      <img src={jsImage} alt="js" />
      <img src={reactImage} alt="react" />

      <div>
        Parent
        <Day05L21 data={data} />
      </div>
    </div>
  );
};

export default Day04L21;
