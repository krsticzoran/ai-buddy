import React, { useState } from "react";

const ChatContext = React.createContext({
  isNewTitle: false,
  startNewChat: false,
  newChat: () => {},
  oldChat: () => {},
});

const ChatContextProvider = (props) => {
  const [isNewTitle, setIsNetTitle] = useState(false);
  const [startNewChat, setStartNewChat] = useState(false);

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

  const contextValue = {
    isNewTitle: isNewTitle,
    startNewChat: startNewChat,
    addTitle: addTitleHandler,
    cancelTitle: cancelTitleHandler,
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
