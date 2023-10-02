// Returns a new ArrayBuffer DataView with an Int8 value at a specific position

export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number'
    || typeof position !== 'number'
    || typeof value !== 'number') {
    throw new TypeError('Each parameter must be a number');
  }
  if (!Number.isInteger(position) || position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const int8TypedArray = new DataView(new ArrayBuffer(length));
  int8TypedArray.setInt8(position, value);
  return int8TypedArray;
}
