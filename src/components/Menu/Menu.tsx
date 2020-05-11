import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import {
  MenuHeaderContainer,
  HomeButtonContainer,
  EndingItemsContainer,
  LinkContainer,
} from "./MenuStyles";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const windowWidth = useWindowSize();

  return (
    <div>
      {windowWidth && windowWidth.width && windowWidth.width < 600 ? (
        <div style={{ marginBottom: 80 }} className="mobile-menu-container">
          <MobileMenu />
        </div>
      ) : (
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
              <a href="https://twitter.com/bartlomein">contact</a>
            </LinkContainer>
          </EndingItemsContainer>
        </MenuHeaderContainer>
      )}
    </div>
  );
};

export default Menu;
