import { Layout } from "../components/Layout";
import { PageTitle } from "../components/PageTitle";
import { PortfolioPost } from "../components/PortfolioPost";
import { getAllFrontmatter } from "../lib/mdx";

import { sortByDate } from "../utils/sortByDate";

export default function Portfolio({ posts }) {
  const title = "Projects 🖥️";
  const subtitle =
    "A selection of my favorite projects that I've worked on during my developer career";

  return (
    <Layout>
      <PageTitle title={title} subtitle={subtitle} />

      {posts.map((post, index) => (
        <PortfolioPost key={index} post={post} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFrontmatter("portfolio");

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
