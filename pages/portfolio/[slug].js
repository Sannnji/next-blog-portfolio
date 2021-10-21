import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFrontmatterBySlug } from "../../lib/mdx";

export default function PostPage({
  post: {
    frontmatter: { name, date, image },
    mdxSource,
  },
}) {
  return (
    <Box width="100%">
      <Heading fontWeight="semi-bold">{name}</Heading>
      <Text mb={8}>{date}</Text>
      <Image
        src={image}
        alt=""
        float="right"
        width="450px"
        ml={8}
        boxShadow="lg"
      />
      <MDXRemote {...mdxSource}/>
    </Box>
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
