import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { MusicVideo } from '../../types'
import { MusicVideoCollection } from './MusicVideoCollection'
import type { MusicVideoCollectionProps } from './MusicVideoCollection'

const collection: MusicVideo[] = [
  {
    artist: 'ODESZA',
    title: 'Behind The Sun',
    viewCount: 9_587_664,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503037/images/app/w522_h292.jpg',
    genreId: 123,
    id: 1,
  },
  {
    artist: 'Olly Murs ft. Travie McCoy',
    title: 'Wrapped Up',
    viewCount: 1_454_563,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
    genreId: 123,
    id: 2,
  },
  {
    artist: 'Joaquin Sabina',
    title: 'Dieguitos y Mafaldas',
    viewCount: 42_114,
    image:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504752/images/app/w522_h292.jpg',
    genreId: 123,
    id: 3,
  },
]

export default {
  title: 'Browsing Experience/MusicVideoCollection',
  component: MusicVideoCollection,
  args: {
    collection,
    title: 'Oldies but goldies',
  },
} as ComponentMeta<typeof MusicVideoCollection>

const Template = (props: MusicVideoCollectionProps) => <MusicVideoCollection {...props} />

export const Basic = Template.bind({})
