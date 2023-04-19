import React, { useContext, useEffect, useState } from "react";
import "./title.css";
import { AuthContext } from "../../../store/auth-contex";
import { get, ref } from "firebase/database";
import { db } from "../../../firebase";

const Title = () => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      if (authCtx.uid) {
        const snapshot = await get(ref(db, `users/${authCtx.uid}/username`));
        if (snapshot.exists()) {
          setUsername(snapshot.val());
        }
      }
    };
    getUserData();
  }, [authCtx.uid]);

  return (
    <div className="px-3">
      <button className="title text-decoration-none w-100">
        {`${username.charAt(0).toUpperCase()}${username.slice(1).trim()}`}
      </button>
    </div>
  );
};

export default Title;
