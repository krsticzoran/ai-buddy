import React, { useEffect, useState } from 'react';
import './top-menu.css';
import { useSelector } from 'react-redux';

import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';

import MenuButton from './menuButton/MenuButton';

const TopMenu = () => {
  const uid = useSelector((state) => state.auth.uid);

  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      if (uid) {
        const snapshot = await get(ref(db, `users/${uid}/username`));
        if (snapshot.exists()) {
          setUsername(snapshot.val());
        }
      }
    };
    getUserData();
  }, [uid]);

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
