import React, { useState } from 'react';

function PlaceForm({ addPlace }) {
  const [place, setPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlace(place);
    setPlace('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Adicionar novo lugar"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default PlaceForm;
