import React from "react";

const Day06 = () => {
  const tenHighestPopulation = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "United States of America", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russian Federation", population: 146599183 },
    { country: "Japan", population: 126960000 },
  ];

  // const populationItems = tenHighestPopulation.map((item, index) => (
  //   <li key={index}>
  //     {item.country} - {item.population}
  //   </li>
  // ));

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> 30 Days Of React</h1>
      <p style={{ textAlign: "center" }}>
        World population Ten most populated countries
      </p>

      <p>
        {tenHighestPopulation.map((item, index) => (
          <ul key={index}>
            {item.country} - {item.population}
          </ul>
        ))}
      </p>

      <p>test</p>
    </div>
  );
};

export default Day06;
