import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const foodDict = {
    Indian: [
      {
        name: "Tandoori Chicken",
        rating: "4.5/5.0"
      },
      {
        name: "Gulab Jamun",
        rating: "5.0/5.0"
      }
    ],
    American: [
      {
        name: "Apple Pie",
        rating: "4.2/5.0"
      },
      {
        name: "Hot Dog",
        rating: "3.8/5.0"
      }
    ],
    Japanese: [
      {
        name: "Noodles",
        rating: "4.0/5.0"
      },
      {
        name: "Sushi",
        rating: "3.5/5.0"
      }
    ],
    Italian: [
      {
        name: "Pizza",
        rating: "4.4/5.0"
      },
      {
        name: "Pasta",
        rating: "3.6/5.0"
      }
    ],
    Spanish: [
      {
        name: "Shrimp",
        rating: "3.9/5.0"
      },
      {
        name: "Mushroom Sausage",
        rating: "4.0/5.0"
      }
    ]
  };

  const [currentCountry, setCountry] = useState("Indian");
  function clickHandler(country) {
    setCountry(country);
  }

  return (
    <div className="App">
      <h1>🍔 Food Junction</h1>
      <p>Some of the most popular foods around the world!😃</p>

      <div>
        {Object.keys(foodDict).map((country) => (
          <button
            onClick={() => clickHandler(country)}
            style={{
              padding: ".6rem 1.5rem",
              margin: "1rem .5rem",
              borderRadius: ".5rem",
              border: "1px solid black",
              cursor: "pointer",
              backgroundColor: "#f4f4f5",
              fontSize: "1rem"
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <hr style={{ width: "60%" }} />
      <div style={{ margin: "auto", alignItems: "center" }}>
        <ul>
          {foodDict[currentCountry].map((dishes) => (
            <li
              key={dishes.name}
              style={{
                listStyle: "none",
                border: "1px solid #D1D5DB",
                margin: "1rem",
                padding: "1rem",
                width: "40%",
                borderRadius: "1rem",
                margin: "1rem  auto"
              }}
            >
              <div style={{ fontSize: "larger", marginBottom: ".3rem" }}>
                {dishes.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{dishes.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
