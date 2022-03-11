export const buildHashKey = (...values: [string, string]) => {
  return values.join('#');
};

export const splitHashKey = (hashKey?: string) => {
  if (!hashKey) {
    return {
      type: undefined,
      data: undefined,
    };
  }

  const splitKey = hashKey.split('#');

  return {
    type: splitKey[0],
    data: splitKey[1],
  };
};
