import React, { useState, useEffect } from "react";
import "./Deck.css";
import Tile from "../GameButtons/Tile/Tile";

const Deck = () => {
  // Definindo o número inicial de colunas
  const initialColumns = 15;

  // Mapeando o número de colunas para o tamanho das células
  const cellSizes = {
    5: { width: 74.5, height: 112 },
    6: { width: 74.5, height: 112 },
    7: { width: 74.5, height: 112 },
    8: { width: 74.5, height: 112 },
    9: { width: 74.5, height: 112 },
    10: { width: 74.5, height: 112 },
    11: { width: 67.50, height: 101 },
    12: { width: 61.80, height: 93 },
    13: { width: 56.85, height: 85 },
    14: { width: 52.65, height: 80 },
    15: { width: 49, height: 74 },
  };

  // Definindo o tamanho inicial da célula
  const [cellSize, setCellSize] = useState(cellSizes[initialColumns]);

  // Atualizando o tamanho da célula quando o número de colunas mudar
  useEffect(() => {
    setCellSize(cellSizes[initialColumns]);
  }, [initialColumns]);

  const deckWidths = {
    5: { width: 905 },
    6: { width: 1070 },
    7: { width: 1235 },
    8: { width: 1400 },
    9: { width: 1565 },
    10: { width: 1595 },
    11: { width: 1595 },
    12: { width: 1595 },
    13: { width: 1595 },
    14: { width: 1595 },
    15: { width: 1595 },
  };

  // Definindo o tamanho inicial do deck
  const [deckWidth, setDeckWidth] = useState(deckWidths[initialColumns]);

  // Atualizando o tamanho do deck quando o número de colunas mudar
  useEffect(() => {
    setDeckWidth(deckWidths[initialColumns]);
  }, [initialColumns]);

  // Criando as células
  const deckCell = [];
  for (let i = 0; i < 2; i++) {
    // Sempre haverá 2 linhas
    for (let j = 0; j < initialColumns; j++) {
      deckCell.push(
        <div
          key={`${i === 0 ? "upper" : "lower"}-${j}`}
          style={{
            width: `${cellSize.width}px`,
            height: `${cellSize.height}px`,
          }}
          className="deckCell"
        >
           <Tile width={cellSize.width} height={cellSize.height} />
        </div>
      );
    }
  }

  // Renderizando as células dentro dos decks
  return (
    <div className="deck h-full flex flex-col items-center justify-end">
      <div
        className="deck-up bg-zinc-700 rounded-tl-xl rounded-tr-xl max-h-24 h-1/2 flex items-end justify-center gap-0.5 overflow-visible"
        style={{ width: `${deckWidth.width - 25 }px` }}
      >
        {deckCell}
      </div>

      <div
        className="deck-down bg-zinc-700 rounded-tl-xl rounded-tr-xl max-h-24 h-1/2 flex items-end justify-center gap-0.5 overflow-visible"
        style={{ width: `${deckWidth.width}px` }}
      >
        {deckCell}
      </div>
    </div>
  );
};

export default Deck;
