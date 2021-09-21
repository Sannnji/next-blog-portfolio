import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";

import Link from "next/link";

export const PortfolioPost = ({ post }) => {
  return (
    <Flex>
      <Box w="40%" mr={4}>
        <Text fontSize="xl" mb={4}>
          {post.frontmatter.name}
        </Text>

        <Flex>
          {post.frontmatter.frameworks.map((element, index) => (
            <Text key={index} mr={2} fontWeight="thin">
              {element}
            </Text>
          ))}
        </Flex>
        <Text>{post.frontmatter.date}</Text>
        <Text>{post.frontmatter.description}</Text>
        <Link href={`portfolio/${post.slug}`} passHref>
          <Button as="a" my={4}>
            Read More
          </Button>
        </Link>
      </Box>
      <Image src={post.frontmatter.image} alt="" width="400px" />
    </Flex>
  );
};
