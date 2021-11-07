import Link from "next/link";
import {
  Flex,
  Box,
  Image,
  Text,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const PortfolioPost = ({ post }) => {
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      justifyContent="space-between"
      w="100%"
      my={16}
    >
      <Box mr={4} w="75%">
        <Link href={`portfolio/${post.slug}`} passHref>
          <Text as="a" fontSize="2xl" _hover={{ color: "teal" }}>
            {post.frontmatter.name}
          </Text>
        </Link>
        <Text>{post.frontmatter.date}</Text>
        <Flex mb={4}>
          <Text>
            {post.frontmatter.frameworks.map((element, index) => {
              if (index === post.frontmatter.frameworks.length - 1) {
                return  element ;
              } else {
                return  element  + " | ";
              }
            })}
          </Text>
        </Flex>

        <Text>{post.preview}</Text>

        <Flex
          my={{ base: 4, lg: 0 }}
          mt={{ base: 4, lg: 4 }}
          alignItems="center"
        >
          <IconButton
            as="a"
            href={post.frontmatter.github}
            icon={<FaGithub />}
          />
          <Divider mx={4} orientation="vertical" height="25px" bg="white" />
          <IconButton
            as="a"
            href={post.frontmatter.link}
            icon={<FaExternalLinkAlt />}
          />
        </Flex>
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
