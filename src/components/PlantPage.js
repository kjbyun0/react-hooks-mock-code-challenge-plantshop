import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  function handleAddNewPlant(newPlant) {
    setPlantList([...plantList, newPlant]);
  }

  function handleDeletePlant(deletedPlant) {
    setPlantList(plantList.filter(plant => plant.id !== deletedPlant.id));
  }

  function handleUpdatePlant(updatedPlant) {
    setPlantList(plantList.map(plant => plant.id === updatedPlant.id ? updatedPlant : plant));
  }

  // console.log('in PlantPage, searchKey: ', searchKey);

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search onSetSearchKey={setSearchKey} />
      <PlantList plantList={plantList} onSetPlantList={setPlantList} 
        searchKey={searchKey} onDeletePlant={handleDeletePlant} onUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;
