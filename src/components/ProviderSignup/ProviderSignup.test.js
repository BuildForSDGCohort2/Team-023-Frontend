import React from "react";
import { render } from "@testing-library/react";
import ProviderSignup from './ProviderSignup';

describe("ProviderSignup", () => {
  test("renders ProviderSignup component", () => {
    render(<ProviderSignup />);
  });
});
