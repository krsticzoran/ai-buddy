import React, { useContext, useEffect, useState } from 'react';
import './top-menu.css';

import { AuthContext } from '../../../store/auth-contex';
import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';

import MenuButton from './menuButton/MenuButton';

const TopMenu = () => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      if (authCtx.uid) {
        const snapshot = await get(ref(db, `users/${authCtx.uid}/username`));
        if (snapshot.exists()) {
          setUsername(snapshot.val());
        }
      }
    };
    getUserData();
  }, [authCtx.uid]);

  return (
    <div className="px-3 ">
      <div className="w-100 menu-container">
        <button className="title text-decoration-none ">
          {`${username.charAt(0).toUpperCase()}${username.slice(1).trim()}`}
        </button>
        <MenuButton></MenuButton>
      </div>
    </div>
  );
};

export default TopMenu;
