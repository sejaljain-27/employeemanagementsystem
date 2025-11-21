import React from "react";
import { useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = React.createContext()
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = React.useState(null);
  useEffect(() => {
      const { employess, admin } = getLocalStorage();
  setUserData({ employess, admin });

  }, [])
  
 
  return <div>
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
    </div>
}

export default AuthProvider;
