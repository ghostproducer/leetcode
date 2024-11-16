/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {

    let numberString = num.toString();


    do {
        let count = 0;

        for (let i = 0; i < numberString.length; i++) {
            count += parseInt(numberString[i]);
        }
        if (count < 10) {
            return count;
        } else {
            numberString = count.toString();
        }

    } while (numberString >= 10)


};

console.log(addDigits(19));