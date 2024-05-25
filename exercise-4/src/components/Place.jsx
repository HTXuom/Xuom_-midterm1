
import React from "react";

function Place({ place }) {
  return (
    <li className="place-item">
      <button>
        <img src={place.image.src} alt={place.image.alt} />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
}

export default Place;