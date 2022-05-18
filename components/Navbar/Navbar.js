import Link from "next/link";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export const Navbar = () => {
  const NavColor = useColorModeValue("#FFFCF9", "#1A202C");

  return (
    <Flex width="100%" position="fixed" top={0} zIndex={1} bg={NavColor}>
      <Flex
        width="100%"
        px={{ base: "4%", md: "4%", lg: "13%" }}
        my={4}
        justifyContent="space-between"
        align="center"
      >
        <Link href="/" passHref>
          <Text
            fontSize="xl"
            fontFamily="Pacifico, cursive"
            _hover={{ color: "teal", cursor: "pointer" }}
          >
            James
          </Text>
        </Link>

        <Flex align="center">
          <NavLink>
            <Link href="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link href="/portfolio">Portfolio</Link>
          </NavLink>
          <NavLink>
            <Link href="/blog">Blog</Link>
          </NavLink>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};
