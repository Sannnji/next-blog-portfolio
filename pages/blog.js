import { PageTitle } from "../components/PageTitle";
import { BlogPost } from "../components/BlogPost";
import { getAllFrontmatter } from "../lib/mdx";

export default function Blog({ posts }) {
  const title = "Blogs 📑";
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
  const posts = await getAllFrontmatter("blog");

  return {
    props: {
      posts,
    },
  };
}
