import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box px={{ base: "4%", md: "4%", lg: "13%" }} py="7%">
      {children}
    </Box>
  );
};
