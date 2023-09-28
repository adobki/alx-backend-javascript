// Override toString() method of a class

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    this._name = name;
  }

  // code getter
  get code() {
    return this._code;
  }

  // code setter
  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }

    this._code = code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
