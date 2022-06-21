import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { MusicVideo } from '../../types'
import { MusicVideoCollection } from './MusicVideoCollection'
import type { MusicVideoCollectionProps } from './MusicVideoCollection'

const collection: MusicVideo[] = [
  {
    artistName: 'ODESZA',
    songName: 'Behind The Sun',
    viewCount: 9_587_664,
    cover:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503037/images/app/w522_h292.jpg',
  },
  {
    artistName: 'Olly Murs ft. Travie McCoy',
    songName: 'Wrapped Up',
    viewCount: 1_454_563,
    cover:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg',
  },
  {
    artistName: 'Joaquin Sabina',
    songName: 'Dieguitos y Mafaldas',
    viewCount: 42_114,
    cover:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504752/images/app/w522_h292.jpg',
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
