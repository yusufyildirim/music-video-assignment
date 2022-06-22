import type { ListRenderItem } from '@xi/design-system.flat-list'
import React from 'react'

import { MusicVideo } from '../../types'
import { Collection } from '../Collection/Collection'
import { MusicVideoTile } from '../MusicVideoTile/MusicVideoTile'

export interface MusicVideoCollectionProps {
  title: string
  collection: MusicVideo[]
}

const renderItem: ListRenderItem<MusicVideo> = ({ item }) => <MusicVideoTile {...item} />

export const MusicVideoCollection = ({ title, collection }: MusicVideoCollectionProps) => {
  return <Collection title={title} collection={collection} renderItem={renderItem} />
}
