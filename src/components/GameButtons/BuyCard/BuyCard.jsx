import React from "react";
import "./BuyCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const BuyCard = () => {
  return (
    <div className="button-container flex flex-col">

      <div className="flex items-start justify-center
        pt-2
        rounded-lg 
        w-24 h-36
        bg-stone-200 hover:bg-stone-300 active:bg-stone-400 drop-shadow-md 
        cursor-pointer"

      >

        <div className="inCirc flex items-center justify-center 
        rounded-full
        w-20 h-20
        
        cursor-pointer"
      >
        <FontAwesomeIcon icon={faPlus} size="3x" style={{color: "#be0407",}} />
      </div>
        
      </div>
      
    </div>
  );
};

export default BuyCard;
