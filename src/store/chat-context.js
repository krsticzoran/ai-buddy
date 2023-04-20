import React, { useState } from "react";

const ChatContext = React.createContext({
  isNewChat: false,
  startNewChat: false,
  newChat: () => {},
  oldChat: () => {},
});

const ChatContextProvider = (props) => {
  const [isNewChat, setIsNewChat] = useState(false);
  const [startNewChat, setStartNewChat] = useState(false);

  const newChatHandler = () => {
    setIsNewChat(true);
    console.log(isNewChat);
  };

  const oldChatHandler = () => {
    setIsNewChat(false);
  };

  const startNewChatHandler = () => {
    setStartNewChat(true);
  };

  const endNewChatHandler = () => {
    setStartNewChat(false);
  };

  const contextValue = {
    isNewChat: isNewChat,
    startNewChat: startNewChat,
    newChat: newChatHandler,
    oldChat: oldChatHandler,
    start: startNewChatHandler,
    end: endNewChatHandler,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
