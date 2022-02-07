import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const buildAuthToken = (token?: string | null) =>
  token ? `Bearer ${token}` : '';

const webAuthLink = setContext((_, { headers }) => {
  const token = sdkGetFromSessionStorage<string | null>(FD_TOKEN_KEY);

  return {
    headers: {
      ...headers,
      authorization: buildAuthToken(token),
    },
  };
});

const mobielAuthLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem(FD_TOKEN_KEY);

  return {
    headers: {
      ...headers,
      authorization: buildAuthToken(token),
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

export const webDashboardGraphql = new ApolloClient({
  link: webAuthLink.concat(splitLink),
  cache: new InMemoryCache(),
});

export const mobileDashboardGraphql = new ApolloClient({
  link: mobielAuthLink.concat(splitLink),
  cache: new InMemoryCache(),
});
