import React, { Component } from 'react';
import Pet from './Pet.js'

const BracketGame = ({ pet1, pet2, game }) => {
  const name = game && game.name ? game.name : '';
  return (
    <div className="game-container">
      <div className="bracket-group">
        <div className="pets">
          <Pet pet={pet1} color="grey"/>
          <Pet pet={pet2} color="grey"/>
        </div>
        <div className="bracket-lines">
          <div className="top"></div>
          <div className="middle">
            <span>{name}</span>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="bracket-lines">
          <div className="upper"></div>
          <div className="lower"></div>
        </div>
      </div>
    </div>
  );
}

export default BracketGame;