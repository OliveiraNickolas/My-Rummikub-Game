import React from 'react';
import './Players.css';
import PlayerInfo from './PlayerInfo';

const Players = () => {
  return (
    <div className="players">
      <PlayerInfo 
      name="Artemis337" 
      cardCount={12} 
      level={75} 
      totalTime={30} 
      elapsedTime={5} 
      />
    </div>
  );
};

export default Players;
