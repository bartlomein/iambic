import styled from "@emotion/styled";
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoginCardContainer = styled.div`
  max-width: 100%;
  width: 60%;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    width: 80%;
    margin-top: 70px;
  }
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0px;
`;

export const WrongPasswordDiv = styled.div``;
export const UserNotFoundDiv = styled.div``;
