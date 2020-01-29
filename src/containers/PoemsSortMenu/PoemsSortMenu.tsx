import React from "react";
import { PoemsSortButton } from "../../components/PoemsSortButton/PoemsSortButton";
import {
  SortMenuContainer,
  SortMenuTitle,
  SortMenuListContainer
} from "./PoemsSortMenuStyles";

import { sortMenuList } from "../../utils/sortMenuButtonList";

type Props = {
  handleSortBy: () => void;
  setSelectedQueryName: () => void;
  setCurrentOffset: () => void;
  selectedQueryName: string;
};

export const PoemsSortMenu = ({
  handleSortBy,
  setSelectedQueryName,
  selectedQueryName,
  setCurrentOffset
}: Props) => {
  return (
    <SortMenuContainer className="sort-menu-container">
      <SortMenuTitle>Sort By:</SortMenuTitle>
      <SortMenuListContainer>
        {sortMenuList.map(item => (
          <PoemsSortButton
            buttonName={item.buttonName}
            sortName={item.sortName}
            handleSortBy={handleSortBy}
            setSelectedQueryName={setSelectedQueryName}
            setCurrentOffset={setCurrentOffset}
            isActive={selectedQueryName === item.buttonName ? true : false}
          />
        ))}
      </SortMenuListContainer>
    </SortMenuContainer>
  );
};
