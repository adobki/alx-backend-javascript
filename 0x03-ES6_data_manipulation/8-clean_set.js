// Returns concatenated string of all set values that start with given string

export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString === '') {
    return '';
  }

  return Array.from(set)
    .filter((string) => String(string).startsWith(startString))
    .map((string) => string.replace(startString, ''))
    .reduce((result, current) => result.concat(current, '-'), '')
    .slice(0, -1);
}
