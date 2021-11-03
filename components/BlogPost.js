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
      my={16}
    >
      <Box mr={4} mb={{ base: 4, lg: 0 }} w="75%">
        <Link href={`blog/${post.slug}`} passHref>
          <Text as="a" fontSize="2xl" _hover={{ color: "teal" }}>
            {post.frontmatter.title}
          </Text>
        </Link>

        <Text mb={4}>{post.frontmatter.date}</Text>
        <Text>{post.preview}</Text>
      </Box>

      <Image
        src={post.frontmatter.image}
        alt=""
        w="75%"
        height="fit-content"
        objectFit="contain"
        boxShadow={boxShadow}
      />
    </Flex>
  );
};
