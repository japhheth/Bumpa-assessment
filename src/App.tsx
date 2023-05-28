import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { store } from "./store";
import AppRouter from "./router";

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <AppRouter />
      <Toaster position="top-right" />
    </ChakraProvider>
  </Provider>
);
