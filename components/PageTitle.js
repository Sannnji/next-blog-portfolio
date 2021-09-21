import { Box, Text } from "@chakra-ui/react";

export const PageTitle = ({ title, subtitle }) => {
  return (
    <Box width="50%">
      <Text fontSize="5xl" fontWeight="thin">
        {title}
      </Text>
      <Text fontSize="4xl" fontWeight="thin">
        {subtitle}
      </Text>
    </Box>
  );
};
