import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const CodeBlock = (props) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.600")}
      borderRadius="lg"
      p={4}
      {...props}
    />
  );
};

const MDXComponents = {
  h1: (props) => (
    <Heading as="h1" size="xl" my={4} fontWeight="semibold" {...props} />
  ),
  h2: (props) => (
    <Heading as="h2" size="lg" my={4} fontWeight="semibold" {...props} />
  ),
  h4: (props) => (
    <Heading as="h4" size="md" my={4} fontWeight="semibold" {...props} />
  ),
  p: (props) => <Text my={2} {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  strong: (props) => <span style={{ color: "#4FD1C5" }} {...props} />,
  code: (props) => <CodeBlock {...props} />,
};

export default MDXComponents;
