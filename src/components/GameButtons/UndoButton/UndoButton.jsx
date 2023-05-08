import React from "react";
import "./UndoButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


const UndoButton = () => {
  return (
    <div className="button-container flex flex-col">

      <button
        className="flex items-center justify-center 
        rounded-full 
        w-20 h-20
        text-3xl text-center 
        bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 drop-shadow-md 
        cursor-pointer"
      >
        <FontAwesomeIcon icon={ faRotateLeft } size="xl" style={{color: "#ffffff",}} />
        
      </button>
      
    </div>
  );
};

export default UndoButton;
