import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import styled from "@emotion/styled";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);

  const MenuHeaderContainer = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    justify-content: space-between;
  `;
  const HomeButtonContainer = styled.div`
    justify-content: flex-start;
  `;
  const EndingItemsContainer = styled.div`
    justify-content: flex-end;
    display:flex;
  `;
  const LinkContainer = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    font-size: 20px;
  `;

  return (
    <div>
      <MenuHeaderContainer>
        <HomeButtonContainer>
          <LinkContainer>
            <Link to="/">iambic.dev</Link>
          </LinkContainer>
        </HomeButtonContainer>
        <EndingItemsContainer>
          {user ? (
            <div onClick={logout}>logout</div>
          ) : (
            <div style={{display:"flex"}}>
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
