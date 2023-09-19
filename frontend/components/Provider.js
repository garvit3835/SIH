import React from "react";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import AppProvider from "./context/AppContext";

const Provider = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <AuthProvider>
          <AppProvider>{children}</AppProvider>
        </AuthProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Provider;
