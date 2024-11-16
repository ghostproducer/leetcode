/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let lastNonZeroIndex = 0; // Tracks the position to place the next non-zero element.

    // Move all non-zero elements to the front of the array.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros.
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums; // Return the modified array.

};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1]));