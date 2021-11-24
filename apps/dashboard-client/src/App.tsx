import { ApolloProvider } from '@apollo/client';
import { IntlProvider, FormattedMessage } from 'react-intl';

import { client } from './api/graphql';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles';
import { Routing } from './routing/Routing';
import { messages } from './translations/en';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale="en" messages={messages}>
        <GlobalStyles />
        <Routing />
      </IntlProvider>
    </ApolloProvider>
  );
};
