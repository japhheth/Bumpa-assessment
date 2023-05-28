import { Outlet } from "react-router-dom";
import { Box, useColorMode } from "@chakra-ui/react";
import Header from "../navbar";

const Layout = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Header />
      <Box
        pt="24"
        px={[3, 4, 6, 10]}
        borderColor={colorMode === "light" ? "#FAFAFA" : "#1A202C"}
        height="100vh"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
