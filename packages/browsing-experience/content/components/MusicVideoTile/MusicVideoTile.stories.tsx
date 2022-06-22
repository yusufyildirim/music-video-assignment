import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { MusicVideoTile } from './MusicVideoTile'
import type { MusicVideoTileProps } from './MusicVideoTile'

export default {
  title: 'Browsing Experience/MusicVideoTile',
  component: MusicVideoTile,
  args: {
    artist: 'ODESZA',
    title: 'Behind The Sun',
    viewCount: 1_500_000,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
    genreId: 111,
    id: 1,
  } as MusicVideoTileProps,
} as ComponentMeta<typeof MusicVideoTile>

const Template = (props: MusicVideoTileProps) => <MusicVideoTile {...props} />

export const Basic = Template.bind({})
