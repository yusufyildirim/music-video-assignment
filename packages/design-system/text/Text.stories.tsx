// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Text } from './Text'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Example: ComponentStory<typeof Text> = () => <Text>Test Text</Text>
