import { gql } from '@apollo/client';

export const GetAllFamilyMembers = gql`
  query GetAllFamilyMembers {
    getAllFamilyMembers {
      users {
        id
        email
        firstName
        middleName
        lastName
        dob
        lastName
        dob
        gender
      }
      invitations {
        firstName
        email
        validTo
      }
    }
  }
`;
