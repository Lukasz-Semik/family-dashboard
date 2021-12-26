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
        email
        id
        firstName
        middleName
        lastName
        dob
        lastName
        dob
        gender
        hasFinanceModuleAccess
        isFamilyHead
        memberType
      }
      family {
        name
        id
      }
    }
  }
`;
