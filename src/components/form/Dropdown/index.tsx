import { useState } from "react";
import {
  Select,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { regionOptions } from "./defs";

const Dropdown = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Box>
      <Menu matchWidth>
        <MenuButton
          variant="solid"
          width={["full", "200px"]}
          as={Button}
          rightIcon={<FaChevronDown />}
          backgroundColor="white"
          border="1px"
          borderColor="gray.200"
        >
          {selected ? selected : "Filter by Region"}
        </MenuButton>
        <MenuList>
          {regionOptions.map(({ text, value }, index) => (
            <MenuItem
              key={`region-${text}-${index}`}
              value={value}
              onClick={() => setSelected(value)}
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
