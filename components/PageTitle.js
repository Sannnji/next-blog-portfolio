import {
  Box,
  Text,
  Heading,
  ButtonGroup,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const PageTitle = ({ title, subtitle }) => {
  const IconColor = useColorModeValue("#1A202C", "white");

  return (
    <Box width={{ base: "80%", md: "65%" }} my={32}>
      <Heading color="#53E4C1">{title}</Heading>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="thin">
        {subtitle}
      </Text>
      <ButtonGroup variant="solid" color="gray.600">
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/jamesji98/"
          aria-label="LinkedIn"
          color={IconColor}
          icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://github.com/Sannnji"
          aria-label="GitHub"
          color={IconColor}
          icon={<FaGithub fontSize="20px" />}
        />
      </ButtonGroup>
    </Box>
  );
};
