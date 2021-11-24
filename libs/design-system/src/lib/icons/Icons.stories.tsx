import { Meta } from '@storybook/react';

import { dsStyles } from '../utils/styles';
import { IconCheckmark, IconEmail, IconSecurity } from './Icons';
import { StyledIcon } from './Icons.styled';
import { StyledItemsWrapper, StyledItemWrapper } from './IconStories.styled';

const Placeholder = () => <div />;

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
  </StyledItemsWrapper>
);
