// Returns a set from an array

export default function setFromArray(array) {
  if (typeof array !== 'object') {
    throw new TypeError('Array must be an array object');
  }

  return new Set(array);
}
