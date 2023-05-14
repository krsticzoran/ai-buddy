import React from 'react';
import './logout.css';

import { useDispatch } from 'react-redux';
const Logout = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch({ type: 'logout' });
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
