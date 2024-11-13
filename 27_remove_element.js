/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let response = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;

};


var testcase1 = [3, 2, 2, 3];
var val1 = 3;
console.log(removeElement(testcase1, val1));