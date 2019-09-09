import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Menu = () => {
  const [menuIsOpen, setMenuisOpen] = useState();
  const { user } = useContext(AuthContext);
  // const pathname = window.location.pathname;
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Menu;
