import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ChatContext } from '../../../../store/chat-context';
import { ref, set } from 'firebase/database';
import { db } from '../../../../firebase';
import { useDispatch } from 'react-redux';
import { newChatActions } from '../../../../store/startNewChat';
import './clear-conversation.css';

const ClearConversation = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.auth.uid);
  const chatCtx = useContext(ChatContext);

  const clearChatHandler = async () => {
    console.log(uid);
    if (uid) {
      await set(ref(db, `users/${uid}/history`), null);

      dispatch(newChatActions.start());
      chatCtx.addTitle();
    }
  };

  return (
    <button
      onClick={clearChatHandler}
      className="clear btn text-start  rounded-lg text-decoration-none w-100 "
    >
      <i className="fa-solid fa-trash-can me-2"></i>
      <span>Clear conversations</span>
    </button>
  );
};
export default ClearConversation;
