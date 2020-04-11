import styled from "@emotion/styled";

export const GeneratedPoemCardContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  height: auto;
  max-width: 1000px;
`;

export const GeneratedPoemLoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const GeneratedPoemCardLineContainer = styled.div`
  font-size: 22px;
  margin-top: 5px;
  line-height: 22px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
export const GeneratedPoemCardPoemContainer = styled.div``;
export const GeneratedPoemCardButtonContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    margin-top: 30px;
  }
`;
export const GeneratedPoemCardSingleButton = styled.div`
  margin: 0px 10px;
`;

export const GeneratedPoemCardTitleContainer = styled.div`
  font-size: 24px;
  line-height: 26px;
  font-family: "Libre Baskerville", serif;
`;
