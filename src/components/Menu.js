import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div onClick={()=>setMenuIsOpen(!menuIsOpen)}>MENU BUTTON</div>
      <div>iambic.dev</div>
      <Link to="/">Home</Link>

      {user ? (
        <div onClick={logout}>Logout</div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
      <div>Contact</div>
    </div>
  );
};

export default Menu;
