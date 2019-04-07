import React from 'react';
import BracketGame from './BracketGame';

const Round = ({ data }) => {

  const petData = (id) => ({
    name: data[id].name,
    seed: data[id].seed,
    image: data[id].image
  });

  return data.length ? (
    <div className="round">
      <h3>Play-In Round</h3>
      <BracketGame pet1={petData(31)} pet2={petData(32)} />
      <BracketGame pet1={petData(28)} pet2={petData(35)} />
      <BracketGame pet1={petData(30)} pet2={petData(33)} />
      <BracketGame pet1={petData(29)} pet2={petData(34)} />
      <BracketGame pet1={petData(27)} pet2={petData(36)} />
      <BracketGame pet1={petData(26)} pet2={petData(38)} />
      <BracketGame pet1={petData(25)} pet2={petData(39)} />
    </div>
  ) : <div></div>;
}

export default Round;