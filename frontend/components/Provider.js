import React from "react";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import AppProvider from "./context/AppContext";
import { CookiesProvider } from "react-cookie";

const Provider = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <CookiesProvider>
          <AuthProvider>
            <AppProvider>{children}</AppProvider>
          </AuthProvider>
        </CookiesProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Provider;
