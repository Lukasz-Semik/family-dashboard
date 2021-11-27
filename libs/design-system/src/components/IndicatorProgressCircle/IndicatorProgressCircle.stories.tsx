import { Meta, Story } from '@storybook/react';

import { dsStyles } from '../../utils/styles';
import { StyledWrapper } from '../Stories.styled';
import { IndicatorProgressCircle as IndicatorProgressCircleComponent } from './IndicatorProgressCircle';
import { IndicatorProgressCircleProps } from './IndicatorProgressCircle.types';

export default {
  component: IndicatorProgressCircleComponent,
  title: 'IndicatorProgressCircle',
} as Meta;

const Template: Story<IndicatorProgressCircleProps> = (args) => (
  <StyledWrapper>
    <IndicatorProgressCircleComponent {...args} />
  </StyledWrapper>
);

export const IndicatorProgressCircle = Template.bind({});
IndicatorProgressCircle.args = {
  barColor: dsStyles.colors.orange4,
  bgColor: dsStyles.colors.orange1,
  size: 40,
  strokeWidth: 4,
  progress: 30,
  children: '1/4',
};
