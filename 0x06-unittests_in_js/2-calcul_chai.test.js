// Basic test using Chai assertion library

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('2-calcul_chai.js', function () {
  it('calculateNumber is properly exported from module', function () {
    expect(typeof calculateNumber).to.equal('function');
  });
});

describe('calculateNumber takes three required arguments', function () {
  it('error on no arguments', function () {
    expect(calculateNumber()).to.equal('Error');
  });
  it('error on only one valid argument', function () {
    expect(calculateNumber('SUM')).to.equal('Error');
  });
  it('error on only two valid arguments', function () {
    expect(calculateNumber('SUM', 1)).to.equal('Error');
  });
});

describe('calculateNumber parameters: `type` must be a string', function () {
  it('error on undefined', function () {
    expect(calculateNumber(undefined, 1, 2)).to.equal('Error');
  });
  it('error on number', function () {
    expect(calculateNumber(0, 1, 2)).to.equal('Error');
  });
  it('error on bigint', function () {
    expect(calculateNumber(BigInt(0), 1, 2)).to.equal('Error');
  });
  it('error on symbol', function () {
    expect(calculateNumber(Symbol(0), 1, 2)).to.equal('Error');
  });
  it('error on function', function () {
    expect(calculateNumber(() => true, 1, 2)).to.equal('Error');
  });
  it('error on boolean', function () {
    expect(calculateNumber(true, 1, 2)).to.equal('Error');
  });
  it('error on array', function () {
    expect(calculateNumber([0], 1, 2)).to.equal('Error');
  });
  it('error on object', function () {
    expect(calculateNumber({ 0: 0 }, 1, 2)).to.equal('Error');
  });
});

describe('calculateNumber parameters: `type` === "SUM" | "SUBTRACT" | "DIVIDE"', function () {
  it('accepts valid types: `type` === "SUM"', function () {
    expect(calculateNumber('SUM', 1, 2)).to.not.equal('Error');
  });
  it('accepts valid types: `type` === "SUBTRACT"', function () {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.not.equal('Error');
  });
  it('accepts valid types: `type` === "DIVIDE"', function () {
    expect(calculateNumber('DIVIDE', 1, 2)).to.not.equal('Error');
  });
  it('error on empty string: `type` === ""', function () {
    expect(calculateNumber('', 1, 2)).to.equal('Error');
  });
  it('error on lowercase types: `type` === "sum"', function () {
    expect(calculateNumber('sum', 1, 2)).to.equal('Error');
  });
  it('error on lowercase types: `type` === "subtract"', function () {
    expect(calculateNumber('subtract', 1, 2)).to.equal('Error');
  });
  it('error on lowercase types: `type` === "divide"', function () {
    expect(calculateNumber('divide', 1, 2)).to.equal('Error');
  });
  it('error on `type` === "Error"', function () {
    expect(calculateNumber('Error', 1, 2)).to.equal('Error');
  });
  it('error on `type` === "ERROR"', function () {
    expect(calculateNumber('ERROR', 1, 2)).to.equal('Error');
  });
});

describe('calculateNumber parameters: `a` must be a number', function () {
  it('error on undefined', function () {
    expect(calculateNumber('SUM', undefined, 2)).to.equal('Error');
  });
  it('error on bigint', function () {
    expect(calculateNumber('SUM', BigInt(1), 2)).to.equal('Error');
  });
  it('error on symbol', function () {
    expect(calculateNumber('SUM', Symbol(1), 2)).to.equal('Error');
  });
  it('error on function', function () {
    expect(calculateNumber('SUM', () => true, 2)).to.equal('Error');
  });
  it('error on boolean', function () {
    expect(calculateNumber('SUM', true, 2)).to.equal('Error');
  });
  it('error on array', function () {
    expect(calculateNumber('SUM', [1], 2)).to.equal('Error');
  });
  it('error on object', function () {
    expect(calculateNumber('SUM', { 1: 1 }, 2)).to.equal('Error');
  });
  it('error on string', function () {
    expect(calculateNumber('SUM', '1', 2)).to.equal('Error');
  });
  it('no error on number', function () {
    expect(calculateNumber('SUM', 1, 2)).to.not.equal('Error');
  });
});

describe('calculateNumber parameters: `b` must be a number', function () {
  it('error on undefined', function () {
    expect(calculateNumber('SUM', 2, undefined)).to.equal('Error');
  });
  it('error on bigint', function () {
    expect(calculateNumber('SUM', 2, BigInt(1))).to.equal('Error');
  });
  it('error on symbol', function () {
    expect(calculateNumber('SUM', 2, Symbol(1))).to.equal('Error');
  });
  it('error on function', function () {
    expect(calculateNumber('SUM', 2, () => true)).to.equal('Error');
  });
  it('error on boolean', function () {
    expect(calculateNumber('SUM', 2, true)).to.equal('Error');
  });
  it('error on array', function () {
    expect(calculateNumber('SUM', 2, [1])).to.equal('Error');
  });
  it('error on object', function () {
    expect(calculateNumber('SUM', 2, { 1: 1 })).to.equal('Error');
  });
  it('error on string', function () {
    expect(calculateNumber('SUM', 2, '1')).to.equal('Error');
  });
  it('no error on number', function () {
    expect(calculateNumber('SUM', 2, 1)).to.not.equal('Error');
  });
});

describe('calculateNumber `Math.round` usage', function () {
  it('correctly rounds floats downwards', function () {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('correctly rounds floats upwards', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
});

describe('calculateNumber `DIVIDE` operations', function () {
  it('correctly handles zero division', function () {
    expect(calculateNumber('DIVIDE', 0, 2)).to.equal('Error');
  });
  it('correctly divides by zero', function () {
    expect(calculateNumber('DIVIDE', 2, 0)).to.equal(Infinity);
  });
  it('correctly divides positive integers', function () {
    expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
  });
  it('correctly divides negative integers', function () {
    expect(calculateNumber('DIVIDE', -3, -1)).to.equal(3);
  });
  it('correctly divides integer and float', function () {
    expect(calculateNumber('DIVIDE', 3, 1.7)).to.equal(1.5);
  });
  it('correctly divides floats', function () {
    expect(calculateNumber('DIVIDE', 3.7, 1.7)).to.equal(2);
  });
});

describe('calculateNumber `SUBTRACT` operations', function () {
  it('correctly subracts zeroes', function () {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });
  it('correctly subtracts positive integers', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('correctly subtracts negative integers', function () {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });
  it('correctly subtracts integer and float', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });
});

describe('calculateNumber `ADD` operations', function () {
  it('correctly adds zeroes', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
  it('correctly adds positive integers', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('correctly adds negative integers', function () {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('correctly adds integer and float', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
});
