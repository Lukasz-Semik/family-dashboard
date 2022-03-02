import { gql } from '@apollo/client';

export const GetFamilyDisplay = gql`
  query GetFamilyDisplay {
    getFamilyDisplay {
      fullKey
      familyId
      familyDetails {
        name
      }
      currentUser {
        fullKey
        email
        memberType
        modulePermissions {
          hasFinanacial
          hasFamilySettings
        }
        personalDetails {
          firstName
          middleName
          lastName
          dob
          gender
        }
      }
      members {
        fullKey
        email
        memberType
        modulePermissions {
          hasFinanacial
          hasFamilySettings
        }
        personalDetails {
          firstName
          middleName
          lastName
          dob
          gender
        }
      }
      invitations {
        fullKey
        email
        invitationDetails {
          validTo
        }
        personalDetails {
          firstName
        }
      }
    }
  }
`;
