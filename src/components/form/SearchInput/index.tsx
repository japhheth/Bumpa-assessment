import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <FormControl isRequired width={["full", "fit-content"]}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="#E2E2E2" />
        </InputLeftElement>
        <Input
          type="text"
          size="md"
          backgroundColor="white"
          placeholder="Search for a country"
        />
      </InputGroup>
    </FormControl>
  );
};

export default SearchInput;
