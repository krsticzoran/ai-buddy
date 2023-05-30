import React from 'react';
import Logout from './logout/Logout.js';
import ClearConversation from './clear/ClearConversation.js';

import './bottom-menu.css';
import { useSelector } from 'react-redux';
const BottomMenu = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  return (
    <div
      className={`account px-3 ${
        isMenuOpen ? 'account-display-in' : 'account-display'
      }`}
    >
      <div className="account-border ">
        <ClearConversation></ClearConversation>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default BottomMenu;
