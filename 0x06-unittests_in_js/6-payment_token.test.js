// Sinon: Async tests with done

const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('getPaymentTokenFromAPI(true)', function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data.data).to.be.equal('Successful response from the API');
      done();
    });
  });

  it('getPaymentTokenFromAPI(false)', function () {
    expect(getPaymentTokenFromAPI(false)).to.be.equal(undefined);
  });
});
