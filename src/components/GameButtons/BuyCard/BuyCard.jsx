import React from "react";
import "./BuyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BuyCard = () => {
  return (
    <div
      className="tile-container drop-shadow-md
    flex items-start justify-center
    w-24 h-36 pt-3 pr-1
    cursor-pointer active:drop-shadow-none"
    >
      <div
        className="Circle flex items-center justify-center 
      rounded-full
      w-20 h-20"
      >
        <FontAwesomeIcon icon={faPlus} size="3x" style={{ color: "#be0407" }} />
      </div>

      <div className="rounded absolute inset-0 hover:bg-zinc-800 hover:opacity-20 active:opacity-30"></div>
    </div>
  );
};

export default BuyCard;
