import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen }) => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} link={links[i]} toggleOpen={toggleOpen} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
const links = [
  { name: "Home", link: "/" },
  { name: "Poems", link: "/poems" },
];
