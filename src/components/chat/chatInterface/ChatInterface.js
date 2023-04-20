import React, { useState, useEffect, useContext } from "react";
import { Configuration, OpenAIApi } from "openai";
import ChatCard from "./ChatCard";
import UserInput from "../form/userInput/UserInput";
import { AuthContext } from "../../../store/auth-contex";
import { set, ref } from "firebase/database";
import { db } from "../../../firebase";
import { ChatContext } from "../../../store/chat-context";

const apiKey = process.env.REACT_APP_API_KEY;

const ChatInterface = () => {
  const authCtx = useContext(AuthContext);
  const [message, setMessage] = useState([]);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [title, setTitle] = useState("");
  const chatCtx = useContext(ChatContext);

  useEffect(() => {
    if (message.length) {
      const fetchData = async () => {
        setLoading(true);
        const configuration = new Configuration({
          apiKey: apiKey,
        });
        const openai = new OpenAIApi(configuration);
        if (message.length === 1) {
          const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `What would you like to call this chat? Based on this question: ${message[0]}`,
              },
            ],
          });
          chatCtx.addTitle();
          chatCtx.end();

          setTitle(response.data.choices[0].message.content);
        }
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `${message.slice(-1)}`,
            },
          ],
        });

        setLoading(false);
        setAnswer(response.data.choices[0].message.content);

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

  useEffect(() => {
    const setTitleData = async () => {
      if (title) {
        const snapshot = await set(
          ref(db, `users/${authCtx.uid}/history/${title}`),
          { ...chat }
        );
        console.log(`Created new folder: ${title}`);
      }
    };
    setTitleData();
  }, [title, chat]);

  useEffect(() => {
    if (chatCtx.startNewChat === true) {
      setMessage([]);
      setAnswer("");
      setTitle("");
      setChat([]);
    }
  }, [chatCtx.startNewChat]);

  return (
    <>
      <ChatCard messages={chat} />
      <UserInput
        isLoading={loading}
        onData={handleData}
        answer={answer}
      ></UserInput>
    </>
  );
};

export default ChatInterface;
