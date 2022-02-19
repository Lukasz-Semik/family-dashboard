declare module 'dynamodb-data-types' {
  const AttributeValue: AttributeValue;
}

interface AttributeValue {
  wrap: <T>(element: T) => unknown;
  unwrap: <T>(element: unknown) => T;
}
