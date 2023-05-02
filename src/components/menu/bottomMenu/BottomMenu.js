import React, { useContext } from "react";
import Logout from "./logout/Logout.js";
import ClearCoversation from "./clear/ClearConversation.js";

import { ChatContext } from "../../../store/chat-context.js";
import "./bottom-menu.css";

const BottomMenu = () => {
  const ctxCHat = useContext(ChatContext);
  return (
    <div
      className={`account px-3 ${
        ctxCHat.isMenuOpen ? "account-display-in" : "account-display"
      }`}
    >
      <div className="account-border ">
        <ClearCoversation></ClearCoversation>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default BottomMenu;
