import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  components: {
    Button: {
      baseStyle: {
        _focus: { outline: "none", boxShadow: "none" },
      },
    },
  },
});

export default theme;
