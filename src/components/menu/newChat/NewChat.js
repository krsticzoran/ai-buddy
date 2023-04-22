import React, { useContext } from "react";
import { ChatContext } from "../../../store/chat-context";
import "./new-chat.css";

const NewChat = () => {
  const chatCtx = useContext(ChatContext);
  const newChatHandler = () => {
    chatCtx.titleHandler("new chat");
    chatCtx.start();
  };

  return (
    <div className="new-chat-padding">
      <button
        onClick={newChatHandler}
        className="new-chat btn text-start rounded-lg text-decoration-none w-100 "
      >
        <i className="fa-solid fa-plus me-2"></i>
        <span>New chat</span>
      </button>
    </div>
  );
};

export default NewChat;
