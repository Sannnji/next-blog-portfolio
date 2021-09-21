import { Box, Text, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const PageTitle = ({ title, subtitle }) => {
  return (
    <Box width={{ base: "80%", md: "65%" }} mb="16%">
      <Text fontSize={{ base: "2xl", md: "4xl" }}>{title}</Text>
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="thin">
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
