/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let count = 0;
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);

        if (s[i] === 'I') {
            if (s[i + 1] === 'X') {
                count = count + 9;
            } else if (s[i + 1] !== 'V') {
                count = count + 1;
            }
        } else if (s[i] === 'L') {
            if (s[i-1] === 'X') {
                count += 40
            } else {
                count = count + 50;
            }
        } else if (s[i] === 'V') {
            if (s[i - 1] === 'I') {
                count = count + 4
            } else {
                count = count + 5;

            }
        } else if (s[i] === 'M') {
            if (s[i - 1] === 'C') {
                count = count + 900
            } else {
                count = count + 1000;

            }
        } else if (s[i] === 'C') {
            if (s[i - 1] === 'X') {
                count = count + 90
            } else if(s[i+1] === 'M') {
                count = count;
            } else if(s[i+1] === 'D') {
                count = count;
            } else {
                count = count + 100;
            }
        } else if (s[i] === 'D') {
            if (s[i - 1] === 'C') {
                count = count + 400
            } else {
                count = count + 500;
            }
        } else if (s[i] === 'X') {
            if(s[i+1] === 'C') {
                count = count
            } else if(s[i+1] === 'L') {
                count = count
            } else if (s[i-1] === 'I') {
                count = count
            } else {
                count = count + 10;

            }
        } else if (s[i] === 'C') {
            if (s[i - 1] === 'X') {
                count += 90
            } else {
                count += 100
            }

        }
    }
    console.log(count)
    return count;
};

romanToInt("MMMXLV");