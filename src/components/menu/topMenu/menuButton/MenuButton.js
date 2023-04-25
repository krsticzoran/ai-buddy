import React, { useContext } from "react";
import "./menu-button.css";

import { ChatContext } from "../../../../store/chat-context";

const MenuButton = () => {
  const chatCtx = useContext(ChatContext);

  const toggleMenu = () => {
    chatCtx.isMenuOpen ? chatCtx.toggleMenu(false) : chatCtx.toggleMenu(true);
  };

  return (
    <button onClick={toggleMenu} className="menu-button">
      {chatCtx.isMenuOpen ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
    </button>
  );
};

export default MenuButton;
