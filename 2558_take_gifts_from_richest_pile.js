/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {

    for (let i = 0; i < k; i++) {
        gifts.sort((a, b) => b - a);
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    }

    return gifts.reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0);
};

let gifts = [25, 64, 9, 4, 100];
let k = 4;

console.log(pickGifts(gifts, k));
