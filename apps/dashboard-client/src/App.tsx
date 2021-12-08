import { IntlProvider } from 'react-intl';
import Modal from 'react-modal';
import { ApolloProvider } from '@apollo/client';

import { GlobalStylesDefault } from '@family-dashboard/design-system';
import { clientDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';

import { Routing } from './routing/Routing';
import { messages } from './translations/en';

Modal.setAppElement('#root');

export const App = () => {
  return (
    <ApolloProvider client={clientDashboardGraphql}>
      <IntlProvider locale="en" messages={messages}>
        <GlobalStylesDefault />
        <Routing />
      </IntlProvider>
    </ApolloProvider>
  );
};
