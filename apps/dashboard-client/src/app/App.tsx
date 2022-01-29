import { IntlProvider } from 'react-intl';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';

import {
  GlobalStylesDefault,
  ToastRoot,
} from '@family-dashboard/design-system';
import { clientDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';
import { fdStore } from '@family-dashboard/fe-libs/fd-store';
import { messages } from '@family-dashboard/global/copies';

import { Routing } from './Routing';

dayjs.extend(CustomParseFormat);
Modal.setAppElement('#root');

export const App = () => {
  return (
    <Provider store={fdStore}>
      <ApolloProvider client={clientDashboardGraphql}>
        <IntlProvider locale="en" messages={messages}>
          <GlobalStylesDefault />
          <ToastRoot />
          <Routing />
        </IntlProvider>
      </ApolloProvider>
    </Provider>
  );
};
