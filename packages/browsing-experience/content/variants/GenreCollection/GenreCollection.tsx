import type { ListRenderItem } from '@xi/design-system.flat-list'
import React from 'react'

import { Genre } from '../../types'
import { Collection } from '../Collection/Collection'
import { GenreTile } from '../GenreTile/GenreTile'

export interface GenreCollectionProps {
  title: string
  collection: Genre[]
}

const renderItem: ListRenderItem<Genre> = ({ item }) => (
  <GenreTile image={item.image || ''} name={item.name} color={item.color} />
)

export const GenreCollection = ({ title, collection }: GenreCollectionProps) => {
  return <Collection numColumns={2} title={title} collection={collection} renderItem={renderItem} />
}
