import React from "react";
import TechList from "./TechList";
import UserCard from "./UserCard";

const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList />
        </ul>
        <UserCard />
      </div>
    </main>
  );
};

export default Main;
