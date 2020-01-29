import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PoemsSortMenu } from "./PoemsSortMenu";
import { sortMenuList } from "../../utils/sortMenuButtonList";

Enzyme.configure({ adapter: new Adapter() });

describe("Sort Menu", () => {
  it("should render the right amount of buttons", () => {
    const wrapper = shallow(<PoemsSortMenu handleSortBy={jest.fn()} />);

    const menuContainer = wrapper.find(".sort-menu-container");

    expect(menuContainer.children()).toHaveLength(sortMenuList.length - 1);
  });
});
