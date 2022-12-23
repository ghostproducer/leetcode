/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    for(var i = 1; i < s.length; i ++){
        for(var j = 0; j<i; j++){
            if((s[i] == s[j])  != (t[i] == t[j]))
            {
                return false;
            }
        }

    }
    return true;
};


isIsomorphic('paper', 'title')