import styled from "@emotion/styled";

export const SinglePoemContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
export const DeletePoemContainerDiv = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
`;

export const SinglePoemCardPoemTitle = styled.div`
  font-family: "Libre Baskerville", serif;
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

export const PoemsButtonsContainerDiv = styled.div`
  display: flex;
`;
export const PoemLineContainer = styled.div`
  font-size: 22px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    margin-top: 7px;
  }
`;
