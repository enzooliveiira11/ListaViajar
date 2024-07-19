import React, { useState } from 'react';

function PlaceItem({ index, place, editPlace, removePlace }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPlace, setNewPlace] = useState(place);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editPlace(index, newPlace);
    }
  };

  const handleRemove = () => {
    removePlace(index);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newPlace}
          onChange={(e) => setNewPlace(e.target.value)}
        />
      ) : (
        <span>{place}</span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Salvar' : 'Editar'}
      </button>
      <button onClick={handleRemove}>Remover</button>
    </li>
  );
}

export default PlaceItem;