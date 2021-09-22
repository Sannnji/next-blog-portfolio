import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import { Box, Text } from "@chakra-ui/react";

export default function PostBlogPage({
  frontmatter: { title, date },
  content,
  slug,
}) {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
