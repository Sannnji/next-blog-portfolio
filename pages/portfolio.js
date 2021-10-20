import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PageTitle } from "../components/PageTitle";
import { PortfolioPost } from "../components/PortfolioPost";

export default function Portfolio({ posts }) {
  const title = "Projects 🖥️";
  const subtitle =
    "A selection of my favorite projects that I've worked on during my developer career";

  return (
    <>
      <PageTitle title={title} subtitle={subtitle} />

      {posts.map((post, index) => (
        <PortfolioPost key={index} post={post} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts/portfolio"));

//   console.log(files);

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts/portfolio", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    const preview = content.substring(0, 240) + "..."
    return {
      slug,
      frontmatter,
      preview
    };
  });

//   console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
