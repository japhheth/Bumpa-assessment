import { Flex } from "@chakra-ui/react";
import SearchInput from "../../../components/form/SearchInput";
import Dropdown from "../../../components/form/Dropdown";

const ContriesHeader = () => {
  return (
    <Flex
      mt="8"
      w="100"
      gap="5"
      direction={["column", "row"]}
      justifyContent="space-between"
    >
      <SearchInput />
      <Dropdown />
    </Flex>
  );
};

export default ContriesHeader;
