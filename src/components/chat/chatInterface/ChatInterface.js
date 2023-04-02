import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import ChatCard from "./ChatCard";
import UserInput from "../form/userInput/UserInput";

const apiKey = process.env.REACT_APP_API_KEY;

const ChatInterface = () => {
  const [message, setMessage] = useState([]);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message.length) {
      const fetchData = async () => {
        setLoading(true);
        const configuration = new Configuration({
          apiKey: apiKey,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: `${message.slice(-1)}` }],
        });

        setLoading(false);
        handleAnswer(response.data.choices[0].message.content);
      };
      fetchData();
    }
  }, [message]);

  const handleAnswer = (answer) => {
    setChat((prevMessages) => [...prevMessages, answer]);
  };
  const handleData = (input) => {
    setChat((prevMessage) => [...prevMessage, input]);
    setMessage((prevMessage) => [...prevMessage, input]);
  };

  return (
    <>
      <ChatCard messages={chat} />
      <UserInput isLoading={loading} onData={handleData}></UserInput>
    </>
  );
};

export default ChatInterface;
