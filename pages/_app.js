import "../styles/globals.css";

import { Navbar } from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
