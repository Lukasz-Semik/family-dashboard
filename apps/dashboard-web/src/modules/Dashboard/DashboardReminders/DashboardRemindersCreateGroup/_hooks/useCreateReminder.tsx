import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { showSuccessToast } from '@family-dashboard/design-system';
import { CreateReminder } from '@family-dashboard/fe-libs/api-graphql';
import {
  GTCreateReminderInput,
  GTReminderDisplay,
} from '@family-dashboard/global/types';

export interface Values {
  date: string;
  text: string;
  time: string;
}

interface Args {
  closeModal: () => void;
}

export function useCreateReminder({ closeModal }: Args) {
  const [createReminderMutation, { loading }] = useMutation<{
    createReminder: GTReminderDisplay;
    input: GTCreateReminderInput;
  }>(CreateReminder, {
    onCompleted: () => {
      showSuccessToast('Crated!');
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
