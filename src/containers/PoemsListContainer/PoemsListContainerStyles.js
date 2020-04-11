import styled from "@emotion/styled";
export const PoemsListStyleContainer = styled.div`
  margin: 0 auto;
`;

export const PoemsListGetMoreContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const PoemsListNewPoemButtonContainer = styled.div`
  position: absolute;
  top: 27px;
  right: 19px;

  button {
    color: white;
    background: #e43a15; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #e65245,
      #e43a15
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #e65245,
      #e43a15
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
