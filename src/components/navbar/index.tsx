import { FC } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import MainNav from "./MainNav";

const Nav: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="header"
      id="header"
      className="deep-bg"
      borderBottom="1px"
      borderColor={colorMode === "light" ? "#F7F7F7" : "#1A202C"}
      backgroundColor={colorMode === "light" ? "#fff" : "#1A202C"}
      pos="fixed"
      w="100%"
      zIndex="999"
      boxShadow="md"
    >
      <MainNav />
    </Box>
  );
};

export default Nav;
