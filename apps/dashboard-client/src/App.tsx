import { IntlProvider } from 'react-intl';
import Modal from 'react-modal';
import { ApolloProvider } from '@apollo/client';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';

import {
  GlobalStylesDefault,
  ToastRoot,
} from '@family-dashboard/design-system';
import { clientDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';

import { Routing } from './routing/Routing';
import { messages } from './translations/en';

dayjs.extend(CustomParseFormat);
Modal.setAppElement('#root');

export const App = () => {
  return (
    <ApolloProvider client={clientDashboardGraphql}>
      <IntlProvider locale="en" messages={messages}>
        <GlobalStylesDefault />
        <ToastRoot />
        <Routing />
      </IntlProvider>
    </ApolloProvider>
  );
};
