// Regex integration testing with Express and request

const expect = require('chai').expect;
const request = require('request');

/**
 * Helper function for promisifying an API call with the request module.
 * @param {string} url The API's URL to fetch data from.
 * @returns {Promise<{body, statusCode}>}
 */
function fetchResponse(url) {
  return new Promise(resolve => {
    request(url, (error, response, body) => {
      if (error) resolve({ body: `${error.name}: ${error.code}`, statusCode: 404 });
      else resolve({ body, statusCode: response.statusCode });
    });
  });
}

describe('9-api', () => {
  describe('index page `/`', function () {
    const url = 'http://localhost:7865'; const response = fetchResponse(url);

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

  describe('cart page `/cart`', function () {
    describe('valid id `/cart/98`', function () {
      const id = 98; const url = `http://localhost:7865/cart/${id}`;
      const response = fetchResponse(url);

      it(`Correct status code for valid id (id = ${id})`, function (done) {
        response.then(response => {
          expect(response.statusCode).to.be.equal(200);
          done();
        });
      });

      it('Correct result for valid id', function (done) {
        response.then(response => {
          expect(response.body).to.be.equal(`Payment methods for cart ${id}`);
          done();
        });
      });
    });

    describe('invalid id `/cart/bad_id`', function () {
      const id = 'bad_id'; const url = `http://localhost:7865/cart/${id}`;
      const response = fetchResponse(url);

      it(`Correct status code for invalid id (id = ${id})`, function (done) {
        response.then(response => {
          expect(response.statusCode).to.be.equal(404);
          done();
        });
      });

      it('Correct result for invalid id', function (done) {
        response.then(response => {
          expect(response.body).to.be.equal('Error: 404 Not found!');
          done();
        });
      });
    });
  });
});
