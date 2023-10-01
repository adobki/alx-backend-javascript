// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import handleResponseFromAPI from '../2-then.js';

const promise = Promise.resolve();
console.log(handleResponseFromAPI(promise));
handleResponseFromAPI(Promise.resolve()).then((data) => console.log(data));
handleResponseFromAPI(Promise.reject()).then((data) => console.log(data));
