import { gql } from '@apollo/client';

export const GetUserInvitation = gql`
  query GetUserInvitation($token: String!) {
    getUserInvitation(token: $token) {
      inviterName
      familyName
      email
      firstName
      middleName
      lastName
      dob
      gender
    }
  }
`;
