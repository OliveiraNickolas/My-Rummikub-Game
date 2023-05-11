import React from 'react';
import './Player.css';
import PlayerInfo from './PlayerInfo';

const Player = () => {
  return (
    <div className="player">
      <PlayerInfo 
      name="Best Player" 
      cardCount={2} 
      level={75} 
      totalTime={30} 
      elapsedTime={5} 
      />
    </div>
  );
};

export default Player;
