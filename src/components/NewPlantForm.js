import React, { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: 0,
  });

  function handleNewPlantChange(e) {
    // console.log("in handleNewPlantChange, name: ", e.target.name, ', value: ', e.target.value);

    switch (e.target.name) {
      case 'name':
        setNewPlant({...newPlant, name: e.target.value});
        break;
      case 'image':
        setNewPlant({...newPlant, image: e.target.value});
        break;
      case 'price':
        setNewPlant({...newPlant, price: e.target.value});
        break;
    }
  }

  function handleNewPlantSubmit(e) {
    console.log('in handleNewPlantSubmit, e: ', e);

    e.preventDefault();

    fetch(' http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
    .then(resp => resp.json())
    .then(plant => onAddNewPlant(plant));
  } 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
          value={newPlant.name} onChange={handleNewPlantChange} />
        <input type="text" name="image" placeholder="Image URL" 
          value={newPlant.image} onChange={handleNewPlantChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" 
          value={newPlant.price} onChange={handleNewPlantChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
