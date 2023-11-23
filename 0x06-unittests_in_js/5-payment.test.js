// Sinon: Hooks

const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLog;

  beforeEach(() => {
    consoleLog = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLog.restore();
  });

  let a = 100; let b = 20; let out = 120;
  it(`sendPaymentRequestToApi(${a}, ${b})`, function () {
    sendPaymentRequestToApi(a, b);
    expect(consoleLog.args[0][0]).to.be.equal(`The total is: ${out}`);
    sinon.assert.calledOnce(consoleLog);
  });

  a = 10; b = 10; out = 20;
  it(`sendPaymentRequestToApi(${a}, ${b})`, function () {
    sendPaymentRequestToApi(a, b);
    expect(consoleLog.args[0][0]).to.be.equal(`The total is: ${out}`);
    sinon.assert.calledOnce(consoleLog);
  });
});
