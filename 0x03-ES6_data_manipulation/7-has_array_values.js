// Returns true if all the elements in an array exist within a set, else false

export default function hasValuesFromArray(set, array) {
  if (typeof set !== 'object' || typeof array !== 'object') {
    return false;
  }

  return !new Set(array.map((item) => set.has(item))).has(false);
}
