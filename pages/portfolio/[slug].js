import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

export default function PostPage({
  frontmatter: { name, date, image },
  content,
  slug,
}) {
  return (
    <Box mt="4%">
      <Heading fontWeight="semi-bold" mb={4}>
        {name}
      </Heading>
      <Text>{date}</Text>
      <Image src={image} alt="" float="right" width="450px" />

      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </Box>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/portfolio"));

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
    path.join("posts/portfolio", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
