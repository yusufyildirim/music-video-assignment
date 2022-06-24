import type { ListRenderItem } from '@xi/design-system.flat-list'
import React from 'react'

import { MusicVideo } from '../../types'
import { Collection } from '../Collection/Collection'
import { MusicVideoItem } from '../MusicVideoItem/MusicVideoItem'

export interface VerticalMusicVideoCollectionProps {
  title: string
  collection: MusicVideo[]
}

const renderItem: ListRenderItem<MusicVideo> = ({ item }) => <MusicVideoItem {...item} />

export const VerticalMusicVideoCollection = ({
  title,
  collection,
}: VerticalMusicVideoCollectionProps) => {
  return <Collection title={title} collection={collection} renderItem={renderItem} />
}
