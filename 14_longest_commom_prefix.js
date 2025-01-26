/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""; // Handle empty array edge case.

    let commonPrefix = strs[0]; // Start with the first string as the reference.

    for (let i = 1; i < strs.length; i++) {
        let newPrefix = ""; // Temporary variable to store the new common prefix.
        for (let j = 0; j < commonPrefix.length && j < strs[i].length; j++) {
            if (commonPrefix[j] === strs[i][j]) {
                newPrefix += commonPrefix[j];
            } else {
                break; // Exit the loop if characters differ.
            }
        }
        commonPrefix = newPrefix; // Update commonPrefix with the result of the comparison.
        if (commonPrefix === "") return ""; // Return early if there's no common prefix.
    }

    return commonPrefix;
};

module.exports = longestCommonPrefix;
