import { Box } from "@chakra-ui/react";
import PageTranstion from "./framer/pageTransition";

export const Layout = ({ children }) => {
  return (
    <PageTranstion>
      <Box px={{ base: "4%", md: "4%", lg: "13%" }} py="7%">
        {children}
      </Box>
    </PageTranstion>
  );
};
