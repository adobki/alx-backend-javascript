// Sinon: Hooks

const expect = require('chai').expect;
const app = require('./api');

describe('api', () => {
  it('Correct status code', function () {
    expect(app).to.be.equal(undefined);
  });

  it('Correct result', function () {
    expect(app).to.be.equal(undefined);
  });

  it('Other', function () {
    expect(app).to.be.equal(undefined);
  });
});

describe('cart page', () => {
  it('Correct status code when :id is a number', function () {
    expect(app).to.be.equal(undefined);
  });

  it('Correct status code when :id is NOT a number (=> 404)', function () {
    expect(app).to.be.equal(undefined);
  });

  it('Other', function () {
    expect(app).to.be.equal(undefined);
  });
});
