import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <Flex width="100%" position="fixed" top={0} zIndex={1} bg="#1A202C">
      <Flex width="100%" px="13%" py={8} justifyContent="space-between">
        <Link href="/" passHref>
          <Text fontSize="xl" fontFamily="Pacifico, cursive">
            James Ji
          </Text>
        </Link>

        <Flex>
          <NavLink>
            <Link href="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link href="/portfolio">Portfolio</Link>
          </NavLink>
          <NavLink>
            <Link href="/blog">Blog</Link>
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
