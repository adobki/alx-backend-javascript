// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import Car from '../10-car.js';

class TestCar extends Car {}

const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

// eslint-disable-next-line eqeqeq
console.log(tc1 == tc2);
