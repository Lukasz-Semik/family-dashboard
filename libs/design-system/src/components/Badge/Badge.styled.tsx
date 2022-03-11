import styled from 'styled-components';

import { dsStyles } from '../../utils/styles';
import { Typograghy10SemiBold } from '../../utils/typography';

export const StyledBadgeSmall = styled.div`
  background-color: ${dsStyles.colors.violet1};
  ${Typograghy10SemiBold};
  border-radius: 4px;
  padding: 2px 4px;
`;
