import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, onSetPlantList, searchKey }) {

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(plantList => onSetPlantList(plantList));
  }, []);

  const filteredPlantList = plantList.filter(plant => 
    plant.name.toLowerCase().includes(searchKey.toLowerCase()));
  const displayPlantList = filteredPlantList.map(plant => <PlantCard key={plant.id} plant={plant} />);

  return (
    <ul className="cards">{displayPlantList}</ul>
  );
}

export default PlantList;

