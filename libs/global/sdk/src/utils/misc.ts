export const buildHashKey = (...values: string[]) => {
  return values.join('#');
};
