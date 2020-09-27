import React from "react";
import { render } from "@testing-library/react";
import LoanApplications from "./LoanApplications";

describe("LoanApplications", () => {
  test("renders LoanApplications component", () => {
    render(<LoanApplications />);
  });
});
