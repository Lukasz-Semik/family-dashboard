import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

import { showSuccessToast } from '@family-dashboard/design-system';
import {
  APICreateReminderPayload,
  APICreateReminderResponse,
  CreateReminder,
} from '@family-dashboard/fe-libs/api-graphql';
import { sdkInsertAt } from '@family-dashboard/global/sdk';
import {
  useSeclectReminders,
  webStoreRemindersActions,
} from '@family-dashboard/web-libs/store';

export interface Values {
  date: string;
  text: string;
  time: string;
}

interface Args {
  closeModal: () => void;
}

export function useCreateReminder({ closeModal }: Args) {
  const currentReminders = useSeclectReminders();
  const dispatch = useDispatch();

  const [createReminderMutation, { loading }] = useMutation<
    APICreateReminderResponse,
    APICreateReminderPayload
  >(CreateReminder, {
    onCompleted: (response) => {
      const newReminder = response.createReminder;

      const indexForNewReminder = currentReminders.data.findIndex(
        (reminder) => {
          return reminder.date.valueOf() > newReminder.date.valueOf();
        }
      );

      if (indexForNewReminder > -1) {
        showSuccessToast(<FormattedMessage id="reminders.created" />);
        const newReminders = sdkInsertAt(
          currentReminders.data,
          indexForNewReminder,
          { ...newReminder, isNew: true }
        );

        newReminders.pop();

        dispatch(webStoreRemindersActions.setRemindersData(newReminders));
      } else {
        showSuccessToast(<FormattedMessage id="reminders.createdInvisible" />);
      }

      closeModal();
    },
  });

  const onSubmit = useCallback(
    (values: Values) => {
      createReminderMutation({
        variables: {
          input: values,
        },
      });
    },
    [createReminderMutation]
  );

  return {
    onSubmit,
    isLoading: loading,
  };
}
