import styled from "@emotion/styled";

type ButtonProps = {
  isActive: string;
};

export const SortButtonContainer = styled.div`
  margin: 0px 10px;
`;
export const SortButton = styled.div<ButtonProps>`
  cursor: pointer;
  color: ${(props: ButtonProps) => props.isActive};
  font-size: 20px;
  font-weight: bold;
`;
