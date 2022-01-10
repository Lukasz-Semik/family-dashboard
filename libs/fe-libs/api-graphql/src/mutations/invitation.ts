import { gql } from '@apollo/client';

export const CreateSignUpInvitation = gql`
  mutation CreateSignUpInvitation($input: InvitationSignUpCreateInput!) {
    createSignUpInvitation(input: $input)
  }
`;

export const CreateUserInvitation = gql`
  mutation createUserInvitation($input: InvitationCreateInput!) {
    createUserInvitation(input: $input) {
      email
      firstName
      validTo
    }
  }
`;

export const ConfirmSignUpInvitation = gql`
  mutation ConfirmSignUpInvitation($input: InvitationConfirmInput!) {
    confirmSignUpInvitation(input: $input) {
      accessToken
    }
  }
`;

export const ResendInvitation = gql`
  mutation ResendInvitatio($email: String!) {
    resendInvitation(email: $email)
  }
`;

export const CancelInvitation = gql`
  mutation CancelInvitation($email: String!) {
    cancelInvitation(email: $email)
  }
`;
