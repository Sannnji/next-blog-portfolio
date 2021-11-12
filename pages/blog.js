import { SimpleGrid } from "@chakra-ui/layout";

import { Layout } from "../components/Layout";
import { PageTitle } from "../components/PageTitle";
import { BlogPost } from "../components/BlogPost";
import { getAllFrontmatter } from "../lib/mdx";

import { sortByDate } from "../utils/sortByDate";

export default function Blog({ posts }) {
  const title = "Blogs 📑";
  const subtitle =
    "musings of my developer journey and some tutorials of technologies I enjoyed using";

  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFrontmatter("blog");

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
