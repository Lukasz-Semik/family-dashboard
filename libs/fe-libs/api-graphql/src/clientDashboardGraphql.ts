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

import { FD_TOKEN_KEY } from '@family-dashboard/global/const';
import { sdkGetFromSessionStorage } from '@family-dashboard/global/sdk';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3001/graphql`,
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = sdkGetFromSessionStorage(FD_TOKEN_KEY);

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

export const clientDashboardGraphql = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
