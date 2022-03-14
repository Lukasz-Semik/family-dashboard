import { gql } from '@apollo/client';

export const VerifySignUpEmail = gql`
  query VerifySignUpEmail($email: String!) {
    verifySignUpEmail(email: $email) {
      status
      inviterName
    }
  }
`;

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
      details {
        familyName
        inviterName
      }
    }
  }
`;
