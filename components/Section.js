import { Box, Text } from "@chakra-ui/react";

export const Section = ({ heading, children }) => {
  return (
    <Box width={{ base: "auto", md: "65%" }}>
      <Text fontSize="4xl" my={4}>{heading}</Text>
      <Box>{children}</Box>
    </Box>
  );
};
