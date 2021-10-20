import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { Text } from "@chakra-ui/react";

import { PageTitle } from "../components/PageTitle";
import { Section } from "../components/Section";
import { BlogPost } from "../components/BlogPost";
import { PortfolioPost } from "../components/PortfolioPost";

export default function Home({ blog, portfolio }) {
  const title = "Hello World, I'm James 👾";
  const subtitle = "I'm a full-stack MERN developer based in Rochester, NY";

  const aboutme1 = `Hi! I'm James Ji, a full-stack web developer based in Rochester, NY. After 
  graduating high school I took a step back from education and worked as an opening/closing manager 
  at a pizzeria for two years. I ended up returning to education evidently and ultimately decided to 
  become a web developer after I fell in love with coding. Upon making that decision, I enrolled and 
  finished a Udemy course on full-stack web development by Angela Yu, and a full-stack boot camp 
  offered by the loving NuCamp community.`;

  const aboutme2 = `When I'm not coding and learning new technologies, you can find me gaming/streaming, drawing, 
  reading mangas, cooking, finding ways to improve myself, and watching the Harry Potter series for the millionth time.`;

  return (
    <>
      <Head>
        <title>Blog Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={title} subtitle={subtitle} my="7%" />
      <Section heading="About Me">
        <Text>{aboutme1}</Text>
        <br />
        <Text>{aboutme2}</Text>
      </Section>

      <Section heading="Recent Blogs">
        {blog.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </Section>

      <Section heading="Recent Projects">
        {portfolio.map((post, index) => (
          <PortfolioPost key={index} post={post} />
        ))}
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const portfolioFiles = fs.readdirSync(path.join("posts/portfolio"));

  const portfolioPosts = portfolioFiles.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts/portfolio", filename),
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

  const blogFiles = fs.readdirSync(path.join("posts/blog"));

  const blogPosts = blogFiles.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts/blog", filename),
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

  return {
    props: {
      portfolio: portfolioPosts,
      blog: blogPosts,
    },
  };
}
