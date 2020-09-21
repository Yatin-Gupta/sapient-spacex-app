import React from "react";
import ReactDOM from "react-dom";
import Card from "../index";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Card component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card></Card>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Card component renders with className passed as props", () => {
  const { getByTestId } = render(<Card className="h-100"></Card>);
  expect(getByTestId("card")).toHaveClass("h-100");
});

it("Card component matches the snapshot", () => {
  const tree = renderer.create(<Card></Card>).toJSON();
  expect(tree).toMatchSnapshot();
});
