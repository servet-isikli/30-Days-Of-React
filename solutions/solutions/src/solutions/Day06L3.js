import React, { useEffect, useState } from "react";
import Day06L3Data from "./Day06L3Data";

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


  const [currentData, setCurrentData] = useState('currentData');

  useEffect(() => {
    const fetchData = () => {
      // Rastgele bir veri seç
      const randomIndex = Math.floor(Math.random() * Day06L3Data.length);
      const randomData = Day06L3Data[randomIndex];

      // Veriyi güncelle
      setCurrentData(randomData);
    };

    fetchData();
  }, []);

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

      <p>Day06L3Data Mapping</p>
      <ul>
        {Day06L3Data.map((data, index) => (
          <ul key={index}>
            {" "}
            {data.name}-{data.capital}{" "}
          </ul>
        ))}
      </ul>
<h1>useState</h1>
      <h3>{currentData.name}</h3>
      <p>{currentData.capital}</p>
    </div>
  );
};

export default Day06;
