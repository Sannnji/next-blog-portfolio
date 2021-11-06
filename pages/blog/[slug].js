import { Box, Text, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFrontmatterBySlug } from "../../lib/mdx";

export default function PostBlogPage({
  post: {
    frontmatter: { title, date, image },
    mdxSource,
  },
}) {
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Box width="100%" mt={12}>
      <Heading fontWeight="semi-bold">{title}</Heading>
      <Text mb={8}>{date}</Text>
      <Image
        src={image}
        alt=""
        float="right"
        width="400px"
        ml={12}
        mb={8}
        boxShadow={boxShadow}
      />

      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Box>
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
