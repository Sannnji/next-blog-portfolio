import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";

import Link from "next/link";

export const PortfolioPost = ({ post }) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row" }}
      justifyContent="space-between"
      w="100%"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <Box mr={4} w="75%">
        <Text fontSize="xl">{post.frontmatter.name}</Text>

        <Flex mb={2}>
          {post.frontmatter.frameworks.map((element, index) => (
            <Text key={index} mr={2} fontWeight="thin">
              {element}
            </Text>
          ))}
        </Flex>
        <Text>{post.frontmatter.date}</Text>
        <Text>{post.preview}</Text>
        <Link href={`portfolio/${post.slug}`} passHref>
          <Button as="a" my={4}>
            Read More
          </Button>
        </Link>
      </Box>
      <Image src={post.frontmatter.image} alt="" objectFit="contain" w="75%" />
    </Flex>
  );
};
