import { gql } from '@apollo/client';

export const CreateSignUpInvitation = gql`
  mutation CreateSignUpInvitation($input: CreateInvitationInput!) {
    createSignUpInvitation(input: $input)
  }
`;

export const ConfirmSignUpInvitation = gql`
  mutation ConfirmSignUpInvitation($input: ConfirmInvitationInput!) {
    confirmSignUpInvitation(input: $input)
  }
`;
