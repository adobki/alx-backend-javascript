// Defines a class Car with a method that clones an instance of the class

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // range getter
  get range() {
    return this._range;
  }

  // range setter
  set range(range) {
    if (typeof range !== 'string') {
      throw TypeError('Range must be a string');
    }

    this._range = range;
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
