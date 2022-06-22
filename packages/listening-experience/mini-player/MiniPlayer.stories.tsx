import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { MiniPlayer, MiniPlayerProps } from './MiniPlayer'

export default {
  title: 'Listening Experience/MiniPlayer',
  component: MiniPlayer,
} as ComponentMeta<typeof MiniPlayer>

const Template = (props: MiniPlayerProps) => <MiniPlayer {...props} />

export const Basic = Template.bind({})
