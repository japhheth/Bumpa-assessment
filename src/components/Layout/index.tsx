import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Box pt="24">
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
