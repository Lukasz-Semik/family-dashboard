import { gql } from '@apollo/client';

export const ConfirmUserInvitation = gql`
  mutation ConfirmUserInvitation(
    $input: InvitationUserConfirmInput!
    $token: String!
  ) {
    confirmUserInvitation(input: $input, token: $token) {
      accessToken
    }
  }
`;

export const ResendInvitation = gql`
  mutation ResendInvitatio($email: String!) {
    resendInvitation(email: $email)
  }
`;
