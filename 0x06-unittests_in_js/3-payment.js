// Sinon: Spies

const utils = require('./utils');

/**
 * Helper function used to print the result of adding two numbers.
 *
 * @param {number} totalAmount First number.
 * @param {number} totalShipping Second number.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
