import React from "react";
import TechList from "./TechList";
import UserCard from "./UserCard";
import './Main.css'

const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <h5>Prerequisite to get started react.js:</h5>
        <ul>
          <TechList />
        </ul>
        <UserCard />
      </div>
    </main>
  );
};

export default Main;
