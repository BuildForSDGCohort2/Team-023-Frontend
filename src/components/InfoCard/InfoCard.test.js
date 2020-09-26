import React from "react";
import { render } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("InfoCard", () => {
  test("renders InfoCard component", () => {
    render(<InfoCard />);
  });
});
