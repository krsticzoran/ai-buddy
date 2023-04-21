import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../store/auth-contex";
import NewChat from "../newChat/NewChat";
import "./chat-history.css";
import { get, ref } from "firebase/database";
import { db } from "../../../firebase";
import { ChatContext } from "../../../store/chat-context";

const ChatHistory = () => {
  const authCtx = useContext(AuthContext);
  const chatCtx = useContext(ChatContext);
  const [title, setTitle] = useState({});
  const [key, setKey] = useState("");

  const clickHandler = (key) => {
    setKey(key);
  };

  useEffect(() => {
    const getUserChat = async () => {
      const snapshot = await get(
        ref(db, `users/${authCtx.uid}/history/${key}`)
      );

      if (snapshot.exists()) {
        chatCtx.titleHandler(key);
        chatCtx.chatHandler(snapshot.val());
      }
    };

    getUserChat();
  }, [key]);

  useEffect(() => {
    const getUserData = async () => {
      if (authCtx.uid) {
        const snapshot = await get(ref(db, `users/${authCtx.uid}/history`));
        setTitle({});
        if (snapshot.exists()) {
          setTitle(snapshot.val());
          console.log(snapshot.val());
        }
      }
    };

    getUserData();
    console.log(1222222);
    chatCtx.cancelTitle();
  }, [authCtx.uid, chatCtx.isNewTitle]);

  return (
    <div className="chat-history px-3">
      <NewChat></NewChat>
      {Object.keys(title).map((key) => (
        <button
          onClick={() => clickHandler(key)}
          key={key}
          className="button-history btn text-start rounded-lg text-decoration-none w-100"
        >
          <i className="fa-regular fa-message me-2"></i>
          <span className="me-2">{key}</span>
        </button>
      ))}
    </div>
  );
};

export default ChatHistory;
