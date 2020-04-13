import React from "react";
import { PoemsSortButton } from "../../components/PoemsSortButton/PoemsSortButton";
import {
  SortMenuContainer,
  SortMenuTitle,
  SortMenuListContainer,
  SortMenuNewPoemButton,
} from "./PoemsSortMenuStyles";
import { Button } from "antd";
import { FiFilePlus } from "react-icons/fi";
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
        {windowWidth && windowWidth.width && windowWidth.width > 600 ? (
          <SortMenuNewPoemButton onClick={() => setOpenNewPoemModal(true)}>
            Generate New Poem
            <FiFilePlus
              size="1.3em"
              color="white"
              style={{ marginLeft: 5, paddingBottom: 2 }}
            ></FiFilePlus>
          </SortMenuNewPoemButton>
        ) : null}
      </SortMenuListContainer>
    </SortMenuContainer>
  );
};
