import { Form } from 'formik';
import styled from 'styled-components';

import {
  dsStyles,
  Typography24SemiBold,
} from '@family-dashboard/design-system';

export const StyledTitle = styled.h2`
  ${Typography24SemiBold};
  color: ${dsStyles.colors.orange4};
  margin-bottom: 2rem;
`;

export const StyledForm = styled(Form)`
  max-width: 53rem;
  margin-bottom: 2rem;
`;

export const StyledSingleFieldWrapper = styled.div`
  width: 26rem;
  max-width: 100%;
  margin-bottom: 2rem;
`;

export const StyledFieldsLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFieldInnerLineWrapper = styled.div`
  width: 26rem;
  max-width: 100%;
  margin-bottom: 2rem;

  &:not(:last-of-type) {
    @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
      margin-right: 1rem;
    }
  }
`;

export const StyledFamilyHeadFieldWrapper = styled.div`
  margin-bottom: 1.5rem;
`;
