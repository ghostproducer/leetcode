// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let sortedArray = nums.sort();

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true;
    }
  }

  return false;
};
