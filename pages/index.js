import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";

import { PageTitle } from "../components/PageTitle";

export default function Home() {
  const title = "Hello World, I'm James!";
  const subtitle = "I'm a full-stack MERN developer based in Rochester, NY";

  return (
    <>
      <Head>
        <title>Blog Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={title} subtitle={subtitle} />
    </>
  );
}
