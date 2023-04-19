import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../store/auth-contex";
import NewChat from "../newChat/NewChat";
import "./chat-history.css";
import { get, ref } from "firebase/database";
import { db } from "../../../firebase";

const ChatHistory = () => {
  const authCtx = useContext(AuthContext);
  const [title, setTitle] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      if (authCtx.uid) {
        const snapshot = await get(ref(db, `users/${authCtx.uid}/history`));
        if (snapshot.exists()) {
          setTitle(snapshot.val());
          console.log(snapshot.val());
        }
      }
    };
    getUserData();
  }, [authCtx.uid]);

  return (
    <div className="chat-history px-3">
      <NewChat></NewChat>
      {Object.keys(title).map((key) => (
        <button
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
