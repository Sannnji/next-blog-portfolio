import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/react";

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  strong: (props) => <span style={{ color: "#4FD1C5" }} {...props} />,
  code: (props) => <Box bg="gray.600" border="1px" borderRadius="lg" p={4} {...props}/>
};

export default MDXComponents;
