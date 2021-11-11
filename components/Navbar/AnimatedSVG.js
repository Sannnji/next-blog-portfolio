import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AnimatedSVG({ isDarkMode }) {
  const svgColor = useColorModeValue("#FFEF78", "white");

  const variants = {
    sun: {
      r: 10,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },

    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
  };

  const transition = { type: "spring" };

  const { transform, opacity, cx, cy, r } =
    variants[isDarkMode ? "moon" : "sun"];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ transform }}
      color={svgColor}
      style={{ cursor: "pointer" }}
      transition={transition}
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <motion.circle
          cx="12"
          cy="4"
          r="9"
          fill="black"
          animate={{ cx, cy }}
          transition={transition}
        />
      </mask>

      <motion.circle
        fill={svgColor}
        cx="12"
        cy="12"
        r="9"
        mask="url(#mask)"
        animate={{ r }}
        transition={transition}
      />
      <motion.g
        stroke="currentColor"
        animate={{ opacity }}
        transition={transition}
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.g>
    </motion.svg>
  );
}
