import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

import { AuthContext } from "../../context/auth";

const { user } = AuthContext;
it("displays logout based on if user is there", () => {
  if (user) {
    expect(
      document.querySelector(".menu-ending-items-container").innerHTML
    ).toBe("logout");
  }
});
