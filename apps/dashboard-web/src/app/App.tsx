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
import { webDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';
import { messages } from '@family-dashboard/global/copies';
import { webStore } from '@family-dashboard/web-libs/store';

import { Routing } from './Routing';

dayjs.extend(CustomParseFormat);
Modal.setAppElement('#root');

export const App = () => {
  return (
    <Provider store={webStore}>
      <ApolloProvider client={webDashboardGraphql}>
        <IntlProvider locale="en" messages={messages}>
          <GlobalStylesDefault />
          <ToastRoot />
          <Routing />
        </IntlProvider>
      </ApolloProvider>
    </Provider>
  );
};
