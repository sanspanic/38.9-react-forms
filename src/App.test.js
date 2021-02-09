import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("ok: renders without crashing", function () {
  render(<App />);
});

test("ok: matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
