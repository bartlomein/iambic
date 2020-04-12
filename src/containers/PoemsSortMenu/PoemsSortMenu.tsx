import React from "react";
import { PoemsSortButton } from "../../components/PoemsSortButton/PoemsSortButton";
import {
  SortMenuContainer,
  SortMenuTitle,
  SortMenuListContainer,
} from "./PoemsSortMenuStyles";
import { Button } from "antd";

import { useWindowSize } from "../../utils/hooks/useWindowSize";

import { sortMenuList } from "../../utils/sortMenuButtonList";

type Props = {
  handleSortBy: (sort: string) => void;
  setSelectedQueryName: (name: string) => void;
  setCurrentOffset: (offset: number) => void;
  setOpenNewPoemModal: (open: boolean) => void;
  selectedQueryName: string;
};

export const PoemsSortMenu = ({
  handleSortBy,
  setSelectedQueryName,
  selectedQueryName,
  setCurrentOffset,
  setOpenNewPoemModal,
}: Props) => {
  const windowWidth = useWindowSize();

  return (
    <SortMenuContainer className="sort-menu-container">
      <SortMenuTitle>Sort By:</SortMenuTitle>
      <SortMenuListContainer>
        {sortMenuList.map((item) => (
          <PoemsSortButton
            buttonName={item.buttonName}
            // @ts-ignore
            sortName={item.sortName}
            handleSortBy={handleSortBy}
            setSelectedQueryName={setSelectedQueryName}
            setCurrentOffset={setCurrentOffset}
            isActive={selectedQueryName === item.buttonName ? true : false}
          />
        ))}
      </SortMenuListContainer>
      {windowWidth && windowWidth.width && windowWidth.width > 600 ? (
        <Button onClick={() => setOpenNewPoemModal(true)}>
          Generate New Poem
        </Button>
      ) : null}
    </SortMenuContainer>
  );
};
