// Sinon: Stubs

const sinon = require('sinon');
const expect = require('chai').expect;
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const a = 100;
const b = 20;
const type = 'SUM';
const out = 10;

// eslint-disable-next-line jest/valid-describe
describe(`sendPaymentRequestToApi(${a}, ${b}) with calculateNumber stub`, () => {
  const calc = sinon.stub(utils, 'calculateNumber');
  const consoleLog = sinon.stub(console, 'log');
  calc.withArgs(type, a, b).returns(out);

  sendPaymentRequestToApi(a, b);

  it(`calculateNumber stub returns ${out}`, function () {
    expect(consoleLog.args[0][0]).to.be.equal(`The total is: ${out}`);
  });

  it('should call calculateNumber once', function () {
    sinon.assert.calledOnce(calc);
  });

  it(`should call calculateNumber with ('SUM', ${a}, ${b})`, function () {
    sinon.assert.calledWith(calc.firstCall, type, a, b);
  });

  calc.restore();
  consoleLog.restore();
});
