import styled from "@emotion/styled";
export const MenuHeaderContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
  align-items:center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  height:80px;
`;
export const HomeButtonContainer = styled.div`
  justify-content: flex-start;
`;
export const EndingItemsContainer = styled.div`
  justify-content: flex-end;
  display: flex;
`;
export const LinkContainer = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  font-size: 22px;
  a,
  div {
    color: blue;
    cursor: pointer;
  }

  a:hover {
    text-decoration: none;
  }
  
`;
