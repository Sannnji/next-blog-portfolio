import Link from "next/link";

import { Box, Flex, Container, Text, Button, Image } from "@chakra-ui/react";

export const BlogPost = ({ post }) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row" }}
      justifyContent="space-between"
      w="100%"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <Box mr={4} w="75%">
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
      <Image
        src={post.frontmatter.image}
        alt=""
        objectFit="contain"
        w="75%"
        boxShadow="lg"
      />
    </Flex>
  );
};
