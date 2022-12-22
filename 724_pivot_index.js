/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = 0;
    for (let i = 0; i < nums.length; i++ ) {

        if (i=== 0 && (nums.slice(1,nums.length).reduce((acc,current) => { return acc + current},0) === 0)) {
            return 0;
        }
        let sumRight = 0;
        sumRight = nums.slice(i+2,nums.length).reduce((acc,current) => {return acc + current}, 0);

        sumLeft += nums[i]

            if (sumRight === sumLeft && i < nums.length - 1) {
                return i+1;
            }
    }
    return -1;
};
console.log(pivotIndex([2,1,-1]));