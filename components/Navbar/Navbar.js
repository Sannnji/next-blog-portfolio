import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      px="13%"
      py={8}
    >
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
          <Link href="/Blog">Blog</Link>
        </NavLink>
      </Flex>
    </Flex>
  );
};
