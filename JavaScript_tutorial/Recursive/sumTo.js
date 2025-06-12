/**
 * Summates every positive integer from n to 1.
 * @param {Number} n - The number to be summed up to.
 * @returns {Number} The summation of all positive number.
 */
function sumTo(n) {
    return (n == 1 || n < 1) ? (n) : (n + sumTo(n - 1));
}
// This is for ES Module syntax
// export { sumTo };

// CommonJS Syntax
module.exports = sumTo;