import { gql } from '@apollo/client';

export const CreateReminder = gql`
  mutation CreateReminder($input: InputCreateReminder!) {
    createReminder(input: $input) {
      familyId
      fullKey
      text
      date
      hasTimeSet
      familyItemFullKey
      familyItemType
      familyItemId
    }
  }
`;
