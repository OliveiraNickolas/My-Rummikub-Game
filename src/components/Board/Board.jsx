import React, { useState, useEffect } from 'react';
import './Board.css';
import Tile from '../GameButtons/Tile/Tile';

const cellSizes = {
  4: { width: 113, height: 169.5 },
  5: { width: 90, height: 135 },
  6: { width: 77, height: 115.5 },
  7: { width: 65, height: 98 },
};

const Board = ({ rows = 7 }) => {
  const columns = rows * 3;
  const [cellSize, setCellSize] = useState(cellSizes[rows]);

  useEffect(() => {
    setCellSize(cellSizes[rows]);
  }, [rows]);

  const boardCell = [];

  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      boardCell.push(
        <div
          key={`${i}-${j}`}
          style={{
            width: `${cellSize.width}px`,
            height: `${cellSize.height}px`,
          }}
          className='boardCell'
        >
            
        </div>
        
      );
    }
  }

  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='board grid rounded' 
        style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '6px 2px',
        padding: '5px',
        width: `calc(${columns} * ${cellSize.width}px + (${columns - 1}) * 2px + 10px)`,
        height: `calc(${rows} * ${cellSize.height}px + (${rows - 1}) * 6px + 10px)`,
      }}>
        {boardCell}
      </div>
    </div>
  );

};

export default Board;
