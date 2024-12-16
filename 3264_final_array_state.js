/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {

    let indexOfSmallest = 0;
    for (let i=0; i < k; ++i) {
        indexOfSmallest = nums.indexOf(Math.min(...nums));
        nums[indexOfSmallest] = multiplier * nums[indexOfSmallest];
    }
    return nums;
};

let nums = [2,1,3,5,6];
let k = 5;
let multiplier = 2

console.log(getFinalState(nums, k, multiplier));
