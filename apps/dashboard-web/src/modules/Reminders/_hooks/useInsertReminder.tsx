import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { sdkInsertAt } from '@family-dashboard/global/sdk';
import { GTReminder } from '@family-dashboard/global/types';
import {
  useSeclectReminders,
  webStoreRemindersActions,
  WSReminder,
} from '@family-dashboard/web-libs/store';

export function useInsertReminder() {
  const currentReminders = useSeclectReminders();
  const dispatch = useDispatch();

  const insertReminder = useCallback(
    (receivedReminder: GTReminder) => {
      const newReminder: WSReminder = { ...receivedReminder, isNew: true };

      const indexForNewReminder = currentReminders.data.findIndex(
        (reminder) => {
          return reminder.date.valueOf() > newReminder.date.valueOf();
        }
      );

      if (indexForNewReminder > -1) {
        const newReminders = sdkInsertAt(
          currentReminders.data,
          indexForNewReminder,
          newReminder
        );

        if (newReminders.length > 10) {
          newReminders.pop();
        }

        dispatch(webStoreRemindersActions.setRemindersData(newReminders));
        return { isVisible: true };
      } else if (currentReminders.data.length < 10) {
        dispatch(
          webStoreRemindersActions.setRemindersData([
            ...currentReminders.data,
            newReminder,
          ])
        );
        return { isVisible: true };
      }

      return { isVisible: false };
    },
    [dispatch, currentReminders.data]
  );

  return { insertReminder };
}
