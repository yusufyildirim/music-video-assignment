import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { MusicVideo } from '../../types'
import { VerticalMusicVideoCollection } from './VerticalMusicVideoCollection'
import type { VerticalMusicVideoCollectionProps } from './VerticalMusicVideoCollection'

const collection: MusicVideo[] = [
  {
    artist: 'ODESZA',
    title: 'Behind The Sun',
    viewCount: 9_587_664,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503037/images/app/w522_h292.jpg',
    genreId: 123,
    decade: 2010,
    id: 1,
  },
  {
    artist: 'Olly Murs ft. Travie McCoy',
    title: 'Wrapped Up',
    viewCount: 1_454_563,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
    genreId: 123,
    decade: 2000,
    id: 2,
  },
  {
    artist: 'Joaquin Sabina',
    title: 'Dieguitos y Mafaldas',
    viewCount: 42_114,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504752/images/app/w522_h292.jpg',
    genreId: 123,
    decade: 1990,
    id: 3,
  },
]

export default {
  title: 'Browsing Experience/VerticalMusicVideoCollection',
  component: VerticalMusicVideoCollection,
  args: {
    collection,
    title: 'Oldies but goldies',
  },
} as ComponentMeta<typeof VerticalMusicVideoCollection>

const Template = (props: VerticalMusicVideoCollectionProps) => (
  <VerticalMusicVideoCollection {...props} />
)

export const Basic = Template.bind({})
