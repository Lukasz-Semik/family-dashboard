import { Meta } from '@storybook/react';

import { dsStyles } from '../utils/styles';
import {
  IconBackArrow,
  IconBell,
  IconBookMarked,
  IconCalendar,
  IconCart,
  IconCheckmark,
  IconCheckmarkPure,
  IconChevron,
  IconCrossmark,
  IconDashboard,
  IconDoubleChevronLeft,
  IconEmail,
  IconExclamation,
  IconFamily,
  IconGear,
  IconHamburger,
  IconMessage,
  IconOrganizer,
  IconPen,
  IconPlusCircle,
  IconProgress,
  IconSecurity,
  IconSignOut,
  IconTrash,
  IconUser,
  IconWallet,
} from './Icons';
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
      <IconCheckmarkPure />
      icon-checkmark-pure
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconCrossmark />
      icon-crossmark
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconChevron />
      icon-chevron
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconDashboard />
      icon-dashboard
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconGear />
      icon-gear
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconOrganizer />
      icon-organizer
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconWallet />
      icon-wallet
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconUser />
      icon-user
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconFamily />
      icon-family
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconSignOut />
      icon-signout
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconHamburger />
      icon-hamburger
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconMessage />
      icon-message
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconPlusCircle />
      icon-plus-circle
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconBookMarked />
      icon-book-marked
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconCalendar />
      icon-calendar
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconCart />
      icon-cart
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconBell />
      icon-bell
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconProgress />
      icon-progress
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconTrash />
      icon-trash
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconPen />
      icon-pen
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconBackArrow color={dsStyles.colors.orange4} />
      icon-back-arrow
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconDoubleChevronLeft color={dsStyles.colors.orange4} />
      icon-double-chevron-left
    </StyledItemWrapper>
    <StyledItemWrapper>
      <IconExclamation />
      icon-exclamation
    </StyledItemWrapper>
  </StyledItemsWrapper>
);
