import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import {
  MenuHeaderContainer,
  HomeButtonContainer,
  EndingItemsContainer,
  LinkContainer
} from "./MenuStyles";
import { MobileMenu } from "../MobileMenu/MobileMenu";
const Menu = windowWidth => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {windowWidth.width < 600 && <MobileMenu />}
      <MenuHeaderContainer>
        <HomeButtonContainer>
          <LinkContainer>
            <Link to="/">iambic.dev</Link>
          </LinkContainer>
          <LinkContainer>
            <Link to="/poems">poems</Link>
          </LinkContainer>
        </HomeButtonContainer>

        <EndingItemsContainer className="menu-ending-items-container">
          {user ? (
            <LinkContainer>
              <div onClick={logout}>logout</div>
            </LinkContainer>
          ) : (
            <div style={{ display: "flex" }}>
              <LinkContainer>
                <Link to="/login">login</Link>
              </LinkContainer>
              <LinkContainer>
                <Link to="/register">register</Link>
              </LinkContainer>
            </div>
          )}
          <LinkContainer>
            <Link to="https://twitter.com/bartlomein">contact</Link>
          </LinkContainer>
        </EndingItemsContainer>
      </MenuHeaderContainer>
    </div>
  );
};

export default Menu;
