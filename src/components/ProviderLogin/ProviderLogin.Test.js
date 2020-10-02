import React from "react";
import { render } from "@testing-library/react";
import ProviderLogin from './ProviderLogin';

describe("ProviderLogin", () => {
  test("renders ProviderLogin component", () => {
    render(<ProviderLogin />);
  });
});
