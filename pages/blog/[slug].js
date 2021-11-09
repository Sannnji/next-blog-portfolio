import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "../../components/Layout";
import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFrontmatterBySlug } from "../../lib/mdx";

export default function PostBlogPage({
  post: {
    frontmatter: { title, date },
    mdxSource,
  },
}) {
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Layout>
      <Box width="100%" mt={{ base: 12, lg: 4 }}>
        <Heading fontWeight="semi-bold">{title}</Heading>
        <Text mb={8}>{date}</Text>

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
  const files = await getFiles("blog");

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
  const post = await getFrontmatterBySlug(slug, "blog");

  return {
    props: {
      post,
    },
  };
}
