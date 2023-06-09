import React from "react";
import "./Header.css";

const headerStyles = {
  backgroundColor: "#CCEEFF",
  color: "white",
  padding: "10px",
};

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const firstName = "S.";
const lastName = "I.";
const date = "June 9, 2023";

const Header = () => {
  return (
    <header style={headerStyles}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Solution training by: {firstName}
          {lastName}
        </p>
        <small>Starting date: {date}</small>
      </div>
    </header>
  );
};

export default Header;
