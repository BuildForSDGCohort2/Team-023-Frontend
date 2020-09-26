import React from "react";
import { render } from "@testing-library/react";
import PageHeading from "./PageHeading";

describe("PageHeading", () => {
  test("renders PageHeading component", () => {
    render(<PageHeading />);
  });
});
