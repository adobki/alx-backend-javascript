// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import createInt8TypedArray from '../5-typed_arrays.js';

console.log(createInt8TypedArray(10, 2, 89));
console.log(new Int8Array(createInt8TypedArray(10, 2, 89).buffer)[2]);

// const littleEndian = (() => {
//   const buffer = new ArrayBuffer(2);
//   new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
//   // Int16Array uses the platform's endianness.
//   console.log(buffer);
//   console.log(new Int16Array(buffer));
//   return new Int16Array(buffer)[0] === 256;
// })();
// console.log(littleEndian); // true or false
