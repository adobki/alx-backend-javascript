// Creates a class with multiple attributes, getters, and setters

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    this._length = length;
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(students) {
    if (typeof students !== 'object') {
      throw TypeError('Students must be an array');
    }

    this._students = students;
  }
}
