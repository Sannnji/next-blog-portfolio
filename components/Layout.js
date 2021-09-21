import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box px="13%" py="7%">
      {children}
    </Box>
  );
};
