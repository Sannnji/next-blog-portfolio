import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

import AnimatedSVG from "./AnimatedSVG";

function ColorModeSwitcher() {
  const { toggleColorMode } = useColorMode();
  const isDarkMode = useColorModeValue(true, false);
  const bgColor = useColorModeValue("#1A202C", "#3F444E");

  return (
    <IconButton
      ml={2}
      aria-label="Color Mode Switcher"
      bg={bgColor}
      _hover="none"
      _focus={{ outline: "none", boxShadow: "none" }}
      onClick={toggleColorMode}
    >
      <AnimatedSVG isDarkMode={isDarkMode} />
    </IconButton>
  );
}

export default ColorModeSwitcher;
