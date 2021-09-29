import Link from "next/link";

import { Box, Flex, Text, Image } from "@chakra-ui/react";

export const BlogPost = ({ post }) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row" }}
      justifyContent="space-between"
      w="100%"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <Box mr={4} w="75%">
        <Link href={`blog/${post.slug}`} passHref>
          <Text as="a" fontSize="2xl">
            {post.frontmatter.title}
          </Text>
        </Link>

        <Text mt={4}>{post.frontmatter.date}</Text>
        <Text>{post.preview}</Text>

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
