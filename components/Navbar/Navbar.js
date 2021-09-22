import Link from "next/link";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export const Navbar = () => {
  const NavColor = useColorModeValue("white", "#1A202C");

  return (
    <Flex width="100%" position="fixed" top={0} zIndex={1} bg={NavColor}>
      <Flex width="100%" px="13%" py={8} justifyContent="space-between">
        <Link href="/" passHref>
          <Text fontSize="xl" fontFamily="Pacifico, cursive">
            James Ji
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
