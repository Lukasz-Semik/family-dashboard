import styled from 'styled-components';

export const StyledGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInputWrapper = styled.div`
  width: 3.5rem;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
