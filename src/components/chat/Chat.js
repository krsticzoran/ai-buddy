import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import ChatCard from './chatCard/ChatCard';
import { MemoizedUserInput } from './userInput/UserInput';
import { useSelector, useDispatch } from 'react-redux';
import { set, ref } from 'firebase/database';
import { db } from '../../firebase';
import { ChatContext } from '../../store/chat-context';
import { newChatActions } from './../../store/startNewChat';

const apiKey = process.env.REACT_APP_API_KEY;

const Chat = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);
  const isNewChat = useSelector((state) => state.newChat.isNewChat);
  const [message, setMessage] = useState([]);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [title, setTitle] = useState('');
  const chatCtx = useContext(ChatContext);

  useEffect(() => {
    if (message.length) {
      const fetchData = async () => {
        setLoading(true);
        const configuration = new Configuration({
          organization: 'org-JL4aOCF4C1gmjn9ttiPSo3Q4',
          apiKey,
        });

        // Delete the User-Agent header
        delete configuration.baseOptions.headers['User-Agent'];

        const openai = new OpenAIApi(configuration);
        if (message.length === 1 && !title) {
          const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: `What would you like to call this chat? Based on this question: ${message[0]}`,
              },
            ],
          });
          chatCtx.addTitle();
          dispatch(newChatActions.finish());
          chatCtx.titleHandler(response.data.choices[0].message.content);

          setTitle(response.data.choices[0].message.content);
        }
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `provide an answer based on the chat: ${chat} particularly based on the last question asked by the user: ${message.slice(
                -1
              )}`,
            },
          ],
        });

        setLoading(false);

        //use  in sound
        setAnswer(response.data.choices[0].message.content);

        handleAnswer(response.data.choices[0].message.content);
      };
      fetchData();
    }
  }, [message]);

  const handleAnswer = (answer) => {
    setChat((prevMessages) => [...prevMessages, answer]);
  };
  const handleData = useCallback((input) => {
    if (input !== '') {
      setChat((prevMessage) => [...prevMessage, input]);
      setMessage((prevMessage) => [...prevMessage, input]);
    }
  }, []);

  useEffect(() => {
    const setTitleData = async () => {
      if (title) {
        await set(ref(db, `users/${uid}/history/${title}`), {
          ...chat,
        });

        dispatch(newChatActions.finish());
      }
    };
    setTitleData();
  }, [title, chat]);

  useEffect(() => {
    if (isNewChat === true) {
      setMessage([]);
      setAnswer('');
      setTitle('');
      setChat([]);
    }
  }, [isNewChat]);

  useEffect(() => {
    if (chatCtx.chat && chatCtx.title) {
      setMessage([]);
      setAnswer('');
      setTitle(chatCtx.title);
      setChat(chatCtx.chat);
    }
  }, [chatCtx.chat]);

  return (
    <>
      <ChatCard messages={chat} />
      <MemoizedUserInput
        isLoading={loading}
        onData={handleData}
        answer={answer}
      ></MemoizedUserInput>
    </>
  );
};

export default Chat;
