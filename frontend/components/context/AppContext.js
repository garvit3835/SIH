import { useAuth } from "./AuthContext";
import { createContext, useContext, useEffect, useState } from "react";
import { Center, Spinner } from '@chakra-ui/react'
import { useRouter } from "next/router";
import routes, { protectedRoutes } from "../../routes";

// Created App Context
const AppContext = createContext({
  isLoading: false,
  enableLoader: () => {},
  disableLoader: () => {},
});

// Exported App Context Consumer
export const useAppData = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const authInfo = useAuth();

  // Loader Handling on Page Switching
  // useEffect(() => {
  //   router.events.on("routeChangeStart", enableLoader);
  //   router.events.on("routeChangeComplete", disableLoader);

  //   return () => {
  //     router.events.off("routeChangeStart", enableLoader);
  //     router.events.off("routeChangeComplete", disableLoader);
  //   };
  // }, []);

  // Restrict Page Accessibiliy by Page Redirection
  useEffect(() => {
    if (protectedRoutes.includes(router.pathname)) {
      if (!authInfo.isAuthenticated) router.push(routes.LOGIN);
    }
  }, [authInfo]);

  const enableLoader = () => {
    setIsLoading(true);
  };

  const disableLoader = () => {
    setIsLoading(false);
  };

  const appData = {
    isLoading,
    enableLoader,
    disableLoader,
  };

  if (isLoading) {
    return <Center minH={"100vh"}>
      <Spinner color='red.500' size='xl'/>

    </Center>
  }

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};

export default AppProvider;
