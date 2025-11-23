import React from "react";
import { useEffect } from "react";

import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = React.useState(null);

  useEffect(() => {
    // Load both employees and admin from localStorage (getLocalStorage will seed only if missing)
    const authObj = getLocalStorage();
    setUserData(authObj);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
