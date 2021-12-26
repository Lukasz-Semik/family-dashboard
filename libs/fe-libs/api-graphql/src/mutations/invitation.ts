import { gql } from '@apollo/client';

export const CreateSignUpInvitation = gql`
  mutation CreateSignUpInvitation($input: CreateInvitationInput!) {
    createSignUpInvitation(input: $input)
  }
`;

export const ConfirmSignUpInvitation = gql`
  mutation ConfirmSignUpInvitation($input: ConfirmInvitationInput!) {
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
