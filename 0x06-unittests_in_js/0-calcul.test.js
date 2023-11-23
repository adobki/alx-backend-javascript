// Basic test with Mocha and Node assertion library

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('is properly exported from module', function () {
    assert.equal(typeof calculateNumber, 'function');
  });
  it('takes two required arguments', function () {
    assert.throws(() => calculateNumber());
    assert.throws(() => calculateNumber(1));
  });
  it('`a` must be a number', function () {
    assert.throws(() => calculateNumber(undefined, 2));
    assert.throws(() => calculateNumber(BigInt(1), 2));
    assert.throws(() => calculateNumber(Symbol(1), 2));
    assert.throws(() => calculateNumber(() => true, 2));
    assert.throws(() => calculateNumber(true, 2));
    assert.throws(() => calculateNumber([1], 2));
    assert.throws(() => calculateNumber({ 1: 1 }, 2));
    assert.throws(() => calculateNumber('1', 2));
  });
  it('`b` must be a number', function () {
    assert.throws(() => calculateNumber(2, undefined));
    assert.throws(() => calculateNumber(2, BigInt(1)));
    assert.throws(() => calculateNumber(2, Symbol(1)));
    assert.throws(() => calculateNumber(2, () => true));
    assert.throws(() => calculateNumber(2, true));
    assert.throws(() => calculateNumber(2, [1]));
    assert.throws(() => calculateNumber(2, { 1: 1 }));
    assert.throws(() => calculateNumber(2, '1'));
  });
  it('correctly adds zero', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('correctly adds positive integers', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('correctly adds negative integers', function () {
    assert.equal(calculateNumber(-1, -3), -4);
  });
  it('correctly adds integer and float', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('correctly rounds floats downwards', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('correctly rounds floats upwards', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
