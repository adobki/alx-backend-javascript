// Primitives: casting a class to a data type

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // size getter
  get size() {
    return this._size;
  }

  // size setter
  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }

    this._size = size;
  }

  // location getter
  get location() {
    return this._location;
  }

  // location setter
  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._location = location;
  }

  // Override primitive conversions
  [Symbol.toPrimitive](dataType) {
    if (dataType === 'number') {
      return this._size;
    }
    if (dataType === 'string') {
      return this._location;
    }
    return '[object Object]';
  }
}
