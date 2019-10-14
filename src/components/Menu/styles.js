import styled from '@emotion/styled';
export const MenuHeaderContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Galada', cursive;

  font-weight: 600;
  height: 80px;
  z-index: 999;
`;
export const HomeButtonContainer = styled.div`
  justify-content: flex-start;
`;
export const EndingItemsContainer = styled.div`
  justify-content: flex-end;
  display: flex;
`;
export const LinkContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 40px;
  a,
  div {
    color: #ff6f59;
    cursor: pointer;
  }

  a:hover {
    text-decoration: none;
  }
`;
