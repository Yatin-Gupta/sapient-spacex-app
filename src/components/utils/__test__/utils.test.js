import utils from "../index";
import "@testing-library/jest-dom/extend-expect";

it("Get array of range of numbers between min and max in grouped by manner", () => {
  const min = 1;
  const max = 5;
  const groupByRange = 2;
  const result = utils.range(min, max, groupByRange);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});
