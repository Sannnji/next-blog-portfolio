import { ChakraProvider } from "@chakra-ui/react";

import { Navbar } from "../components/Navbar/Navbar";
import { Layout } from "../components/Layout";
import  Footer  from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
