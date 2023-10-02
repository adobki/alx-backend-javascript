// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import hasValuesFromArray from '../7-has_array_values.js';

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [5, 3, 1]));
