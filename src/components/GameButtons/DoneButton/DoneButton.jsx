import React from "react";
import "./DoneButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const DoneButton = () => {
  return (
    <div className="button-container flex flex-col">

      <button
        className="rounded-full 
        w-20 h-20
        text-3xl text-center 
        bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 drop-shadow-md 
        cursor-pointer"
      >
      <FontAwesomeIcon icon={faCheck} size="2x" style={{color: "#ffffff",}} />
      </button>
      
    </div>
  );
};

export default DoneButton;
