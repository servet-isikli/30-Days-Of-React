import React from "react";
const commonStyles = {
  marginBottom: "1px",
  borderRadius: "3px",
  height: "55px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

const divStyleOne = {
  ...commonStyles,
  backgroundColor: "#518cef",
};

const divStyleTwo = {
  ...commonStyles,
  backgroundColor: "#3b10c4",
};

const divStyleThree = {
  ...commonStyles,
  backgroundColor: "#9aede6",
};

const divStyleFor = {
  ...commonStyles,
  backgroundColor: "#8ee763",
};

const divStyleFive = {
  ...commonStyles,
  backgroundColor: "#a30dd0",
};

const Day04L31 = () => {
  return (
    <div>
      <div style={divStyleOne}>#518cef</div>
      <div style={divStyleTwo}>#3b10c4</div>
      <div style={divStyleThree}>#9aede6</div>
      <div style={divStyleFor}>#8ee763</div>
      <div style={divStyleFive}>#a30dd0</div>
    </div>
  );
};

export default Day04L31;
