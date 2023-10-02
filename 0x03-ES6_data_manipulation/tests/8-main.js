// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import cleanSet from '../8-clean_set.js';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', null, 'bonaparte', 'bonappetit', 'banana']), 'ban'));
console.log(cleanSet(new Set([]), 2));
