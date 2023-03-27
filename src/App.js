import React, { useState } from "react";
import MyCard from "./components/Card";
import UserInputs from "./components/UserInput";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (inputValue) => {
    setMessages((prevState) => [...prevState, inputValue]);
  };

  return (
    <div>
      <MyCard messages={messages} />
      <UserInputs></UserInputs>
      <button onClick={() => handleSend(inputValue)}>Send</button>
    </div>
  );
};

export default App;
