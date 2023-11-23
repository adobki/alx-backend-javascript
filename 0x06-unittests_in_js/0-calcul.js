// Basic test with Mocha and Node assertion library

/**
 * Rounds two numbers then returns their sum.
 * @param {number} a First number
 * @param {number} b Second number
 * @returns {number}
 */
function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('ValueError: a and b must be numbers');
  }
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
