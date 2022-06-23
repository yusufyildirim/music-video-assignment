import { ContentPainter } from '@xi/browsing-experience.content'
import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SearchBar } from './components'

export function SearchScreen() {
  return (
    <ContentPainter
      ListHeaderComponent={
        <>
          <Text fontSize={fontSize.title2} style={styles.title}>
            Search
          </Text>
          <View style={styles.searchBar}>
            <SearchBar />
          </View>
        </>
      }
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
      collections={[
        {
          __typename: 'GenreCollection',
          name: 'Your favorites',
          collection: [
            { name: 'Hip-Hop', id: 1, videos: [] },
            { name: 'Pop', id: 2, videos: [] },
            { name: 'Dance', id: 3, videos: [] },
            { name: 'Dance/Electronic', id: 4, videos: [] },
            { name: 'Rock', id: 5, videos: [] },
          ],
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: spacing.s16,
    paddingVertical: spacing.s12,
    backgroundColor: 'black',
  },
  title: {
    paddingHorizontal: spacing.s16,
  },
})
