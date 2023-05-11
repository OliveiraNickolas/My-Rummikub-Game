import React from "react";
import "./Deck.css";



const Deck = () => {
  return (
    <div className="deck h-full w-full grid grid-rows-6 justify-items-center">

      <div className="deck-up justify-items-center
        row-start-1 row-span-3
        bg-zinc-700
        rounded-tl-xl rounded-tr-xl
        w-46/48
      ">
        
      </div>

      <div className="deck-down 
        row-start-4 row-span-6 
        bg-zinc-700
      	rounded-tl-xl rounded-tr-xl
        w-47/48
      ">
        
      </div>

    </div>
  );
};

export default Deck;
