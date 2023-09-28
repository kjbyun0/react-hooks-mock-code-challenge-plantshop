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

  // console.log('in PlantPage, searchKey: ', searchKey);

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search onSetSearchKey={setSearchKey} />
      <PlantList plantList={plantList} onSetPlantList={setPlantList} searchKey={searchKey} />
    </main>
  );
}

export default PlantPage;
