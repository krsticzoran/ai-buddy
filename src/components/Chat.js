import React, { useState } from "react";
import MyCard from "./Card.js";
import UserInputs from "./UserInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleData = (input) => {
    setMessages((prevMessages) => [...prevMessages, input]);
  };

  return (
    <div>
      <MyCard messages={messages} />
      <UserInputs onData={handleData}></UserInputs>
    </div>
  );
};

export default Chat;
