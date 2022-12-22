/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let sNumber = x.toString().split('');

    for (let i = 0; i <sNumber.length; i++) {
        // console.log(sNumber[i])

        if (sNumber[i] !== sNumber[sNumber.length - 1 -i]) {
            return false
        }
    }

    return true;
};

isPalindrome(121)