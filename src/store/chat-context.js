import React, { useState } from 'react';

const ChatContext = React.createContext({
  isNewTitle: false,
  startNewChat: false,
  isMenuOpen: false,
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
  const [startNewChat, setStartNewChat] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [title, setTitle] = useState('');

  const addTitleHandler = () => {
    setIsNetTitle(true);
  };

  const cancelTitleHandler = () => {
    setIsNetTitle(false);
  };

  const startNewChatHandler = () => {
    setStartNewChat(true);
  };

  const endNewChatHandler = () => {
    setStartNewChat(false);
  };

  const chatHandler = (value) => {
    setChat(value);
  };

  const titleHandler = (value) => {
    setTitle(value);
  };

  const toggleMenu = (value) => {
    setIsMenuOpen(value);
  };

  const contextValue = {
    isNewTitle: isNewTitle,
    startNewChat: startNewChat,
    isMenuOpen: isMenuOpen,
    chat: chat,
    title: title,
    addTitle: addTitleHandler,
    cancelTitle: cancelTitleHandler,
    start: startNewChatHandler,
    end: endNewChatHandler,
    chatHandler: chatHandler,
    titleHandler: titleHandler,
    toggleMenu: toggleMenu,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
