/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    if (nums.length === 1) {
        return nums;
    }

    let checkedValues =[];

    for (let i = 0; i < nums.length; i++) {

        let checkNumber = nums[i];
        let newArray = nums.slice(i + 1, nums.length);


        if (newArray.includes(checkNumber)) {
            checkedValues.push(checkNumber);
            continue;
        } else {
            if (checkedValues.includes(checkNumber)) {
                continue;
            } else {
                return checkNumber;
            }
        }

    }

};
console.log(singleNumber([2,2,1]));
