import React from "react";
import { SortButtonContainer, SortButton } from "./PoemsSortButtonStyles";

type Props = {
  handleSortBy: (sortName: string) => void;
  buttonName: string;
  sortName: string;
  setSelectedQueryName: (sortName: string) => void;
  isActive: boolean;
};

export const PoemsSortButton = ({
  handleSortBy,
  buttonName,
  sortName,
  setSelectedQueryName,
  isActive
}: Props) => {
  return (
    <SortButtonContainer>
      <SortButton
        onClick={() => {
          handleSortBy(sortName);
          setSelectedQueryName(buttonName);
        }}
        isActive={isActive}
      >
        {buttonName}
      </SortButton>
    </SortButtonContainer>
  );
};
