import { gql } from '@apollo/client';

export const CreateSignUpInvitation = gql`
  mutation CreateSignUpInvitation($input: InputCreateSignUpInvitation!) {
    createSignUpInvitation(input: $input)
  }
`;

export const ConfirmSignUpInvitation = gql`
  mutation ConfirmSignUpInvitation($input: InputConfirmSignUpInvitation!) {
    confirmSignUpInvitation(input: $input) {
      accessToken
    }
  }
`;

export const CancelInvitation = gql`
  mutation CancelInvitation($fullKey: String!) {
    cancelInvitation(fullKey: $fullKey)
  }
`;

export const CreateUserInvitation = gql`
  mutation createUserInvitation($input: InputCreateUserInvitation!) {
    createUserInvitation(input: $input) {
      email
      fullKey
      personalDetails {
        firstName
      }
      invitationDetails {
        validTo
      }
    }
  }
`;

export const ConfirmUserInvitation = gql`
  mutation ConfirmUserInvitation(
    $token: String!
    $input: InputConfirmUserInvitation!
  ) {
    confirmUserInvitation(input: $input, token: $token) {
      accessToken
    }
  }
`;
