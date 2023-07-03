import React from "react";

const Day06L31 = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      Mapping Training
      <ul>
        {numbers.map((number, index) => (
          <ul key={index}> {number} </ul>
        ))}
      </ul>
    </div>
  );
};

export default Day06L31;
