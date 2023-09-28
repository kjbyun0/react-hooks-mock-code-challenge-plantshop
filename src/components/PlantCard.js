import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleIsInStockClick() {
    setIsInStock((isInStock) => !isInStock);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleIsInStockClick}>In Stock</button>
      ) : (
        <button onClick={handleIsInStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
