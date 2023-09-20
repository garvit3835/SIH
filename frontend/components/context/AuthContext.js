import { useCookies } from "react-cookie";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "auth"]);

  const userInfoCookie = cookies.auth;
  const userRole = "patient";

  const [isAuthenticated, setIsAuthenticated] = useState(
    userInfoCookie ? true : false
  );

  const authLogin = () => {
    setIsAuthenticated(true);
  };

  const authLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authLogin, authLogout }}>
      <div className={`${userRole}`}>{children}</div>
    </AuthContext.Provider>
  );
};
