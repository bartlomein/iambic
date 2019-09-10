import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import styled from '@emotion/styled'

const Menu = () => {
 
  const { user, logout } = useContext(AuthContext);

  const MenuHeaderContainer = styled.div`
  display:flex;
  max-width:100%;
  width:100%;

  `

  return (
    <div>
     
    
      
        <MenuHeaderContainer>
          <Link to="/">iambic.dev</Link>

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
      </MenuHeaderContainer>
   
    </div>
  );
};

export default Menu;
