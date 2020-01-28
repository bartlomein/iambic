import React from "react";
import { SortButtonContainer, SortButton } from "./PoemsSortButtonStyles";

type Props = {
  handleSortBy: (sortName: string) => void;
  buttonName: string;
  sortName: string;
};

export const PoemsSortButton = ({
  handleSortBy,
  buttonName,
  sortName
}: Props) => {
  return (
    <SortButtonContainer>
      <SortButton onClick={() => handleSortBy(sortName)}>
        {buttonName}
      </SortButton>
    </SortButtonContainer>
  );
};
