import React from 'react';
import './Tile.css';
import tileSvg from '../../../assets/tile.svg';

function Tile({ width = 96, height = 169.5, color = '#c60d11', number = 7 }) {
  const circleWidth = width - 12;
  const fontSize = circleWidth * 0.7;

  return (
    <div
      className='flex items-start justify-center bg-center bg-no-repeat pt-2 pr-1'
      style={{ backgroundImage: `url(${tileSvg})`, backgroundSize: '100% 100%', width: `${width}px`, height: `${height}px` }}
    >
      <div
        className='Circle rounded-full flex items-center justify-center'
        style={{ width: `${circleWidth}px`, height: `${circleWidth}px`, color: `${color}` }}
      >
        <span style={{ fontSize: `${fontSize}px`, fontWeight: 'bolder', fontFamily: 'Instrument Sans, sans-serif' }}>{number}</span>
      </div>
    </div>
  );
}

export default Tile;
