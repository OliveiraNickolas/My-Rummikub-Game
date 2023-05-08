import React from "react";
import "./ArrangeButton.css";

const ArrangeButton = () => {
  return (
    <div className="button-container flex flex-col">

      <button
        className="rounded-tl-full rounded-tr-full 
        w-24 h-24 
        text-4xl font-bold  text-white text-center 
        bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 drop-shadow-md 
        cursor-pointer"
      >
        234
      </button>
      
      <button
        className="rounded-bl-full rounded-br-full 
        border-t-2 border-zinc-800 
        w-24 h-24
        text-4xl font-bold text-white text-center
        bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 drop-shadow-md 
        cursor-pointer"
      >
        555
      </button>

    </div>
  );
};

export default ArrangeButton;
