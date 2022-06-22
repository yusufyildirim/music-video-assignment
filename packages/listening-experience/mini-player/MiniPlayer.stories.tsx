import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { MiniPlayer } from './MiniPlayer'

export default {
  title: 'Listening Experience/MiniPlayer',
  component: MiniPlayer,
} as ComponentMeta<typeof MiniPlayer>

const Template = () => <MiniPlayer />

export const Basic = Template.bind({})
