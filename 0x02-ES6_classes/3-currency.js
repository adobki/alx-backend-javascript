// Creates a class with attributes, getters, setters, and a method

export default class Currency {
  constructor(code, name) {
    this._code = code;
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
