import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../config";
import MyCard from "./Card.js";
import UserInputs from "./UserInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (messages.length) {
      const fetchData = async () => {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: `${messages.slice(-1)[0]}`,
            max_tokens: 200,
            temperature: 0.7,
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        handleAnswer(response.data.choices[0].text);
        console.log(response.data.choices[0].text);
      };
      fetchData();
    }
  }, [messages]);

  const handleAnswer = (answer) => {
    setResponse((prevMessages) => [...prevMessages, answer]);
  };

  const handleData = (input) => {
    setMessages((prevMessages) => [...prevMessages, input]);
    setResponse((prevMessages) => [...prevMessages, input]);
  };

  return (
    <div>
      <MyCard messages={response} />
      <UserInputs onData={handleData}></UserInputs>
    </div>
  );
};

export default Chat;
