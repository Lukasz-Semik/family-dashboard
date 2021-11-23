export function getFromSessionStorage<T>(key: string): T | null {
  if (!sessionStorage) {
    return null;
  }

  const item = sessionStorage.getItem(key);

  if (!item) {
    return null;
  }

  const parsedItem = JSON.parse(item);
  return parsedItem as unknown as T;
}

export function setToSessionStorage<T>(key: string, value: T) {
  if (!sessionStorage) {
    return null;
  }

  sessionStorage.setItem(key, JSON.stringify(value));

  return value;
}
