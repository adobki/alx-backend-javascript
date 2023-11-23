// utils module for calculateNumber function

/**
 * Rounds two numbers and does calculation with them based on _**`type`**_.
 *
 * Returns the `result` on success or `'Error'` otherwise.
 * @param {string} type Operator: `'SUM'` | `'SUBTRACT'` | `'DIVIDE'`.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number|string}
 */
function calculateNumber(type, a, b) {
  if (typeof type !== 'string' || typeof a !== 'number' || typeof b !== 'number') {
    return 'Error';
  }
  const x = Math.round(a); const y = Math.round(b);
  if (type === 'SUM') return x + y;
  if (type === 'SUBTRACT') return x - y;
  if (type === 'DIVIDE' && x) return x / y;
  return 'Error';
}

// const Utils = { calculateNumber };
// module.exports = Utils;
module.exports = { calculateNumber };
