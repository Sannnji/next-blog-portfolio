import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";

import { PageTitle } from "../components/PageTitle";
import { Section } from "../components/Section";

export default function Home() {
  const title = "Hello World, I'm James!";
  const subtitle = "I'm a full-stack MERN developer based in Rochester, NY";

  const aboutme1 = `Hi! I'm James Ji, a full-stack web developer based in Rochester, NY.
  After graduating high school I took a step back from education and
  worked as a opening/closing manager at a pizzaria for two years. I
  ended up returning to education evidently and ultimatly decided to
  become a web developer after I fell in love with coding. Upon making
  that decision I enrolled and finished a udemy course on full-stack web
  development by Angela Yu, and a full-stack bootcamp offered by the
  loving NuCamp community.`;
  const aboutme2 = `When I'm not coding and learning new technologies, you can find me
  gaming / streaming, drawing, cooking, finding ways to improve myself,
  and watching the Harry Potter series for the millionth time.`;

  return (
    <>
      <Head>
        <title>Blog Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={title} subtitle={subtitle} my="7%"/>
      <Section heading="About Me">
        <Text>{aboutme1}</Text>
        <br />
        <Text>{aboutme2}</Text>
      </Section>
    </>
  );
}
