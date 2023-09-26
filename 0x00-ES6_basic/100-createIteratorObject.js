// Iterating through objects in a report object

export default function createIteratorObject(report) {
  const iterator = [];
  const employees = Object.values(report.allEmployees);
  for (const list of employees) {
    for (const item of list) {
      iterator.push(item);
    }
  }

  return iterator;
}
