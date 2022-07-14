import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDataBase = {
  Goa: [
    { name: "Palolem Beach", rating: "4.9/5" },
    { name: "Anjuna Market", rating: "4.5/5" },
    { name: "Baga Beach", rating: "4.7/5" },
    { name: "Basilica de Bom Jesus", rating: "4.4/5" }
  ],

  Mumbai: [
    { name: "Marine Drive", rating: "5/5" },
    { name: "Juhu Beach", rating: "5/5" },
    { name: "India Gate", rating: "4.5/5" },
    { name: "Sidhivinayak Temple", rating: "5/5" },
    { name: "Chhatrapati Shivaji Terminal", rating: "4.8/5" }
  ],
  Manali: [
    { name: "Rohtang Pass", rating: "4.5/5" },
    { name: "Solang Valley", rating: "4.7/5" },
    { name: "Kheerganga Trek", rating: "5/5" },
    { name: "Kasol", rating: "4.9/5" }
  ]
};

export default function App() {
  const [selectedPlace, setPlace] = useState("Goa");
  function travelClickHandler(place) {
    setPlace(place);
  }

  return (
    <div className="App">
      <h1> Popular Travel Destinations </h1>
      <p> Check out the most popular destinations in India with friends. </p>

      <div>
        {Object.keys(travelDataBase).map((place) => (
          <button
            style={{
              background: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              margin: "1rem 1rem",
              cursor: "pointer",
              border: "2px solid black"
            }}
            onClick={() => travelClickHandler(place)}
          >
            {place}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul>
          {travelDataBase[selectedPlace].map((travel) => (
            <li
              className="travel-name"
              key={travel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                minWidth: "80%",
                marginBottom: "2rem",
                marginRight: "2rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div className="travel-name"> {travel.name} </div>
              <div> {travel.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
