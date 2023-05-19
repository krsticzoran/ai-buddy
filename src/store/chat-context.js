import React, { useState } from 'react';

const ChatContext = React.createContext({
  isNewTitle: false,
  chat: [],
  title: '',
  newChat: () => {},
  oldChat: () => {},
  chatHandler: () => {},
  titleHandler: () => {},
  toggleMenu: () => {},
});

const ChatContextProvider = (props) => {
  const [isNewTitle, setIsNetTitle] = useState(false);
  const [chat, setChat] = useState([]);
  const [title, setTitle] = useState('');

  const addTitleHandler = () => {
    setIsNetTitle(true);
  };

  const cancelTitleHandler = () => {
    setIsNetTitle(false);
  };

  const chatHandler = (value) => {
    setChat(value);
  };

  const titleHandler = (value) => {
    setTitle(value);
  };

  const contextValue = {
    isNewTitle: isNewTitle,

    chat: chat,
    title: title,
    addTitle: addTitleHandler,
    cancelTitle: cancelTitleHandler,
    chatHandler: chatHandler,
    titleHandler: titleHandler,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
