import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

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
