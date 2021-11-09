import { motion } from "framer-motion";

const anim = {
  hidden: {
    opacity: 0,
    x: "-200",
  },
  visable: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-200",
  },
};

export default function PageTranstion({ children }) {
  return (
    <motion.div
      variants={anim}
      initial="hidden"
      animate="visable"
      exit="exit"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.div>
  );
}
