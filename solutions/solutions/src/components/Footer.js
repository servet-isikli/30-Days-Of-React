import React from "react";
import "./Footer.css";

const copyRight = "2023";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright &copy; {copyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
