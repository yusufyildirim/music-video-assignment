import { ComponentMeta } from '@storybook/react'
import { fontSize } from '@xi/design-system.theme'
import React from 'react'

import { Text } from './Text'

export default {
  title: 'Design System/Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    fontSize: { control: 'select', options: Object.values(fontSize) },
  },
} as ComponentMeta<typeof Text>

const Template = ({ ...args }) => <Text {...args} />

export const Basic = Template.bind({})
