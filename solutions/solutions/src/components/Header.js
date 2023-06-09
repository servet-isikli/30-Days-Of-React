import React from "react";
import "./Header.css";

const headerStyles = {
  backgroundColor: "#CCEEFF",
  color: "white",
  padding: "10px",
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <div className="header-wrapper">
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>S.I.</p>
        <small>June 9, 2023</small>
      </div>
    </header>
  );
};

export default Header;
