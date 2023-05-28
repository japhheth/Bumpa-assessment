import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../navbar";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box pt="24" px={[3, 4, 6, 10]} backgroundColor="#FAFAFA" height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
