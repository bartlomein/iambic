import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState;
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      TEST
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Menu;
