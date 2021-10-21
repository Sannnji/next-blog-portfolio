import { ChakraProvider } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import { Navbar } from "../components/Navbar/Navbar";
import { Layout } from "../components/Layout";
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
            background: ${colorMode === "light" ? "white" : "#1A202C"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Layout>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </Layout>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
