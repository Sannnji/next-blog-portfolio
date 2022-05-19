import Link from "next/link";
import {
  Flex,
  Stack,
  Heading,
  Image,
  Text,
  IconButton,
  Divider,
} from "@chakra-ui/react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const PortfolioPost = ({ post }) => {
  return (
    <Stack
      borderRadius="lg"
      w={{ sm: "100%", md: "auto" }}
      direction={{ base: "column", md: "row" }}
      bg="rgba(255,255,255, 0.2)"
      boxShadow={"2xl"}
      padding={4}
      mt={20}
    >
      <Flex flex="1" _hover={{ cursor: "pointer" }}>
        <Link href={`portfolio/${post.slug}`} passHref>
          <Image
            objectFit="cover"
            align={"0px"}
            boxSize="100%"
            src={post.frontmatter.image}
            alt=""
          />
        </Link>
      </Flex>

      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        p={4}
        pt={2}
      >
        {
          // Title
        }
        <Link href={`portfolio/${post.slug}`} passHref>
          <Heading
            as="a"
            fontSize={{ base: "20px", lg: "32px" }}
            _hover={{ color: "teal" }}
          >
            {post.frontmatter.name}
          </Heading>
        </Link>
        {
          // Date
        }
        <Text color="#9B9B9B">{post.frontmatter.date}</Text>
        {
          // FrameWorks
        }
        <Flex mb={4}>
          <Text color="#9B9B9B">
            {post.frontmatter.frameworks.map((element, index) => {
              if (index === post.frontmatter.frameworks.length - 1) {
                return element;
              } else {
                return element + " | ";
              }
            })}
          </Text>
        </Flex>

        {
          // Post Preview
        }
        <Text>{post.preview}</Text>

        {
          // Buttons
        }
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
      </Stack>
    </Stack>
  );
};
