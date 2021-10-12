import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

export const NavLink = ({ children }) => {
  return (
    <Box mx={2}>
      <Text _hover={{ color: "teal" }}>{children}</Text>
    </Box>
  );
};
