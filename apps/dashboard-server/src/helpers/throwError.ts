import { GraphQLError } from 'graphql';

export const throwError = (errorMessage: string) => {
  throw new GraphQLError(errorMessage);
};
