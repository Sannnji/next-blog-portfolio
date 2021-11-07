import Link from "next/link";

import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";

export const BlogPost = ({ post }) => {
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      justifyContent="space-between"
      w="100%"
      mb={2}
    >
      <Box bg="#EDF2F7" borderRadius="lg" p={4}>
        <Link href={`blog/${post.slug}`} passHref>
          <Text as="a" fontSize="2xl" _hover={{ color: "teal" }}>
            {post.frontmatter.title}
          </Text>
        </Link>

        <Text mb={4}>{post.frontmatter.date}</Text>
        <Text>{post.preview}</Text>
      </Box>
    </Flex>
  );
};
