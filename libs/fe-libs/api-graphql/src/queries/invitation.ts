import { gql } from '@apollo/client';

export const GetUserInvitation = gql`
  query GetUserInvitation($token: String!) {
    getUserInvitation(token: $token) {
      email
      personalDetails {
        firstName
        middleName
        lastName
        dob
        gender
      }
      invitationDetails {
        familyName
        inviterName
      }
    }
  }
`;
