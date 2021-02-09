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

//adds new box
function addBox(boxList, height = "20", width = "20", color = "red") {
  const heightInput = boxList.getByLabelText("Height:");
  const widthInput = boxList.getByLabelText("Width:");
  const backgroundInput = boxList.getByLabelText("Color:");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add new");
  fireEvent.click(button);
}

test("ok: can add a new box", function () {
  const boxList = render(<BoxList />);

  // no boxes yet
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);

  // expect to see a box
  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
      width: 20px;
      height: 20px;
      background-color: red;
    `);
  // expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

test("ok: can remove a box", function () {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("X");

  // click the remove button and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
