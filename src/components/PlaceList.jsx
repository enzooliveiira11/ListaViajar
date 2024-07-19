import React from 'react';
import PlaceItem from './PlaceItem';

function PlaceList({ places, editPlace, removePlace }) {
  return (
    <ul>
      {places.map((place, index) => (
        <PlaceItem
          key={index}
          index={index}
          place={place}
          editPlace={editPlace}
          removePlace={removePlace}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
