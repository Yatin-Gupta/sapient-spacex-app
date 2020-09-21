import React from "react";
import ReactDOM from "react-dom";
import ItemImage from "../index";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("ItemImage component renders without crashing", () => {
  const div = document.createElement("div");
  const dummyImageURL = "https://dummyimage.com/qvga";
  ReactDOM.render(<ItemImage src={dummyImageURL} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("ItemImage component renders with src attribute passed as props", () => {
  const dummyImageURL = "https://dummyimage.com/qvga";
  const { getByTestId } = render(<ItemImage src={dummyImageURL} />);
  expect(getByTestId("item-image")).toHaveAttribute("src", dummyImageURL);
});

it("ItemImage component matches the snapshot", () => {
  const dummyImageURL = "https://dummyimage.com/qvga";
  const tree = renderer.create(<ItemImage src={dummyImageURL} />).toJSON();
  expect(tree).toMatchSnapshot();
});
