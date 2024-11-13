/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let concatAux = "";
    let sum = 0;
    while (nums.length > 0) {

        if (nums.length == 1) {
            concatAux = nums[0].toString();
        } else {
            concatAux = nums[0].toString() + nums[nums.length - 1].toString();
            nums.pop();
        }

        nums.shift();
        sum += parseInt(concatAux);
    }

    return sum;
};

var nums = [7, 52, 2, 4];

console.log(findTheArrayConcVal(nums));