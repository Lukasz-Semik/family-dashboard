import { ApolloProvider } from '@apollo/client';

import { client } from './api/graphql';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles';
import { Routing } from './routing/Routing';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Routing />
    </ApolloProvider>
  );
};
