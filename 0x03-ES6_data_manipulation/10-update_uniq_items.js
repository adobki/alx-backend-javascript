// Returns concatenated string of all set values that start with given string

export default function updateUniqueItems(groceriesList) {
  try {
    if (typeof groceriesList !== 'object') {
      throw new TypeError();
    }

    for (const [key, value] of groceriesList.entries()) {
      if (value === 1) {
        groceriesList.set(key, 100);
      }
    }
    // Array.from(groceriesList)
    //   .filter((item) => item[1] === 1)
    //   .forEach((item) => groceriesList.set(item[0], 100));
    return (groceriesList);
  } catch (err) {
    if (err.name === 'TypeError') { throw new Error('Cannot process'); }
    throw err;
  }
}
