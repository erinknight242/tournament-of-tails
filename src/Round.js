import React from 'react';
import BracketGame from './BracketGame';

const Round = () => {
  return(
    <div className="round">
      <h3>Play-In Round</h3>
      <BracketGame
        pet1={{ name: 'Deran-Pup', seed: '1', image: 'Deran_Dean.jpg' }}
        pet2={{ name: 'Steven Austin and Mr. Balboa', seed: '2', image: 'PatrickM_PetRock.png' }}
        test="test"
      />
      <BracketGame
        pet1={{ name: 'Deran-Pup', seed: '1', image: 'Deran_Dean.jpg' }}
        pet2={{ name: 'Deran-Pup', seed: '1', image: 'Deran_Dean.jpg' }}
      />
      <BracketGame
        pet1={{ name: 'Steven Austin and Mr. Balboa', seed: '2', image: 'PatrickM_PetRock.png' }}
        pet2={{ name: 'Steven Austin and Mr. Balboa', seed: '2', image: 'PatrickM_PetRock.png' }}
      />
    </div>
  )
}

export default Round;