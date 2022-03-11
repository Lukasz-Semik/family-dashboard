import { gql } from '@apollo/client';

export const GetReminders = gql`
  query GetReminders($limit: Int, $nextToken: InputNextTokenReminder) {
    getReminders(limit: $limit, nextToken: $nextToken) {
      reminders {
        familyId
        fullKey
        text
        date
        hasTimeSet
        familyItemFullKey
        familyItemType
        familyItemId
      }
      nextToken {
        fullKey
        familyId
      }
    }
  }
`;
