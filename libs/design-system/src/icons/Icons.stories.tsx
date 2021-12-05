import { Meta } from '@storybook/react';

import { IconChevron } from '..';
import { dsStyles } from '../utils/styles';
import { IconCheckmark, IconCrossmark, IconEmail, IconSecurity } from './Icons';
import { StyledIcon } from './Icons.styled';
import { StyledItemsWrapper, StyledItemWrapper } from './IconStories.styled';

export default {
  component: StyledIcon,
  title: 'Icons',
} as Meta;

export const Icons = () => (
  <StyledItemsWrapper>
    <StyledItemWrapper>
      <IconEmail />
      icon-email
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconSecurity />
      icon-security
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconCheckmark color={dsStyles.colors.orange4} />
      icon-checkmark
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconCrossmark />
      icon-crossmark
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconChevron />
      icon-chevron
    </StyledItemWrapper>
  </StyledItemsWrapper>
);
