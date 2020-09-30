import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  test("renders LandingPage component", () => {
    render(<LandingPage />);
  });
});
