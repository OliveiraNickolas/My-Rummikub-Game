import React from "react";
import "./ArrangeButton.css";

const ArrangeButton = () => {
  return (
    <div className="flex flex-col">

      <button
        className="rounded-tl-full rounded-tr-full 
        w-20 h-20 
        text-3xl font-bold  text-white text-center 
        bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 drop-shadow-md 
        cursor-pointer"
      >
        234
      </button>
      
      <button
        className="rounded-bl-full rounded-br-full 
        border-t-2 border-zinc-800 
        w-20 h-20 
        text-3xl font-bold text-white text-center
        bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 drop-shadow-md 
        cursor-pointer"
      >
        555
      </button>

    </div>
  );
};

export default ArrangeButton;
