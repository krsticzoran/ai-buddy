import React, { useContext } from 'react';
import './logout.css';
import { authActions } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { ChatContext } from './../../../../store/chat-context';
const Logout = () => {
  const chatCtx = useContext(ChatContext);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(authActions.logout());
    chatCtx.chatHandler('');
  };

  return (
    <button
      onClick={logoutUser}
      className="logout btn text-start rounded-lg text-decoration-none w-100 "
    >
      <i className="fas fa-sign-out-alt me-2"></i>
      <span>Log out</span>
    </button>
  );
};

export default Logout;
