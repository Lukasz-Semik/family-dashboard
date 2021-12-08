import { gql } from '@apollo/client';

export const VerifySignUpEmail = gql`
  query VerifySignUpEmail($email: String!) {
    verifySignUpEmail(email: $email) {
      status
      inviterName
    }
  }
`;

export const GetUserInitialAppState = gql`
  query GetUserInitialAppState {
    getUserInitialAppState {
      currentUser {
        firstName
        lastName
        dob
      }
      family {
        name
      }
    }
  }
`;
