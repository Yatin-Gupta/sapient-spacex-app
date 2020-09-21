import React from "react";
import ReactDOM from "react-dom";
import RulerHeading from "../index";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("RulerHeading component renders without crashing", () => {
  const div = document.createElement("div");
  const testHeading = "Test Cases";
  ReactDOM.render(<RulerHeading text={testHeading} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("RulerHeading component renders with text attribute passed as props", () => {
  const testHeading = "Test Cases";
  const { getByTestId } = render(<RulerHeading text={testHeading} />);
  expect(getByTestId("heading")).toHaveTextContent(testHeading);
});

it("RulerHeading component matches the snapshot", () => {
  const testHeading = "Test Cases";
  const tree = renderer.create(<RulerHeading text={testHeading} />).toJSON();
  expect(tree).toMatchSnapshot();
});
