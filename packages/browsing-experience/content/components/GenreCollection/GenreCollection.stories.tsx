import { ComponentMeta } from '@storybook/react'
import { randomGenreColors } from '@xi/design-system.theme'
import React from 'react'

import { Genre } from '../../types'
import { GenreCollection } from './GenreCollection'
import type { GenreCollectionProps } from './GenreCollection'

const collection: Genre[] = [
  { name: 'Hip-Hop', id: 1, color: randomGenreColors[0] },
  { name: 'Pop', id: 2, color: randomGenreColors[1] },
  { name: 'Dance', id: 3, color: randomGenreColors[2] },
  { name: 'Dance/Electronic', id: 4, color: randomGenreColors[3] },
  { name: 'Rock', id: 5, color: randomGenreColors[4] },
]

export default {
  title: 'Browsing Experience/GenreCollection',
  component: GenreCollection,
  args: {
    collection,
    title: 'Oldies but goldies',
  },
} as ComponentMeta<typeof GenreCollection>

const Template = (props: GenreCollectionProps) => <GenreCollection {...props} />

export const Basic = Template.bind({})
