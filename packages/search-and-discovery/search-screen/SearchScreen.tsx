import { ContentPainter } from '@xi/browsing-experience.content'
import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { SearchBar } from './components'
import { useSearchScreenContentQuery } from './hooks'

export function SearchScreen({ navigation }) {
  const { isLoading, data } = useSearchScreenContentQuery()
  if (isLoading) return null

  const onSearchBarPress = () => {
    navigation.navigate('SearchResultModal')
  }

  return (
    <SafeAreaView>
      <ContentPainter
        ListHeaderComponent={
          <>
            <Text fontSize={fontSize.title2} style={styles.title}>
              Search
            </Text>
            <View style={styles.searchBar}>
              <SearchBar onPress={onSearchBarPress} />
            </View>
          </>
        }
        stickyHeaderIndices={[0]}
        collections={data || []}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: spacing.s16,
    paddingVertical: spacing.s12,
    backgroundColor: 'black',
  },
  title: {
    backgroundColor: 'black',
    paddingHorizontal: spacing.s16,
  },
})
