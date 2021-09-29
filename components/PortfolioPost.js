import { Flex, Box, Image, Text } from "@chakra-ui/react";

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
        <Link href={`portfolio/${post.slug}`} passHref>
          <Text as="a" fontSize="2xl">{post.frontmatter.name}</Text>
        </Link>

        <Flex mb={4}>
          {post.frontmatter.frameworks.map((element, index) => (
            <Text key={index} mr={2} fontWeight="thin">
              {element}
            </Text>
          ))}
        </Flex>
        <Text>{post.frontmatter.date}</Text>
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
