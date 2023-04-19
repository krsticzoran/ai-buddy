import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  uid: "",
  login: () => {},
  logout: () => {},
  addId: () => {},
});

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState("");

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const uidHandler = (id) => {
    setUid(id);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    uid: uid,
    login: loginHandler,
    logout: logoutHandler,
    addId: uidHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
