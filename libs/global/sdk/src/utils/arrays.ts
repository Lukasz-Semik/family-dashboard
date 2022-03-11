export function sdkInsertAt<T>(array: T[], index: number, newItem: T): T[] {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

export function sdkRemoveAt<T>(array: T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function sdkReplaceAt<T>(array: T[], index: number, item: T): T[] {
  const newArray = [...array];

  newArray.splice(index, 1, item);

  return newArray;
}
