// Combining descriptions in a basic test with Mocha and Node assertion library

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calcul.js', function () {
  it('calculateNumber is properly exported from module', function () {
    assert.equal(typeof calculateNumber, 'function');
  });
});

describe('calculateNumber takes three required arguments', function () {
  it('error on no arguments', function () {
    assert.equal(calculateNumber(), 'Error');
  });
  it('error on only one valid argument', function () {
    assert.equal(calculateNumber('SUM'), 'Error');
  });
  it('error on only two valid arguments', function () {
    assert.equal(calculateNumber('SUM', 1), 'Error');
  });
});

describe('calculateNumber parameters: `type` must be a string', function () {
  it('error on undefined', function () {
    assert.equal(calculateNumber(undefined, 1, 2), 'Error');
  });
  it('error on number', function () {
    assert.equal(calculateNumber(0, 1, 2), 'Error');
  });
  it('error on bigint', function () {
    assert.equal(calculateNumber(BigInt(0), 1, 2), 'Error');
  });
  it('error on symbol', function () {
    assert.equal(calculateNumber(Symbol(0), 1, 2), 'Error');
  });
  it('error on function', function () {
    assert.equal(calculateNumber(() => true, 1, 2), 'Error');
  });
  it('error on boolean', function () {
    assert.equal(calculateNumber(true, 1, 2), 'Error');
  });
  it('error on array', function () {
    assert.equal(calculateNumber([0], 1, 2), 'Error');
  });
  it('error on object', function () {
    assert.equal(calculateNumber({ 0: 0 }, 1, 2), 'Error');
  });
});

describe('calculateNumber parameters: `type` === "SUM" | "SUBTRACT" | "DIVIDE"', function () {
  it('accepts valid types: `type` === "SUM"', function () {
    assert.notEqual(calculateNumber('SUM', 1, 2), 'Error');
  });
  it('accepts valid types: `type` === "SUBTRACT"', function () {
    assert.notEqual(calculateNumber('SUBTRACT', 1, 2), 'Error');
  });
  it('accepts valid types: `type` === "DIVIDE"', function () {
    assert.notEqual(calculateNumber('DIVIDE', 1, 2), 'Error');
  });
  it('error on empty string: `type` === ""', function () {
    assert.equal(calculateNumber('', 1, 2), 'Error');
  });
  it('error on lowercase types: `type` === "sum"', function () {
    assert.equal(calculateNumber('sum', 1, 2), 'Error');
  });
  it('error on lowercase types: `type` === "subtract"', function () {
    assert.equal(calculateNumber('subtract', 1, 2), 'Error');
  });
  it('error on lowercase types: `type` === "divide"', function () {
    assert.equal(calculateNumber('divide', 1, 2), 'Error');
  });
  it('error on `type` === "Error"', function () {
    assert.equal(calculateNumber('Error', 1, 2), 'Error');
  });
  it('error on `type` === "ERROR"', function () {
    assert.equal(calculateNumber('ERROR', 1, 2), 'Error');
  });
});

describe('calculateNumber parameters: `a` must be a number', function () {
  it('error on undefined', function () {
    assert.equal(calculateNumber('SUM', undefined, 2), 'Error');
  });
  it('error on bigint', function () {
    assert.equal(calculateNumber('SUM', BigInt(1), 2), 'Error');
  });
  it('error on symbol', function () {
    assert.equal(calculateNumber('SUM', Symbol(1), 2), 'Error');
  });
  it('error on function', function () {
    assert.equal(calculateNumber('SUM', () => true, 2), 'Error');
  });
  it('error on boolean', function () {
    assert.equal(calculateNumber('SUM', true, 2), 'Error');
  });
  it('error on array', function () {
    assert.equal(calculateNumber('SUM', [1], 2), 'Error');
  });
  it('error on object', function () {
    assert.equal(calculateNumber('SUM', { 1: 1 }, 2), 'Error');
  });
  it('error on string', function () {
    assert.equal(calculateNumber('SUM', '1', 2), 'Error');
  });
  it('no error on number', function () {
    assert.notEqual(calculateNumber('SUM', 1, 2), 'Error');
  });
});

describe('calculateNumber parameters: `b` must be a number', function () {
  it('error on undefined', function () {
    assert.equal(calculateNumber('SUM', 2, undefined), 'Error');
  });
  it('error on bigint', function () {
    assert.equal(calculateNumber('SUM', 2, BigInt(1)), 'Error');
  });
  it('error on symbol', function () {
    assert.equal(calculateNumber('SUM', 2, Symbol(1)), 'Error');
  });
  it('error on function', function () {
    assert.equal(calculateNumber('SUM', 2, () => true), 'Error');
  });
  it('error on boolean', function () {
    assert.equal(calculateNumber('SUM', 2, true), 'Error');
  });
  it('error on array', function () {
    assert.equal(calculateNumber('SUM', 2, [1]), 'Error');
  });
  it('error on object', function () {
    assert.equal(calculateNumber('SUM', 2, { 1: 1 }), 'Error');
  });
  it('error on string', function () {
    assert.equal(calculateNumber('SUM', 2, '1'), 'Error');
  });
  it('no error on number', function () {
    assert.notEqual(calculateNumber('SUM', 2, 1), 'Error');
  });
});

describe('calculateNumber `Math.round` usage', function () {
  it('correctly rounds floats downwards', function () {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('correctly rounds floats upwards', function () {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
});

describe('calculateNumber `DIVIDE` operations', function () {
  it('correctly handles zero division', function () {
    assert.equal(calculateNumber('DIVIDE', 0, 2), 'Error');
  });
  it('correctly divides by zero', function () {
    assert.equal(calculateNumber('DIVIDE', 2, 0), Infinity);
  });
  it('correctly divides positive integers', function () {
    assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
  });
  it('correctly divides negative integers', function () {
    assert.equal(calculateNumber('DIVIDE', -3, -1), 3);
  });
  it('correctly divides integer and float', function () {
    assert.equal(calculateNumber('DIVIDE', 3, 1.7), 1.5);
  });
  it('correctly divides floats', function () {
    assert.equal(calculateNumber('DIVIDE', 3.7, 1.7), 2);
  });
});

describe('calculateNumber `SUBTRACT` operations', function () {
  it('correctly subracts zeroes', function () {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
  it('correctly subtracts positive integers', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('correctly subtracts negative integers', function () {
    assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
  });
  it('correctly subtracts integer and float', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
});

describe('calculateNumber `ADD` operations', function () {
  it('correctly adds zeroes', function () {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });
  it('correctly adds positive integers', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('correctly adds negative integers', function () {
    assert.equal(calculateNumber('SUM', -1, -3), -4);
  });
  it('correctly adds integer and float', function () {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
});
