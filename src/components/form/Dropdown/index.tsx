import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { KeyValuePair } from "../../../types";
import { DROPDOWN_PLACEHOLDER } from "../../../utils/constants";

type DropdownProps = {
  options: Array<KeyValuePair>;
  handleSelectedRegion: (value: string) => void;
  region: string;
};

const Dropdown = ({ options, handleSelectedRegion, region }: DropdownProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Menu matchWidth>
        <MenuButton
          variant="solid"
          width={["full", "200px"]}
          as={Button}
          rightIcon={<FaChevronDown />}
          backgroundColor={colorMode === "light" ? "white" : "#1A202C"}
          border="1px"
          borderColor="gray.200"
        >
          {region ? region : DROPDOWN_PLACEHOLDER}
        </MenuButton>
        <MenuList>
          {region ? (
            <MenuItem
              onClick={() => handleSelectedRegion(DROPDOWN_PLACEHOLDER)}
            >
              All
            </MenuItem>
          ) : null}
          {options.map(({ text, value }, index) => (
            <MenuItem
              key={`region-${text}-${index}`}
              value={value}
              onClick={() => handleSelectedRegion(value)}
            >
              {text}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Dropdown;
