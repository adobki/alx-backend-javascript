// Sinon: Async tests with done

/**
 * API simulator. Returns resolved promise with JSON/object
 * if `true` is passed, else `undefined`.
 *
 * @param {boolean} success `true` | `false`.
 * @returns {Promise<object>|undefined}
 */
function getPaymentTokenFromAPI(success) {
  if (typeof success === 'boolean' && success) {
    return Promise.resolve(new Promise((resolve) => resolve(
      { data: 'Successful response from the API' },
    )));
  }
  return undefined;
}

module.exports = getPaymentTokenFromAPI;
