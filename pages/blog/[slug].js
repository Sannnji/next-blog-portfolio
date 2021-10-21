import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFrontmatterBySlug } from "../../lib/mdx";

export default function PostBlogPage({
  post: {
    frontmatter: { title, date, image },
    mdxSource,
  },
}) {
  return (
    <Box mt={12}>
      <Heading fontWeight="semi-bold">{title}</Heading>
      <Text mb={8}>{date}</Text>
      <Image
        src={image}
        alt=""
        float="right"
        width="450px"
        ml={8}
        boxShadow="lg"
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
