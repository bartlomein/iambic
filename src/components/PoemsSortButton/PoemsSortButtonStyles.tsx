import styled from "@emotion/styled";

type ButtonProps = {
  isActive: boolean;
};

export const SortButtonContainer = styled.div``;
export const SortButton = styled.div<ButtonProps>`
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.isActive ? "#fffc00" : "white")};
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;
