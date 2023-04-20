import React, { useState } from "react";

const ChatContext = React.createContext({
  isNewChat: false,
  newChat: () => {},
  oldChat: () => {},
});

const ChatContextProvider = (props) => {
  const [isNewChat, setIsNewChat] = useState(false);

  const newChatHandler = () => {
    setIsNewChat(true);
    console.log(isNewChat);
  };

  const oldChatHandler = () => {
    setIsNewChat(false);
  };

  const contextValue = {
    isNewChat: isNewChat,
    newChat: newChatHandler,
    oldChat: oldChatHandler,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
