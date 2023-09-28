import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  const [price, setPrice] = useState(plant.price);

  function handleIsInStockClick() {
    setIsInStock(!isInStock);
  }

  function handleDeletePlantClick() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => onDeletePlant(plant));
  }

  function handleUpdatePriceClick(e) {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({price: price}),
    })
    .then(resp => resp.json())
    .then(updatedPlant => onUpdatePlant(updatedPlant));
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* <p>Price: {plant.price}</p> */}
      <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleUpdatePriceClick}>Change Price</button>
      {isInStock ? (
        <button className="primary" onClick={handleIsInStockClick}>In Stock</button>
      ) : (
        <button onClick={handleIsInStockClick}>Out of Stock</button>
      )}
      <button className='emoji-button' onClick={handleDeletePlantClick} >🗑️</button>
    </li>
  );
}

export default PlantCard;
