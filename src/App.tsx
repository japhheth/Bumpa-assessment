import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { store } from "./store";
import AppRouter from "./router";

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  </Provider>
);
