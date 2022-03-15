import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useQuery, useSubscription } from '@apollo/client';

import { showSuccessToast } from '@family-dashboard/design-system';
import {
  APIGetRemindersResponse,
  APIGetRemindersVariables,
  APIOnReminderChangeResponse,
  APIOnReminderChangeVariables,
  GetReminders,
  OnReminderChange,
} from '@family-dashboard/fe-libs/api-graphql';
import {
  useSelectFamily,
  useSelectUser,
  webStoreRemindersActions,
} from '@family-dashboard/web-libs/store';

import { useInsertReminder } from './useInsertReminder';

export function useReminders() {
  const dispatch = useDispatch();

  const family = useSelectFamily();
  const user = useSelectUser();

  const { insertReminder } = useInsertReminder();

  const { loading } = useQuery<
    APIGetRemindersResponse,
    APIGetRemindersVariables
  >(GetReminders, {
    variables: {
      limit: 10,
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (response) => {
      dispatch(webStoreRemindersActions.setReminders(response.getReminders));
    },
  });

  useSubscription<APIOnReminderChangeResponse, APIOnReminderChangeVariables>(
    OnReminderChange,
    {
      onSubscriptionData: ({ subscriptionData }) => {
        const receivedData = subscriptionData.data?.onReminderChange;
        const receivedReminder = receivedData?.reminder;

        if (receivedReminder) {
          const { isVisible } = insertReminder(receivedReminder);

          if (isVisible) {
            const reminderAuthor = family.data.members.find(
              (member) => member.fullKey === receivedData?.authorFullKey
            );

            showSuccessToast(
              <FormattedMessage
                id="reminders.reminderCreatedBy"
                values={{ userName: reminderAuthor?.personalDetails.firstName }}
              />
            );
          }
        }
      },
      variables: {
        userFullKey: user.data.fullKey,
      },
    }
  );

  return {
    isLoading: loading,
  };
}
