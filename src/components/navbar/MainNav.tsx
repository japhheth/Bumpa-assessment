import { Flex, Box, Text, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

const MainNav = () => {
  return (
    <Flex
      w="100"
      px={[3, 4, 6, 10]}
      py={5}
      align="center"
      justify="space-between"
    >
      <Box>
        <Text color="current" fontWeight="semibold">
          Where are we in the world ?
        </Text>
      </Box>
      <Box>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
};

export default MainNav;
