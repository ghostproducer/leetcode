/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let count = 1;


    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums.splice(i + 1, 1);

        }
    }

    return count;

};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));