import { Text } from '@xi/design-system.text'
import { fontSize, spacing } from '@xi/design-system.theme'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

import { SearchBar } from './components'

export function SearchScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text fontSize={fontSize.title2} style={styles.title}>
          Search
        </Text>
        <SearchBar />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: spacing.s16,
  },
  title: {
    paddingVertical: spacing.s12,
  },
})
