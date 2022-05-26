import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "../../components/Layout";
import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFrontmatterBySlug } from "../../lib/mdx";

export default function PostPage({
  post: {
    frontmatter: { name, date, image, github, link },
    mdxSource,
  },
}) {
  const boxShadow = useColorModeValue("lg", "2xl");

  const TitleBox = () => {
    return (
      <Box
        zIndex={0}
        py={4}
        position="relative"
        bottom={{ base: 10, md: 24, lg: 20 }}
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        textAlign="center"
        borderRadius="lg"
      >
        <Heading>{name}</Heading>
        <Text fontWeight="thin">{date}</Text>
        <Flex
          my={{ base: 4, lg: 0 }}
          mt={{ base: 4, lg: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton as="a" href={github} icon={<FaGithub />} />
          <Divider mx={4} orientation="vertical" height="25px" bg="white" />
          <IconButton as="a" href={link} icon={<FaExternalLinkAlt />} />
        </Flex>
      </Box>
    );
  };

  return (
    <Layout>
      <Box width="100%" mt={{ base: 12, lg: 4 }} zIndex={-1}>
        <Flex justifyContent="center" flexDir="column">
          <Image
            zIndex={0}
            borderColor={useColorModeValue(null, "white")}
            border={useColorModeValue(null, "1px")}
            src={image}
            alt=""
            mb={8}
            borderRadius="lg"
            boxShadow={boxShadow}
          />

          <Box
            bg="white"
            color={"black"}
            boxShadow="2xl"
            zIndex={0}
            mt={{ base: -14, md: -20, lg: -24 }}
            mx={{ base: 2, md: 24 }}
            px={{ base: 4, md: 8, lg: 20 }}
            py={{ base: 4, md: 8, lg: 8 }}
            borderRadius="lg"
          >
            <TitleBox />
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = await getFiles("portfolio");

  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".mdx", ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getFrontmatterBySlug(slug, "portfolio");

  return {
    props: {
      post,
    },
  };
}
