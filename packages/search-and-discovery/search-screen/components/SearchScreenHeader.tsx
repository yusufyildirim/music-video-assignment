import { useNavigation } from '@react-navigation/native'
import { Text } from '@xi/design-system.text'
import { fontSize, spacing, useColor } from '@xi/design-system.theme'
import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SearchBar } from './SearchBar/SearchBar'

export function SearchScreenHeader() {
  const navigation = useNavigation()
  const colors = useColor()

  const onSearchBarPress = () => {
    navigation.navigate('SearchResultModal')
  }

  return (
    <View style={{ backgroundColor: colors.background.default }}>
      <Text fontSize={fontSize.title2} style={styles.title}>
        Search
      </Text>
      <View style={styles.searchBar}>
        <SearchBar onPress={onSearchBarPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: spacing.s16,
    paddingVertical: spacing.s12,
  },
  title: {
    paddingHorizontal: spacing.s16,
  },
})
