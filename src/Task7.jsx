import React, { createContext, useState, useContext } from "react";


const UserAuthContext = createContext();


export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};


export const useUserAuth = () => {
  return useContext(UserAuthContext);
};


const AuthStatus = () => {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <div>
      <p>{isLoggedIn ? "You are logged in" : "You are logged out"}</p>
      <button onClick={toggleAuth}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default AuthStatus;