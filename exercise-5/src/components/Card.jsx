import React from "react";

function Card({ name, image, hobbies }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-details">
                <h2>{name}</h2>
                <p>Hobbies: {hobbies.join(", ")}</p>
            </div>
        </div>
    );
}

export default Card;
