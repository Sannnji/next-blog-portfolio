import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PageTitle } from "../components/PageTitle";
import { BlogPost } from "../components/BlogPost";

export default function Blog({ posts }) {
  const title = "Blogs";
  const subtitle =
    "musings of my developer journey and some tutorials of technologies I enjoyed using";

  return (
    <>
      <PageTitle title={title} subtitle={subtitle} />

      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts/blog"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts/blog", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
