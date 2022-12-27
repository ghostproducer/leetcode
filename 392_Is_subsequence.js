/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let trimT = t;
    for (let i=0; i<s.length;i++) {
        if (!trimT.includes(s[i])) {
            console.log(false)
            return false;
        }
        trimT = trimT.slice(trimT.indexOf(s[i]) + 1,trimT.length)


    }
    console.log(true)
    return true;
};

isSubsequence('bb', 'ahbgdc')