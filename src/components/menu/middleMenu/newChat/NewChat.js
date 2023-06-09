import React, { useContext } from 'react';
import './new-chat.css';
import { ChatContext } from './../../../../store/chat-context';
import { useDispatch, useSelector } from 'react-redux';
import { newChatActions } from './../../../../store/startNewChat.js';
import { menuActions } from '../../../../store/menu';
const NewChat = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const dispatch = useDispatch();
  const chatCtx = useContext(ChatContext);

  const newChatHandler = () => {
    chatCtx.titleHandler('new chat');
    dispatch(newChatActions.start());

    isMenuOpen && dispatch(menuActions.toggleMenu());
  };

  return (
    <div className="new-chat-padding">
      <button
        onClick={newChatHandler}
        className="new-chat btn text-start rounded-lg text-decoration-none w-100 "
      >
        <i className="fa-solid fa-plus me-2"></i>
        <span>New chat</span>
      </button>
    </div>
  );
};

export default NewChat;
