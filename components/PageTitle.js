import { Box, Text, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const PageTitle = ({ title, subtitle }) => {
  return (
    <Box width="50%">
      <Text fontSize="5xl" fontWeight="thin">
        {title}
      </Text>
      <Text fontSize="4xl" fontWeight="thin">
        {subtitle}
      </Text>
      <ButtonGroup variant="solid" color="gray.600">
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/jamesji98/"
          aria-label="LinkedIn"
          color="white"
          icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://github.com/Sannnji"
          aria-label="GitHub"
          color="white"
          icon={<FaGithub fontSize="20px" />}
        />
      </ButtonGroup>
    </Box>
  );
};
