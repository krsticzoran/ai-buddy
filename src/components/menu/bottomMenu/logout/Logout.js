import React, { useContext } from 'react';
import './logout.css';
import { AuthContext } from '../../../../store/auth-contex';

const Logout = () => {
  const authCtx = useContext(AuthContext);

  return (
    <button
      onClick={authCtx.logout}
      className="logout btn text-start rounded-lg text-decoration-none w-100 "
    >
      <i className="fas fa-sign-out-alt me-2"></i>
      <span>Log out</span>
    </button>
  );
};

export default Logout;
