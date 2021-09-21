import { Box } from "@chakra-ui/react";

export const NavLink = ({ children }) => {
  return (
    <Box mx={{ base: 0, md: 2 }} my={{ base: 2, md: 0 }}>
      {children}
    </Box>
  );
};
