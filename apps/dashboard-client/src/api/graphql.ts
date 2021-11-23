// import { ApolloClient, InMemoryCache } from '@apollo/client';

// // TODO: exctract cache
// export const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           token: {
//             read(existingToken) {
//               return existingToken;
//             },
//           },
//         },
//       },
//     },
//   }),
// });

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { FD_TOKEN_KEY } from '../constants/sessionStorageKeys';
import { getFromSessionStorage } from '../tempSessionStorage/tempSessionStorage';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3000/graphql`,
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = getFromSessionStorage(FD_TOKEN_KEY);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
