import React from "react";
import "./GameButtons.css";
import BuyCard from "./BuyCard/BuyCard";
import ArrangeButton from "./ArrangeButton/ArrangeButton";
import UndoButton from "./UndoButton/UndoButton";
import DoneButton from "./DoneButton/DoneButton";
import MenuButton from "./MenuButton/MenuButton";



const GameButtons = () => {
  return (
    <div className="game-buttons h-full w-full grid grid-rows-48">

      <div className="row-span-4 flex items-center justify-center">
        <MenuButton />
      </div>

      <div className=" row-span-34 flex flex-col items-center justify-center gap-10">
        <DoneButton/>
        <UndoButton/>
        <BuyCard/>
       </div>
      <div className="row-span-10 flex items-center justify-center">
        <ArrangeButton />
      </div>

    </div>
  );
};

export default GameButtons;
