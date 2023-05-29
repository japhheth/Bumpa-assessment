import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "@reduxjs/toolkit";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { rootReducer } from "./store";
import AppRouter from "./router";
import { asyncFunctionMiddleware } from "./utils/redux";

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <AppRouter />
      <Toaster position="top-right" />
    </ChakraProvider>
  </Provider>
);
