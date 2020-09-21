import React from "react";
import ReactDOM from "react-dom";
import Loader from "../index";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Loader component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Loader component should renders when show props is set", () => {
  const { getByTestId } = render(<Loader show={true} />);
  expect(getByTestId("loader")).toHaveClass("loader");
});

it("Loader component should not renders when show props is unset", () => {
  const { queryByTestId } = render(<Loader show={false} />);
  expect(queryByTestId("loader")).toBeNull();
});

it("Loader component matches the snapshot", () => {
  const tree = renderer.create(<Loader show={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
