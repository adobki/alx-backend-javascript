// Basic integration testing with Express and request

const expect = require('chai').expect;
const request = require('request');

describe('8-api', () => {
  const url = 'http://localhost:7865';
  let response;
  before(() => {
    // const app = require('./api');
    response = new Promise(resolve => {
      request(url, (error, response, body) => {
        if (error) resolve({ body: `${error.name}: ${error.code}`, statusCode: 404 });
        else resolve({ body, statusCode: response.statusCode });
      });
    });
  });

  describe('index page `/`', function () {
    it('Correct status code', function (done) {
      response.then(response => {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('Correct result', function (done) {
      response.then(response => {
        expect(response.body).to.be.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
