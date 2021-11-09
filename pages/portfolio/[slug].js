import { Box, Text, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "../../components/Layout";
import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFrontmatterBySlug } from "../../lib/mdx";

export default function PostPage({
  post: {
    frontmatter: { name, date, image },
    mdxSource,
  },
}) {
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Layout>
      <Box width="100%" mt={{ base: 12, lg: 4 }}>
        <Box position="relative">
          <Box
            position="absolute"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            width="80%"
            bottom={{ base: 5, lg: 20 }}
            pl={8}
            py={4}
          >
            <Heading fontWeight="semi-bold">{name}</Heading>
            <Text>{date}</Text>
          </Box>

          <Image
            src={image}
            alt=""
            mb={8}
            borderRadius="lg"
            boxShadow={boxShadow}
          />
        </Box>

        <Box
          bg="#EDF2F7"
          color="black"
          px={{ base: 4, lg: 20 }}
          py={{ base: 4, lg: 8 }}
          borderRadius="lg"
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </Box>
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
