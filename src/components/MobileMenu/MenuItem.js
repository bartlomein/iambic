import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, link, toggleOpen }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const { user, logout } = useContext(AuthContext);
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleOpen}
      style={{ fontSize: 40 }}
    >
      {link && link.external === true ? (
        <a href={link.link} target="_blank">
          {link.name}
        </a>
      ) : link.logout === true && link.hasUser === true ? (
        <div onClick={logout} style={{ color: "#1890ff" }}>
          Logout
        </div>
      ) : link.loginBased === true && link.hasUser === true ? (
        <Link to={link && link.link}>{link && link.name}</Link>
      ) : link.regular === true ? (
        <Link to={link && link.link}>{link && link.name}</Link>
      ) : null}
    </motion.li>
  );
};
