// Deep equality and post integration testing with Express and request

const expect = require('chai').expect;
const request = require('request');

/**
 * Helper function for promisifying an API call with the request module.
 * @example
 * `data` => { foo: 'bar', lang: 'en-US', framwork: 'Express.js' }
 *
 * @param {string} url The API's URL to fetch data from.
 * @param {string} method HTTP method to use for the request.
 * @param {object} data Object to be sent with the request as JSON data.
 * @returns {Promise<{body, statusCode}>}
 */
function fetchResponse(url, method = 'GET', data = {}) {
  const options = { method, url, json: data };

  return new Promise(resolve => {
    request(options, (error, response, body) => {
      if (error) resolve({ body: `${error.name}: ${error.code}`, statusCode: 404 });
      else resolve({ body, statusCode: response.statusCode });
    });
  });
}

describe('10-api', () => {
  const URL = 'http://localhost:7865';
  describe('index page: "/"', function () {
    const url = URL; const response = fetchResponse(url);

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

  describe('cart page: "/cart"', function () {
    describe('valid id `/cart/98`', function () {
      const id = 98; const url = `${URL}/cart/${id}`;
      const response = fetchResponse(url);

      it('Correct status code', function (done) {
        response.then(response => {
          expect(response.statusCode).to.be.equal(200);
          done();
        });
      });

      it('Correct result', function (done) {
        response.then(response => {
          expect(response.body).to.be.equal(`Payment methods for cart ${id}`);
          done();
        });
      });
    });

    describe('invalid id `/cart/bad_id`', function () {
      const id = 'bad_id'; const url = `${URL}/cart/${id}`;
      const response = fetchResponse(url);

      it('Correct status code', function (done) {
        response.then(response => {
          expect(response.statusCode).to.be.equal(404);
          done();
        });
      });

      it('Correct result', function (done) {
        response.then(response => {
          expect(response.body).to.be.equal('Error: 404 Not found!');
          done();
        });
      });
    });
  });

  describe('available_payments page: "/available_payments"', function () {
    const url = `${URL}/available_payments`;
    const response = fetchResponse(url);
    const payload = { payment_methods: { credit_cards: true, paypal: false } };

    it('Correct status code', function (done) {
      response.then(response => {
        expect(response.statusCode).to.be.equal(200);
        done();
      });
    });

    it('Correct result', function (done) {
      response.then(response => {
        expect(response.body).deep.to.be.equal(payload);
        done();
      });
    });
  });

  describe('login page: "/login"', function () {
    describe('with valid form data `{userName: "Betty"}`', function () {
      const url = `${URL}/login`; const name = 'Betty';
      const response = fetchResponse(url, 'POST', { userName: name });

      it('Correct status code', function (done) {
        response.then(response => {
          expect(response.statusCode).to.be.equal(200);
          done();
        });
      });

      it('Correct result', function (done) {
        response.then(response => {
          expect(response.body).to.be.equal(`Welcome ${name}`);
          done();
        });
      });
    });

    describe('without form data', function () {
      const url = `${URL}/login`;
      const response = fetchResponse(url, 'POST');

      it('Correct status code', function (done) {
        response.then(response => {
          expect(response.statusCode).to.be.equal(401);
          done();
        });
      });

      it('Correct result', function (done) {
        response.then(response => {
          expect(response.body).to.be.equal('Error: Unauthorised!');
          done();
        });
      });
    });
  });
});
