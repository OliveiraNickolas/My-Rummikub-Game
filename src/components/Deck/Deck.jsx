import React, { useState, useEffect } from "react";
import "./Deck.css";
import Tile from "../GameButtons/Tile/Tile";

const Deck = () => {
  // Definindo o número inicial de colunas
  const initialColumns = 14

  // Mapeando o número de colunas para o tamanho das células
  const cellSizes = {
      14: { width: 74.5, height: 112 },
      15: { width: 74.5, height: 112 },
      16: { width: 74.5, height: 112 },
      17: { width: 74.5, height: 112 },
      18: { width: 74.5, height: 112 },
      19: { width: 74, height: 111 },
      20: { width: 71, height: 106.5 },
      21: { width: 68, height: 102 },
      22: { width: 64, height: 96 },
      23: { width: 62, height: 93 },
      24: { width: 59, height: 89 },
      25: { width: 57, height: 86 },
      26: { width: 54, height: 81 },
      27: { width: 52, height: 78 },
      28: { width: 50, height: 75 },
      29: { width: 49, height: 74 },
      30: { width: 48, height: 72 },
  };

  // Definindo o tamanho inicial da célula
  const [cellSize, setCellSize] = useState(cellSizes[initialColumns]);

  // Atualizando o tamanho da célula quando o número de colunas mudar
  useEffect(() => {
    setCellSize(cellSizes[initialColumns]);
  }, [initialColumns]);

  // Criando as células
  const deckCell = [];

  for (let j = 0; j < initialColumns; j++) {
    deckCell.push(
      <div
        key={`upper-${j}`}
        style={{
          width: `${cellSize.width}px`,
          height: `${cellSize.height}px`,
        }}
        className="deckCell"
      >
         
      </div>
    );
  }

  // Renderizando as células dentro dos decks
  return (
    <div className="deck h-full flex flex-col items-center justify-end">
      <div
        className="deck-up bg-zinc-700 rounded-tl-xl rounded-tr-xl max-h-24 h-1/2 pl-5 pr-5 flex items-end justify-start gap-0.5 overflow-visible"
        style={{ minWidth: '1110px' }}
      >
        {deckCell}
      </div>

      <div
        className="deck-down bg-zinc-700 rounded-tl-xl rounded-tr-xl max-h-24 h-1/2 pl-8 pr-8 flex items-end justify-start gap-0.5 overflow-visible"
        style={{ minWidth: '1134px' }}
      >
        {deckCell}
      </div>
    </div>
  );
};

export default Deck;
