import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Genre } from '../../types'
import { GenreCollection } from './GenreCollection'
import type { GenreCollectionProps } from './GenreCollection'

const collection: Genre[] = [
  { name: 'Hip-Hop', id: 1, videos: [] },
  { name: 'Pop', id: 2, videos: [] },
  { name: 'Dance', id: 3, videos: [] },
  { name: 'Dance/Electronic', id: 4, videos: [] },
  { name: 'Rock', id: 5, videos: [] },
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
