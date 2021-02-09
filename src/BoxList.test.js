import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("ok: renders without crashing", function () {
  render(<BoxList />);
});

test("ok: matches spanshop", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
