/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1; // Base case: Only one way to climb 1 step.
    if (n === 2) return 2; // Base case: Two ways to climb 2 steps.

    // Use dynamic programming to calculate the number of ways.
    let first = 1; // Ways to climb 1 step.
    let second = 2; // Ways to climb 2 steps.

    for (let i = 3; i <= n; i++) {
        const current = first + second; // Current ways are the sum of previous two.
        first = second;
        second = current;
    }

    return second;
};

module.exports = climbStairs;