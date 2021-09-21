import "../styles/globals.css";

import { Navbar } from "../components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
