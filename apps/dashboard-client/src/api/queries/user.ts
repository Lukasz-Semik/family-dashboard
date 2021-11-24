import { gql } from '@apollo/client';

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
