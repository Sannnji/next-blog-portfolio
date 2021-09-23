import Link from "next/link";

import { Box, Text, Button, Flex, Image } from "@chakra-ui/react";

export const BlogPost = ({ post }) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row" }}
      maxW="800px"
      maxH="250px"
    >
      <Box mr={4} maxW="300px">
        <Text fontSize="xl" mb={2}>
          {post.frontmatter.title}
        </Text>
        <Text>{post.frontmatter.date}</Text>
        <Text>{post.preview}</Text>
        <Link href={`blog/${post.slug}`} passHref>
          <Button as="a" my={4}>
            Read More
          </Button>
        </Link>
      </Box>
      <Image src={post.frontmatter.image} alt="" width="100%" />
    </Flex>
  );
};
