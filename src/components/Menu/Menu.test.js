import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

import { AuthContext } from "../../context/auth";

const { user } = AuthContext;
it("displays right based on if user is there", () => {
    if (user) {
        expect(document.querySelector("."));
    }
});
