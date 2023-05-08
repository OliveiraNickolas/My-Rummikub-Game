import React from "react";
import "./MenuButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuButton = () => {
  return (
    <div className="button-container flex flex-col rounded-lg hover:bg-zinc-800 active:bg-zinc-900">

      <button
        className="w-20 h-20 cursor-pointer">
      <FontAwesomeIcon icon={faBars} size="3x" style={{color: "#ffffff",}} />
      </button>
      
    </div>
  );
};

export default MenuButton;
