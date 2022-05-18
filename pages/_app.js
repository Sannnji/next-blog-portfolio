import { ChakraProvider } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { prismDarkTheme, prismLightTheme } from "../styles/prism";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode("dark");

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#FFFCF9" : "#1A202C"};
            font-family: 'Sofia', sans-serif
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Footer />
        </GlobalStyle>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
