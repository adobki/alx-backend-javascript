// Weak link data structures with WeakMap

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const called = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, called);
    if (called >= 5) throw new Error('Endpoint load is high');
    return called;
  }
  weakMap.set(endpoint, 1);
  return weakMap.get(endpoint);
}
