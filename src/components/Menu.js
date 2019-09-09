import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div onClick={() => setMenuIsOpen(!menuIsOpen)}>MENU BUTTON</div>
      <div>iambic.dev</div>
      {menuIsOpen ? (
        <div>
          <Link to="/">Home</Link>

          {user ? (
            <div onClick={logout}>Logout</div>
          ) : (
            <div>
              <div>
                <Link to="/login">Login</Link>
              </div>
              <div>
                <Link to="/register">Register</Link>
              </div>
            </div>
          )}
          <div>Contact</div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
