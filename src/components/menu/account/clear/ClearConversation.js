import React, { useContext } from "react";
import { AuthContext } from "../../../../store/auth-contex";
import { ChatContext } from "../../../../store/chat-context";
import { ref, set } from "firebase/database";
import { db } from "../../../../firebase";

import "./clear-conversation.css";

const ClearCoversation = () => {
  const authCtx = useContext(AuthContext);
  const chatCtx = useContext(ChatContext);

  const clearChatHandler = async () => {
    if (authCtx.uid) {
      await set(ref(db, `users/${authCtx.uid}/history`), null);
      console.log("Chat history cleared.");
      chatCtx.start();
      chatCtx.addTitle();
    }
  };

  return (
    <button
      onClick={clearChatHandler}
      className="clear btn text-start  rounded-lg text-decoration-none w-100 "
    >
      <i className="fa-solid fa-trash-can me-2"></i>
      <span>Clear conversations</span>
    </button>
  );
};
export default ClearCoversation;
