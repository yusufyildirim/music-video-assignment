import { FlatList } from '@xi/design-system.flat-list'
import { FlatListProps, ListRenderItem } from 'react-native'

import { ContentCollection } from './types'
import { GenreCollection, MusicVideoCollection, VerticalMusicVideoCollection } from './variants'

const renderItem: ListRenderItem<ContentCollection> = ({ item, index }) => {
  if (item.__typename === 'MusicVideoCollection') {
    if (item.vertical) {
      return <VerticalMusicVideoCollection title={item.name} collection={item.collection} />
    }

    return <MusicVideoCollection title={item.name} collection={item.collection} />
  }

  if (item.__typename === 'GenreCollection') {
    return <GenreCollection title={item.name} collection={item.collection} />
  }

  return null
}

const keyExtractor = (item: ContentCollection, index: number) => {
  return `${item.__typename}-${item.name}-${index}`
}

interface ContentPainterProps
  extends Omit<FlatListProps<ContentCollection>, 'renderItem' | 'data' | 'keyExtractor'> {
  collections: ContentCollection[]
}

export const ContentPainter = ({ collections, ...props }: ContentPainterProps) => {
  return (
    <FlatList {...props} renderItem={renderItem} data={collections} keyExtractor={keyExtractor} />
  )
}
