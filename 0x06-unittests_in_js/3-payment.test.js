// Sinon: Spies

const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const a = 100;
const b = 20;
const type = 'SUM';

// eslint-disable-next-line jest/valid-describe
describe(`sendPaymentRequestToApi(${a}, ${b})`, () => {
  const calc = sinon.spy(utils, 'calculateNumber');
  sendPaymentRequestToApi(a, b);

  it('should call calculateNumber once', function () {
    sinon.assert.calledOnce(calc);
  });

  it(`should call calculateNumber with ('SUM', ${a}, ${b})`, function () {
    sinon.assert.calledWith(calc.firstCall, type, a, b);
  });

  calc.restore();
});
