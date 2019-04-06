import React from 'react';

const Pet = ({ pet, color }) => {
  return(
    <div className={`pet ${color}`}>
      <div className="photo"><img src={`../assets/images/${pet.image}`}/></div>
      <div className="text">
        <span className="seed">{pet.seed}</span>
        <span className="pet-name">{pet.name}</span>
      </div>
    </div>
  )
}

export default Pet;