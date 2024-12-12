import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowButton, ArrowButtonProps } from './ArrowButton';

export default {
  title: 'Components/ArrowButton',
  component: ArrowButton,
  argTypes: {
    onClick: { action: 'clicked' },
    isOpen: {
      control: {
        type: 'boolean',
      },
      description: 'Состояние открытия формы',
      defaultValue: false,
    },
  },
  args: {
    onClick: () => {},
    isOpen: false,
  },
} as Meta<typeof ArrowButton>;

const Template: Story<ArrowButtonProps> = (args) => <ArrowButton {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
Closed.storyName = 'Закрытое состояние';

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
Open.storyName = 'Открытое состояние';
