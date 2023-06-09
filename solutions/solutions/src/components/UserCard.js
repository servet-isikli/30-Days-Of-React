import React from "react";
import './UserCard.css';
import logoImage from "../assets/images/logo-image.png";



const UserCard = () => {
  return (
    <div className="user-card">
      <img src={logoImage} alt="logoImage" />
      <h2>Solfa Art - Digital Solutions</h2>
      
    </div>
  );
};

export default UserCard;
