// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
//   let sumArray = nums[0];
  let subArray = [];

  for (let i = 0; i < nums.length; i++) {

      if (sumOfArray(nums.splice(0,i)) > sumOfArray(nums.splice(0, i +1))) {
        subArray = nums.splice(0,i);
      }
  }

  return subArray;
};

function sumOfArray (arr) {
    return arr.reduce((a,b) => a + b,0);
}

// console.log(sumOfArray([1]))


// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// https://leetcode.com/problems/maximum-subarray/description/?envType=study-plan&id=data-structure-i