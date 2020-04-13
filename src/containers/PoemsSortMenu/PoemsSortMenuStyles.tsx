import styled from "@emotion/styled";
export const SortMenuContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  background: #642b73; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(90, 97, 105, 0.1) 0px 0.46875rem 2.1875rem,
    rgba(90, 97, 105, 0.1) 0px 0.9375rem 1.40625rem,
    rgba(90, 97, 105, 0.12) 0px 0.25rem 0.53125rem,
    rgba(90, 97, 105, 0.1) 0px 0.125rem 0.1875rem;
  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 20px;
  }
`;
export const SortMenuTitle = styled.div`
  font-size: 20px;
  color: black;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
export const SortMenuListContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SortMenuNewPoemButton = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
