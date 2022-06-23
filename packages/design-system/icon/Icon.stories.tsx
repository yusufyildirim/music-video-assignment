import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Icon, IconProps } from './Icon'

export default {
  title: 'Design System/Icon',
  component: Icon,
  args: {
    name: 'home',
    size: 24,
  } as IconProps,
  argTypes: {
    name: { control: 'select' },
  },
} as ComponentMeta<typeof Icon>

const Template = ({ ...args }: IconProps) => <Icon {...args} />

export const Basic = Template.bind({})
