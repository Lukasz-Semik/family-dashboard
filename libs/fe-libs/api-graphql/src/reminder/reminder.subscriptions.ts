import { gql } from '@apollo/client';

export const OnReminderChange = gql`
  subscription OnReminderChange($userFullKey: String!) {
    onReminderChange(userFullKey: $userFullKey) {
      authorFullKey
      reminder {
        familyId
        fullKey
        text
        date
        hasTimeSet
        familyItemFullKey
        familyItemType
        familyItemId
      }
      message
    }
  }
`;
