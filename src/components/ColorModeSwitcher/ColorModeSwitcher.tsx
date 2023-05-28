import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  Button,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Button
      size="md"
      fontSize="s"
      marginLeft="2"
      variant="ghost"
      color="current"
      onClick={() => {}}
      rightIcon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    >
      {text} mode
    </Button>
  );
};
