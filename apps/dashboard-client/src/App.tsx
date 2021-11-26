import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/client';

import { GlobalStylesDefault } from '@family-dashboard/design-system';

import { client } from './api/graphql';
import { Routing } from './routing/Routing';
import { messages } from './translations/en';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale="en" messages={messages}>
        <GlobalStylesDefault />
        <Routing />
      </IntlProvider>
    </ApolloProvider>
  );
};
