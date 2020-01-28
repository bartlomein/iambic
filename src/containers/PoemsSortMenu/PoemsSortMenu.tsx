import React from "react";
import { PoemsSortButton } from "../../components/PoemsSortButton/PoemsSortButton";
import { SortMenuContainer } from "./PoemsSortMenuStyles";

import { sortMenuList } from "../../utils/sortMenuButtonList";

type Props = {
  handleSortBy: () => void;
};

export const PoemsSortMenu = ({ handleSortBy }: Props) => {
  return (
    <SortMenuContainer className="sort-menu-container">
      {sortMenuList.map(item => (
        <PoemsSortButton
          buttonName={item.buttonName}
          sortName={item.sortName}
          handleSortBy={handleSortBy}
        />
      ))}
    </SortMenuContainer>
  );
};
