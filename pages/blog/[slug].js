import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { Box, Text, Heading } from "@chakra-ui/react";

const Highlight = ({ text }) => (
  <span style={{ color: "#4FD1C5" }}>{text}</span>
);

const components = { Highlight };

export default function PostBlogPage({
  frontmatter: { title, date },
  mdxSource,
}) {
  return (
    <Box>
      <Heading fontWeight="semi-bold">{title}</Heading>
      <Text mb={8}>{date}</Text>
      <MDXRemote {...mdxSource} components={components} />
    </Box>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/blog"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts/blog", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
    },
  };
}
