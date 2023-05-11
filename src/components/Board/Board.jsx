import React, { useState, useEffect } from 'react';
import './Board.css';

const Board = ({ rows = 4, columns = 12 }) => {
  const [cellSize, setCellSize] = useState({ width: 113, height: 169.5 });

  useEffect(() => {
    if (rows === 4 && columns === 12) {
      setCellSize({ width: 113, height: 169.5 });
    } else if (rows === 5 && columns === 15) {
      setCellSize({ width: 90, height: 135 });
    } else if (rows === 6 && columns === 18) {
      setCellSize({ width: 77, height: 115.5 });
    } else if (rows === 7 && columns === 21) {
      setCellSize({ width: 65, height: 98 });
    }
  }, [rows, columns]);

  const cells = [];

  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      cells.push(
        <div
          key={`${i}-${j}`}
          style={{
            width: `${cellSize.width}px`,
            height: `${cellSize.height}px`,
          }}
          className='cell'
        />
      );
    }
  }

  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='board grid rounded bg-blue-50' 
        style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '6px 2px',
        padding: '5px',
        width: `calc(${columns} * ${cellSize.width}px + ${columns - 1} * 2px + 10px)`,
        height: `calc(${rows} * ${cellSize.height}px + ${rows - 1} * 6px + 10px)`, 
      }}>
        {cells}
      </div>
    </div>
  );

};

export default Board;
