import React from "react";
import Card from "./Card";
import { cardData } from "./data";

function App() {
  return (
    <div className="app">
      <h1>Meet Our Members</h1>
      <div className="card-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            hobbies={card.hobbies}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
