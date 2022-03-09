import { gql } from '@apollo/client';

export const CreateReminder = gql`
  mutation CreateReminder($input: InputCreateReminder!) {
    createReminder(input: $input) {
      familyId
      fullKey
      text
      type
      date
      familyItemFullKey
      familyItemType
      familyItemId
    }
  }
`;
