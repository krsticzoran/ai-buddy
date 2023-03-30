import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../config";
import MyCard from "./Card.js";
import UserInputs from "./UserInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length) {
      const fetchData = async () => {
        setLoading(true);

        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: `This is your previous answer:${
              chat[chat.length - 2]
            }Please answer on this question based on your previous answer:${messages.slice(
              -1
            )}`,
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
        setLoading(false);

        handleAnswer(response.data.choices[0].text);
      };
      fetchData();
    }
  }, [messages]);

  const handleAnswer = (answer) => {
    setChat((prevMessages) => [...prevMessages, answer]);
  };
  const handleData = (input) => {
    setChat((prevMessages) => [...prevMessages, input]);
    setMessages((prevMessages) => [...prevMessages, input]);
  };

  return (
    <div>
      <MyCard messages={chat} />
      <UserInputs isLoading={loading} onData={handleData}></UserInputs>
    </div>
  );
};

export default Chat;
