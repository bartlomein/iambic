import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PoemsSortButton } from "./PoemsSortButton";

Enzyme.configure({ adapter: new Adapter() });

describe("Sort Button", () => {
  it("should render button with the right text", () => {
    const wrapper = shallow(
      <PoemsSortButton
        buttonName={"Most Likes"}
        sortName={"FETCH_POST_QUERY_SORTED"}
        handleSortBy={jest.fn()}
      />
    );
    expect(wrapper.text()).toBe("Most Likes");
  });
});
