import Cookies from "js-cookie";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authLogin = () => {
    setIsAuthenticated(true);
  };

  const authLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
