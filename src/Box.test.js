import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

test("ok: renders without crashing", function () {
  render(<Box />);
});

test("ok: matches snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

//adds new box
function addBox(boxList, height = "20", width = "20", color = "red") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundInput = boxList.getByLabelText("Color");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add a new box!");
  fireEvent.click(button);
}
