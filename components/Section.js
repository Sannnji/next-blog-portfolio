import { Box, Heading } from "@chakra-ui/react";

export const Section = ({ heading, children }) => {
  return (
    <Box py={8}>
      <Heading my={4} fontSize="4xl" color="#53E4C1">
        {heading}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
};
