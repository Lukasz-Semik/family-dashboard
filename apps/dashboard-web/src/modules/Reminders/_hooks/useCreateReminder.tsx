import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useMutation } from '@apollo/client';

import { showSuccessToast } from '@family-dashboard/design-system';
import {
  APICreateReminderResponse,
  APICreateReminderVariables,
  CreateReminder,
} from '@family-dashboard/fe-libs/api-graphql';

import { useInsertReminder } from './useInsertReminder';

export interface Values {
  date: string;
  text: string;
  time: string;
}

interface Args {
  closeModal: () => void;
}

export function useCreateReminder({ closeModal }: Args) {
  const { insertReminder } = useInsertReminder();

  const [createReminderMutation, { loading }] = useMutation<
    APICreateReminderResponse,
    APICreateReminderVariables
  >(CreateReminder, {
    onCompleted: (response) => {
      const { isVisible } = insertReminder(response.createReminder);
      if (isVisible) {
        showSuccessToast(<FormattedMessage id="reminders.created" />);
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
