import Link from "next/link";

import { Box, Text, Button } from "@chakra-ui/react";

export const BlogPost = ({ post }) => {
  return (
    <>
      <Box>
        <Text>{post.frontmatter.title}</Text>
        <Text>{post.frontmatter.date}</Text>
        <Link href={`blog/${post.slug}`} passHref>
          <Button as="a" my={4}>
            Read More
          </Button>
        </Link>
      </Box>
    </>
  );
};
