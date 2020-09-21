import React from "react";
import ReactDOM from "react-dom";
import Button from "../index";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Button component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button>Click Me</Button>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Button component renders with isactive status passed as props", () => {
  const { getByTestId } = render(<Button isactive={true}></Button>);
  expect(getByTestId("button")).toHaveAttribute("aria-pressed", "true");
});

it("Button component matches the snapshot", () => {
  const tree = renderer.create(<Button></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
