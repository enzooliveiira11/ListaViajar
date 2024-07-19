import React, { useState } from 'react';
import PlaceForm from './components/PlaceForm';
import PlaceList from './components/PlaceList';

function App() {
  const [places, setPlaces] = useState([]);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const editPlace = (index, updatedPlace) => {
    const updatedPlaces = places.map((place, i) => (i === index ? updatedPlace : place));
    setPlaces(updatedPlaces);
  };

  const removePlace = (index) => {
    const updatedPlaces = places.filter((_, i) => i !== index);
    setPlaces(updatedPlaces);
  };

  return (
    <div className="App">
      <h1>Lista de Lugares para Viajar</h1>
      <PlaceForm addPlace={addPlace} />
      <PlaceList places={places} editPlace={editPlace} removePlace={removePlace} />
    </div>
  );
}

export default App;