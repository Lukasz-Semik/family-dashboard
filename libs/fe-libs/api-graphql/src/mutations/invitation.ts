import { gql } from '@apollo/client';

export const ResendInvitation = gql`
  mutation ResendInvitatio($email: String!) {
    resendInvitation(email: $email)
  }
`;
