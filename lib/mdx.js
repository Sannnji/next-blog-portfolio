import fs from "fs";
import path from "path";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";

import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "posts", type));
}

export async function getAllFrontmatter(type) {
  const files = fs.readdirSync(path.join(root, "posts", type));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(root, "posts", type, filename),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const preview = content.substring(0, 240) + "...";
    return {
      slug,
      frontmatter,
      preview,
    };
  });

  return posts;
}

export async function getFrontmatterBySlug(slug, type) {
  const markdownWithMeta = fs.readFileSync(
    path.join(root, "posts", type, slug + ".mdx"),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    frontmatter,
    mdxSource,
    slug,
  };
}
