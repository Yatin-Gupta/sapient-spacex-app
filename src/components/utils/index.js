/**
 * Returns the range from min to max in groups
 * @param {number} min Minimum number of range
 * @param {number} max Maximum number of range
 * @param {number} group Order by which number should be grouped
 * For Eg: for min=1, max=5, group=2, it returns [[1,2],[3,4],[5]]
 */
function range(min, max, group = 2) {
  const arr = [];
  let groupSet = [],
    j = 0;
  for (let i = min; i <= max; ++i, ++j) {
    if (j < group) {
      groupSet.push(i);
    } else {
      arr.push(groupSet);
      groupSet = [i];
      j = 0;
    }
  }
  if (j > -1 && j < group) {
    // Add the remaining groupset value
    arr.push(groupSet);
  }
  return arr;
}

export default {
  range,
};
