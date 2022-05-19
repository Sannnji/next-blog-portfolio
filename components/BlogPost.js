import Link from "next/link";

import { Box, Heading, Text } from "@chakra-ui/react";

export const BlogPost = ({ post }) => {

  return (
    <Box
      bg="rgba(255,255,255, 0.2)"
      w="100%"
      mb={2}
      p={8}
      boxShadow="xl"
      borderRadius="lg"
    >
      <Link href={`blog/${post.slug}`} passHref>
        <Heading as="a" fontSize="2xl" _hover={{ color: "#53E4C1" }}>
          {post.frontmatter.title}
        </Heading>
      </Link>

      <Text mb={4} color="#9B9B9B">
        {post.frontmatter.date}
      </Text>
      <Text>{post.preview}</Text>
    </Box>
  );
};
