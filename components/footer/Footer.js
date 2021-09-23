import { Box, Stack, Text } from "@chakra-ui/react";
import { Copyright } from "./Copyright";

import { SocialMediaLinks } from "./SocialMediaLinks";

const Footer = () => (
  <Box
    as="footer"
    id="contact"
    role="contentinfo"
    py={12}
    px={{ base: "4%", lg: "13%" }}
  >
    <Stack direction="row" spacing="4" align="center" justify="space-between">
      <Text>James</Text>
      <SocialMediaLinks />
    </Stack>
    <Copyright alignSelf={{ base: "center", sm: "start" }} />
  </Box>
);

export default Footer;
