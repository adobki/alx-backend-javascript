// Defines a class Car with a method that clones an instance of the class

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // brand getter
  get brand() {
    return this._brand;
  }

  // brand setter
  set brand(brand) {
    if (typeof brand !== 'string') {
      throw TypeError('Brand must be a string');
    }

    this._brand = brand;
  }

  // motor getter
  get motor() {
    return this._motor;
  }

  // motor setter
  set motor(motor) {
    if (typeof motor !== 'string') {
      throw TypeError('Motor must be a string');
    }

    this._motor = motor;
  }

  // color getter
  get color() {
    return this._color;
  }

  // color setter
  set color(color) {
    if (typeof color !== 'string') {
      throw TypeError('Color must be a string');
    }

    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this.brand, this.motor, this.color);
  }
}
