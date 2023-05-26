import { ChakraProvider, theme, Text } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Text>Hello</Text>
  </ChakraProvider>
);
