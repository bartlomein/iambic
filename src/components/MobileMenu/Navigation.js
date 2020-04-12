import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { AuthContext } from "../../context/auth";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen, isOpen }) => {
  const { user, logout } = useContext(AuthContext);
  const itemIds = [0, 1, 2, 3, 4];
  const hasUser = user ? true : false;
  const links = [
    { name: "Home", link: "/" },
    { name: "Poems", link: "/poems" },
    { name: "Login", link: "/login", hasUser: !hasUser, loginBased: true },
    {
      name: "Register",
      link: "/register",
      hasUser: !hasUser,
      loginBased: true,
    },
    { name: "Logout", hasUser: hasUser, logout: true },
    { name: "Contact", link: "https://twitter.com/bartlomein", external: true },
  ];
  return (
    <>
      {isOpen && (
        <motion.ul variants={variants} style={{ zIndex: 999 }}>
          {itemIds.map((i) => (
            <MenuItem
              i={i}
              key={i}
              link={links[i]}
              toggleOpen={toggleOpen}
              logout={logout}
            />
          ))}
        </motion.ul>
      )}
    </>
  );
};
