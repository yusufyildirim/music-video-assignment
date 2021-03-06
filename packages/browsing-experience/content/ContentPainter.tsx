import { FlatList } from '@xi/design-system.flat-list'
import { Loading } from '@xi/design-system.loading'
import { spacing } from '@xi/design-system.theme'
import { FlatListProps, ListRenderItem, StyleSheet } from 'react-native'

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
  loading?: boolean
}

/**
 * A component that takes `ContentCollection[]` as an input and
 * produces corresponding UI elements (variants) as the output
 */
export const ContentPainter = ({ collections, loading, ...props }: ContentPainterProps) => {
  if (loading) return <Loading />

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      {...props}
      renderItem={renderItem}
      data={collections}
      keyExtractor={keyExtractor}
    />
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: spacing.s16,
  },
})
